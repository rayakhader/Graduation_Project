import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import EssentialInfo from './EssentialInfo';
import Description from './Description'
import SecondaryInfo from './secondaryInfo/SecondaryInfo';
import { useEditApartmentInfo } from '../context/EditApartmentInfo';
import updateApartmentDetails from '../../../../../../../../../API/apartments/updateApartmentDetails';
import { useToken } from '../../../../../../../../../globalContext/TokenContext';
import { useRefreshApartmentDetails } from '../context/RefreshApartmentDetails';
import UpdateSuccess from './UpdateSuccess';
import { useChange } from '../context/Change';
function EditDialog({open,setOpen,apartmentDetails}) {
    const {token}=useToken()
    const{refresh,setRefresh}=useRefreshApartmentDetails()
    const[updated,setUpdated]=useState(false)
    const{change}=useChange()
    const{name,region,numOfRooms,numOfBathrooms,price,currency,furnishedStatus,
        gender,description}=useEditApartmentInfo()
    const handleUpdate =(apartmentId)=>{
        updateApartmentDetails(token,apartmentId,name,region,numOfRooms,numOfBathrooms,
        description,price,furnishedStatus,gender,currency,refresh,{setOpen,setUpdated,setRefresh})
    }
  return (
    <>
    <Dialog open={open} sx={{'& .MuiDialog-paper': { 
        minWidth: '600px',
      }}}>
        <DialogTitle sx={{p:0}}>
            <Box sx={{width:'100%',backgroundColor:'#1976d2',p:1.5,color:'white'}}>
                <Typography variant='h6'>Edit Apartment Details</Typography>
            </Box>
            <Box sx={{position:'absolute',top:10,right:10}}>
                <IconButton sx={{color:'white'}} onClick={()=>setOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent sx={{backgroundColor:'rgba(211,211,211,0.15)'}}>
           <EssentialInfo  apartmentDetails={apartmentDetails}/>
           <SecondaryInfo  apartmentDetails={apartmentDetails}/>
           <Description  apartmentDetails={apartmentDetails}/>
        </DialogContent>
        <DialogActions sx={{backgroundColor:'rgba(211,211,211,0.15)'}}>
            <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',gap:1,p:1.5}}>
                <Button color='primary' variant='contained' disabled={!change} onClick={()=>handleUpdate(apartmentDetails.id)}>Update</Button>
                <Button sx={{border:'1px solid #1976d2'}} onClick={()=>setOpen(false)}>Cancel</Button>
            </Box>
        </DialogActions>
    </Dialog>
    <UpdateSuccess updated={updated} setUpdated={setUpdated}  />
    </>
  )
}

export default EditDialog
