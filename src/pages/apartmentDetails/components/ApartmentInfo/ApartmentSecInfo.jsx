import { Box } from '@mui/material'
import React from 'react'
import CommonBox from './CommonBox'

function ApartmentSecInfo({apartmentDetails}) {
  return (
    <Box sx={{width:'100%',display:'flex',flexWrap:'wrap'}}>
    <Box sx={{width:{xs:'100%',md:'50%'},display:'flex',flexDirection:'column',p:1.5}}>
      <CommonBox label="Floor number:" value={apartmentDetails.floorNumber} />
      <CommonBox label="Apartment number:" value={apartmentDetails.apartmentNumber} />
      <CommonBox label="Number of rooms:" value={apartmentDetails.numberOfRooms}/>
      <CommonBox label="Number of bathrooms:" value={apartmentDetails.numberOfBathrooms}/>
    </Box>
    <Box sx={{width:{xs:'100%',md:'50%'},display:'flex',flexDirection:'column',p:1.5}}>
      <CommonBox label="Furnished:" value={apartmentDetails.furnishedStatus?.name} />
      <CommonBox label="Gender:" value={apartmentDetails.genderAllowed?.name} />
    </Box>
    </Box>
  )
}
export default ApartmentSecInfo
