import React, { useEffect, useState } from 'react'
import getNotificationById from '../../../API/notifications/getNotificationById'
import getUserByIdProfile from '../../../API/users/getUserByIdProfile'
import { Avatar, Box, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DoneAllIcon from '@mui/icons-material/DoneAll'; 
import changeNotificationStatus from '../../../API/notifications/changeNotificationStatus'
import { useToken } from '../../../globalContext/TokenContext'
import { useNotificationRefresh } from './context/NotificationRefresh'

function ManageNotifications({notification}) {
    const[notificationType,setNotificationType]=useState('')
    const[apartmentId,setApartmentId]=useState('')
    const[senderId,setSenderId]=useState('')
    const[senderInfo,setSenderInfo]=useState({})
    const[status,setStatus]=useState('')
    const navigate = useNavigate()
    const {token}=useToken()
    const {refresh,setRefresh}=useNotificationRefresh()
    useEffect(()=>{
        if(Object.keys(notification).length>0){
            getNotificationById(token,notification.id,{setNotificationType,setApartmentId,setSenderId,setStatus})
        }
    },[notification])
    useEffect(()=>{
        if(senderId){
            getUserByIdProfile(senderId,{setUserInfo:setSenderInfo})
        }
    },[senderId])
    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const datePart = date.toLocaleDateString();
        const timePart = date.toLocaleTimeString();
        return { datePart, timePart };
    };
    const { datePart, timePart } = formatDateTime(notification.creationDate);
    const handleClick =()=>{
        if(status==='Unread'){
        changeNotificationStatus(token,notification.id,refresh,{setRefresh})}
        if(notificationType==='NewApartment' || notificationType==='NewDiscount'){
            const path =`/home/apartment/${apartmentId}`
            navigate(path)
        }
        else{
            if(status==='Unread'){
                changeNotificationStatus(token,notification.id,refresh,{setRefresh})
            }
            const path = `/profile/${senderId}`;
            navigate(path);
        }
    }
    const handleMarkAsRead=(event)=>{
        event.stopPropagation()
        changeNotificationStatus(token,notification.id,refresh,{setRefresh})
    }
  return (
    <ListItem sx={{ display: 'flex',borderTop:'1px solid rgba(211,211,211,1)', alignItems: 'center',backgroundColor:status==='Unread'?'rgba(211,211,211,0.15)':'none'}} button onClick={handleClick}>
            {notificationType === 'NewFollower' && (
                <>
                    <ListItemAvatar >
                        <Avatar src={senderInfo.imagePath} />
                    </ListItemAvatar>
                    <Box sx={{ ml: 2 }}>
                        <ListItemText 
                            primary={`${senderInfo.fullName} started following you`}
                            secondary={`on ${datePart} at ${timePart}`}
                        />
                    </Box>
                </>
            )}
            {notificationType==='NewApartment'  && ( <>
                    <Box sx={{ ml: 2 }}>
                        <ListItemText 
                            primary={`${senderInfo.fullName} added new apartment`}
                            secondary={`on ${datePart} at ${timePart}`}
                        />
                    </Box>
                </>)  }
                {notificationType==='NewDiscount'  && ( <>
                    <Box sx={{ ml: 2 }}>
                        <ListItemText 
                            primary={`${senderInfo.fullName} added new discount`}
                            secondary={`on ${datePart} at ${timePart}`}
                        />
                    </Box>
                </>)  }
                <IconButton 
                edge="end" 
                aria-label="mark as read" 
                onClick={handleMarkAsRead} 
                sx={{ ml: 'auto' ,color:'#1976d2'}}
                disabled={status==='Read'}
            >
                <DoneAllIcon />
            </IconButton>
        </ListItem>
  )
}

export default ManageNotifications
