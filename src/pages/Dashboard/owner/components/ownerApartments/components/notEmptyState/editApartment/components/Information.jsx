import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import CommonBox from '../../../../../../../../apartmentDetails/components/ApartmentInfo/CommonBox';

function Information({apartmentDetails,setOpen}) {
  return (
    <Box sx={{width:'100%',backgroundColor:'white', p:1.5,borderRadius:'4px',border:'1px solid rgba(211,211,211,1)'}}>
    <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',my:2,borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
    <Typography variant='h6'>Information</Typography>
    <IconButton onClick={()=>setOpen(true)}>
      <EditIcon />
    </IconButton>
    </Box>
    <Box sx={{width:'100%',display:'flex',flexWrap:'wrap'}}>
    <Box sx={{width:{xs:'100%',md:'50%'},display:'flex',flexDirection:'column',p:1.5}}>
      <CommonBox label="Building:" value={apartmentDetails.building} />
      <CommonBox label="City:" value={apartmentDetails.cityName} />
      <CommonBox label="University" value={apartmentDetails.universityName}/>
      <CommonBox label="Region:" value={apartmentDetails.region} />
      <CommonBox label="Floor number:" value={apartmentDetails.floorNumber} />
      <CommonBox label="Apartment number:" value={apartmentDetails.apartmentNumber}/>
    </Box>
    <Box sx={{width:{xs:'100%',md:'50%'},display:'flex',flexDirection:'column',p:1.5}}>
      <CommonBox label="Number of rooms:" value={apartmentDetails.numberOfRooms}/>
      <CommonBox label="Number of bathrooms:" value={apartmentDetails.numberOfBathrooms}/>
      <CommonBox label="Furnished:" value={apartmentDetails.furnishedStatus?.name}/>
      <CommonBox label="Gender:" value={apartmentDetails.genderAllowed?.name}/>
    </Box>
    </Box>
    </Box>
  )
}

export default Information
