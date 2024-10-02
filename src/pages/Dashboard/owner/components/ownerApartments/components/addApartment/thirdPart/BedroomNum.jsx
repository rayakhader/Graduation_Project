import React from 'react'
import { Box,  Input, Typography } from '@mui/material'
import addApartmentInputStyle, {labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { useData } from '../context/AddApartmentDataContext'
function BedroomNum() {
    const {numberOfRooms,setNumberOfRooms,errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
        <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}>Number of bedrooms<RequiredField /></Box></Typography>
        <Input
        value={numberOfRooms}
        onChange={(e)=>setNumberOfRooms(e.target.value)}
        type='number' />
        <Typography sx={requiredMessage}>{errors.third.bedroomNum}</Typography>
      </Box>
   
  )
}

export default BedroomNum
