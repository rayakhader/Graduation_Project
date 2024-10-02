import React from 'react'
import { Box,  Input,  Typography } from '@mui/material'
import addApartmentInputStyle, {  labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { useData } from '../context/AddApartmentDataContext'
function FloorNum() {
    const{floorNumber,setFloorNumber,errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
    <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}>Floor number<RequiredField /></Box></Typography>
    <Input 
    value={floorNumber}
    onChange={(e)=>setFloorNumber(e.target.value)}
    type='number'
    />
    <Typography sx={requiredMessage}>{errors.third.floorNum}</Typography>
  </Box>
  )
}

export default FloorNum
