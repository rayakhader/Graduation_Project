import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import addApartmentInputStyle, { iconStyle, labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import BusinessIcon from '@mui/icons-material/Business';
import { useData } from '../context/AddApartmentDataContext';

function BuildingField() {
  const{building,setBuilding}=useData()
  const{errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
    <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}><BusinessIcon sx={iconStyle} />Apartment Building<RequiredField /></Box></Typography>
    <TextField
     variant="outlined"
     placeholder="Enter apartment building..."
     value={building}
     onChange={(e)=>setBuilding(e.target.value)}
      />
      <Typography sx={requiredMessage}>{errors.second.building}</Typography>
  </Box>
 
  )
}

export default BuildingField
