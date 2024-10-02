import React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { handleUniversity } from './handleCity'
import { useData } from '../context/AddApartmentDataContext';
import { Box, MenuItem, Select, Typography } from '@mui/material'
import addApartmentInputStyle, { iconStyle, labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle';
import RequiredField from '../RequiredField';
function UniversityField() {
    const{universityName,setUniversityName,universitiesList}=useData()
    const{errors}=useData()

  return (
    <Box sx={addApartmentInputStyle}>
    <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}><AccountBalanceIcon  sx={iconStyle} />Nearby University<RequiredField /></Box></Typography>
    <Select
      variant="outlined"
      value={universityName}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 200,  
          },
        },
      }}
      onChange={(e)=>handleUniversity(e,setUniversityName)}
      displayEmpty
    >
      <MenuItem value='' disabled>Select University</MenuItem>
      {universitiesList&&universitiesList.map((university)=>(
        <MenuItem key={university.id} id={university.id} value={university.name}>{university.name}</MenuItem>
      ))}
    </Select>
    <Typography sx={requiredMessage}>{errors.second.university}</Typography>
  </Box>
  )
}

export default UniversityField
