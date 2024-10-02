import React from 'react'
import { Box,  FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import addApartmentInputStyle, { labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { useData } from '../context/AddApartmentDataContext'
function Gender() {
    const {genderAllowed,setGenderAllowed,errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
    <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}>Gender<RequiredField /></Box></Typography>
    <RadioGroup
    row 
    aria-labelledby='gender-radio-buttons-group'
    name='gender'
    value={genderAllowed}
    onChange={(e)=>setGenderAllowed(e.target.value)}
    >
        <FormControlLabel control={<Radio />} value='1' label='Female'/>
        <FormControlLabel control={<Radio />} value='2' label='Male'/>
    </RadioGroup>
    <Typography sx={requiredMessage}>{errors.third.gender}</Typography>
  </Box>
  )
}

export default Gender
