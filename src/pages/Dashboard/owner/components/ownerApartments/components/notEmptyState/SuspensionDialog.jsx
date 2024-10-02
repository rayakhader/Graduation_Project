import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, capitalize } from '@mui/material'
import React, { useEffect, useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'; // Importing a warning icon for visual effect
import getApartmentImagesById from '../../../../../../../API/apartments/getApartmentImagesById';
import getApartmentById from '../../../../../../../API/apartments/getApartmentById';

function SuspensionDialog({suspensionDialog,setSuspensionDialog,suspensionInfo}) {
    const[images,setImages]=useState([])
    const[apartmentDetails,setApartmentDetails]=useState({})
    const[ownerInfo,setOwnerInfo]=useState({})
    useEffect(()=>{
        if(Object.keys(suspensionInfo).length !== 0){
            const apartmentId = suspensionInfo.apartmentId
            getApartmentImagesById(apartmentId,{setImages})
            getApartmentById(apartmentId,{setApartmentDetails,setOwnerInfo})
        }
    },[suspensionInfo])
  return (
    <Dialog
    open={suspensionDialog}
    onClose={() => setSuspensionDialog(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Suspension Notice"}
    </DialogTitle>
    <DialogContent>
      <Typography id="alert-dialog-description" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <WarningIcon color="error" />
        You are currently suspended and cannot add new apartments.
      </Typography>
      <Box sx={{display:'flex',alignItems:'center',p:1.5}}>
        <Avatar src={images.length>0 && images[0].imagePath} sx={{borderRadius:0,height:100,width:100}} />
        <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
            <Typography textTransform='capitalize' fontWeight='bold'>{apartmentDetails.name}</Typography> 
            <Typography>{apartmentDetails.cityName}, {apartmentDetails.universityName}</Typography>
            <Typography variant='body2' color='textSecondary'>{apartmentDetails.price} {apartmentDetails.priceCurrency?.name}</Typography>
        </Box>
      </Box>
      <Typography>You can add new Apartment at {suspensionInfo.endDate}</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setSuspensionDialog(false)} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default SuspensionDialog
