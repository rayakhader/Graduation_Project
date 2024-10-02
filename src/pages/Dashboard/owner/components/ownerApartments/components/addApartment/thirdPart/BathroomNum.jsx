import React from 'react'
import { Box,Input, Typography } from '@mui/material'
import addApartmentInputStyle, { labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { useData } from '../context/AddApartmentDataContext'
function BathroomNum() {
    const {numberOfBathrooms,setNumberOfBathrooms,errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
        <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}>Number of bathrooms<RequiredField /></Box></Typography>
        <Input
        value={numberOfBathrooms}
        onChange={(e)=>setNumberOfBathrooms(e.target.value)}
        type='number' />
        <Typography sx={requiredMessage}>{errors.third.bathroomNum}</Typography>
      </Box>
  )
}

export default BathroomNum
