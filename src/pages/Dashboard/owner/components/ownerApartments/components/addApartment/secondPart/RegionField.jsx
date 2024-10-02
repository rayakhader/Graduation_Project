import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import addApartmentInputStyle, { iconStyle, labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import PlaceIcon from '@mui/icons-material/Place';
import { useData } from '../context/AddApartmentDataContext';
function RegionField() {
  const {region,setRegion}=useData()
  const{errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
        <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}><PlaceIcon sx={iconStyle} />Apartment Region<RequiredField /></Box></Typography>
        <TextField
         variant="outlined"
         placeholder="Enter apartment region..."
         value={region}
         onChange={(e)=>setRegion(e.target.value)}
         />
         <Typography sx={requiredMessage}>{errors.second.region}</Typography>
      </Box>
  )
}

export default RegionField
