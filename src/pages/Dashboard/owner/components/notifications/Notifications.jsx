import React, { useEffect, useState } from 'react'
import { useExpanded } from '../../../context/ExpandedSidebar'
import { Box, CircularProgress, Divider, Grid, Tab, Tabs, Typography } from '@mui/material'
import AllNotifications from './AllNotifications'
import ApartmentNotifications from './ApartmentNotifications'
import FollowNotifications from './FollowNotifications'
import getAllNotifications from '../../../../../API/notifications/getAllNotifications'
import { useToken } from '../../../../../globalContext/TokenContext'
import userIdFromToken from '../../../../../customHook/userIdFromToken'
import DiscountsNotifications from './DiscountsNotifications'
import { useNotificationRefresh } from '../../../../../stableLayoutComponent/navbar/navbarUser/context/NotificationRefresh'
import { useRole } from '../../../../../globalContext/RoleContext'

function Notifications() {
  const {expanded}=useExpanded()
  const [selectedTab,setSelectedTab]=useState(0)
  const {token}=useToken()
  const[userId,setUserId]=useState('')
  const[notificationsList,setNotificationsList]=useState([])
  const[notificationsCount,setNotificationsCount]=useState(0)
  const {refresh} =useNotificationRefresh()
  const {userRole}= useRole()
  const [loading,setLoading]=useState(true)
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  useEffect(()=>{
    if(token){
    userIdFromToken(token,setUserId)}
  },[token])
  useEffect(()=>{
    if(userId){
    setLoading(true)
    getAllNotifications(token,userId,selectedTab,userRole,{setNotifications:setNotificationsList,setNotificationsCount}).finally(()=>setLoading(false))
    }
  },[selectedTab,userId,token,refresh])
  return (
    <Grid container item  xs={expanded?8:10.5} sm={expanded?8:10.9} md={expanded?9:11.3} lg={expanded?10:11.55} sx={{backgroundColor:'rgba(211, 211, 211, 0.13)',height:'100vh',px:2,color:'black'}}>
       <Box sx={{width:{xs:'100%',md:'80%',lg:'50%'},margin:'auto',border:'1px solid rgba(211,211,211,1)',my:1.5,p:1.5,backgroundColor:'white',borderRadius:'4px',boxShadow:5}}>
       <Box sx={{width:'100%',display:'flex',alignItems:'center',borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
        <Typography variant='h6'>Notifications</Typography>
        <Typography color="textSecondary">({notificationsList.length})</Typography>
      </Box> 
        <Tabs sx={{width:'100%'}} variant="scrollable"  scrollButtons="auto" allowScrollButtonsMobile  value={selectedTab} onChange={handleTabChange} indicatorColor='primary'>
          <Tab label='All' sx={{width:'22%'}}  />
          <Tab label='Apartment'sx={{width:'22%'}}  />
          {userRole==='Owner' &&<Tab label='Follow' sx={{width:'22%'}} />}
          <Tab label='Discount' sx={{width:'22%'}} />
        </Tabs>
        <Divider sx={{border:'1px solid red rgba(211,211,211,1)'}} />
        {loading && (<Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>)}
        {!loading && selectedTab===0 && <AllNotifications notificationsList={notificationsList}/>}
        {!loading && selectedTab===1 && <ApartmentNotifications addApartmentNotifications={notificationsList} />}
        {!loading && userRole==='Owner' && selectedTab===2 && <FollowNotifications followNotifications={notificationsList} />}
        {!loading && userRole==='Customer' && selectedTab===2 && <DiscountsNotifications addDiscountNotifications={notificationsList}/>}
        {!loading && userRole==='Owner' && selectedTab===3 && <DiscountsNotifications addDiscountNotifications={notificationsList} />}
       </Box>
    </Grid>
  )
}

export default Notifications
