import React from 'react'
import { Box,Input, Typography } from '@mui/material'
import addApartmentInputStyle, {labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { useData } from '../context/AddApartmentDataContext'
function ApartmentNum() {
    const {apartmentNumber,setApartmentNumber,errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
        <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}>Apartment number<RequiredField /></Box></Typography>
        <Input
        value={apartmentNumber}
        onChange={(e)=>setApartmentNumber(e.target.value)}
        type='number' />
        <Typography sx={requiredMessage}>{errors.third.apartmentNum}</Typography>
      </Box>
  )
}

export default ApartmentNum
