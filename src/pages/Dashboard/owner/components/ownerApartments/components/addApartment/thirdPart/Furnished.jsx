import React from 'react'
import { Box,  FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import addApartmentInputStyle, {  labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { useData } from '../context/AddApartmentDataContext'
function Furnished() {
    const{furnishedStatus,setFurnishedStatus,errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
        <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}>Furnished<RequiredField /></Box></Typography>
        <RadioGroup
        row 
        aria-labelledby='furnished-radio-buttons-group'
        name='furnished'
        value={furnishedStatus}
        onChange={(e)=>setFurnishedStatus(e.target.value)}
        >
            <FormControlLabel control={<Radio />} value='1' label='Full'></FormControlLabel>
            <FormControlLabel control={<Radio />} value='2' label='Partial'></FormControlLabel>
            <FormControlLabel control={<Radio />} value='3' label='None'></FormControlLabel>
        </RadioGroup>
        <Typography sx={requiredMessage}>{errors.third.furnished}</Typography>
      </Box>
  )
}

export default Furnished
