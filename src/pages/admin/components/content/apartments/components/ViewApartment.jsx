import { Avatar, Box, Dialog, DialogContent, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import getApartmentById from '../../../../../../API/apartments/getApartmentById'
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LayersIcon from '@mui/icons-material/Layers';
import WeekendIcon from '@mui/icons-material/Weekend';
import WcIcon from '@mui/icons-material/Wc';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import getApartmentImagesById from '../../../../../../API/apartments/getApartmentImagesById';
import ImageSlider from './ImageSlider';
function ViewApartment({viewApartment,setViewApartment,selectedApartmentId}) {
    const[apartmentDetails,setApartmentDetails]=useState({})
    const[ownerInfo,setOwnerInfo]=useState({})
    const[images,setImages]=useState([])
    useEffect(()=>{
        if(viewApartment&& selectedApartmentId){
            getApartmentById(selectedApartmentId,{setApartmentDetails,setOwnerInfo})
            getApartmentImagesById(selectedApartmentId,{setImages})
        }
    },[selectedApartmentId,viewApartment])
    const handleContact =(phoneNumber)=>{
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
    }
  return (
    <Dialog open={viewApartment} onClose={()=>setViewApartment(false)}>
        <DialogContent>
            <Typography p={1.5} variant='h6' textTransform='capitalize' textAlign='start'>{apartmentDetails.name}</Typography>
            <div>
                <ImageSlider images={images} />
            </div>
            <Box sx={{p:1.5}}>
            <Typography variant='h6' textAlign='start' fontWeight='bold'>{apartmentDetails.price} {apartmentDetails.priceCurrency?.name}</Typography>
            <Typography>{apartmentDetails.cityName}, {apartmentDetails.universityName}, {apartmentDetails.region}, {apartmentDetails.building}</Typography>
            </Box>
            <Divider sx={{border:'1px solid rgba(211,211,211,1)'}} />
            <Box sx={{p:1.5}}>
                <Typography variant='body2' color='grey'>{apartmentDetails.description}</Typography>
            </Box>
            <Divider sx={{border:'1px solid rgba(211,211,211,1)'}} />
            <Box sx={{p:1.5}}>
                <Typography variant='h6' textAlign='start'>Features</Typography>
                <List>
                    <ListItem>
                    <ListItemIcon ><BathtubIcon /></ListItemIcon>
                    <ListItemText  primary="Bathrooms" sx={{display:'flex',justifyContent:'start'}}/>
                    <Typography fontWeight='bold'>{apartmentDetails.numberOfBathrooms}</Typography>
                    </ListItem>
                    <ListItem>
                    <ListItemIcon  ><BedroomParentIcon /></ListItemIcon>
                    <ListItemText primary="Bedrooms" sx={{display:'flex',justifyContent:'start'}}/>
                    <Typography fontWeight='bold'>{apartmentDetails.numberOfRooms}</Typography>
                    </ListItem>
                    <ListItem>
        <ListItemIcon ><ApartmentIcon /></ListItemIcon>
        <ListItemText primary="Apartment number" sx={{ display: 'flex', justifyContent: 'start'}} />
        <Typography fontWeight='bold'>{apartmentDetails.apartmentNumber}</Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon ><LayersIcon /></ListItemIcon>
        <ListItemText primary="Floor number" sx={{ display: 'flex', justifyContent: 'start' }} />
        <Typography fontWeight='bold'>{apartmentDetails.floorNumber}</Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon ><WeekendIcon /></ListItemIcon>
        <ListItemText primary="Furnished status" sx={{ display: 'flex', justifyContent: 'start' }} />
        <Typography fontWeight='bold'>{apartmentDetails.furnishedStatus?.name}</Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon ><WcIcon /></ListItemIcon>
        <ListItemText primary="Gender" sx={{ display: 'flex', justifyContent: 'start' }} />
        <Typography fontWeight='bold'>{apartmentDetails.genderAllowed?.name}</Typography>
      </ListItem>
                </List>
            </Box>
            <Divider sx={{border:'1px solid rgba(211,211,211,1)'}} />
            <Box p={1.5} sx={{display:'flex',justifyContent:'space-between',backgroundColor:'white',alignItems:'center',position:'sticky',bottom:-20}}>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <Avatar src={ownerInfo.imagePath} sx={{height:80,width:80}} />
                <Box p={1.5} sx={{display:'flex',flexDirection:'column'}}>
                <Typography variant='h6' textAlign='start'>{ownerInfo.fullName}</Typography>
                <Box sx={{display:'flex',flexDirection:'column'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <PhoneIcon sx={{ mr: 1 ,color:'grey'}} />
        <Typography variant='body2' color='textSecondary'>
          {ownerInfo.phoneNumber}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <EmailIcon sx={{ mr: 1,color:'grey' }} />
        <Typography variant='body2' color='textSecondary'>
          {ownerInfo.email}
        </Typography>
      </Box>
    </Box>
                </Box>
                </Box>
                <IconButton onClick={()=>handleContact(ownerInfo.phoneNumber)}>
                    <WhatsAppIcon sx={{color:'green'}} />
                </IconButton>
            </Box>



        </DialogContent>
    </Dialog>
  )
}

export default ViewApartment
