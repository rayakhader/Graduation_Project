import React from 'react'
import { useData } from '../context/AddApartmentDataContext'
import addApartmentInputStyle, { labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { Box, TextField,  Typography } from '@mui/material'
function DescriptionField() {
    const {description,setDescription}=useData()
    const {errors}=useData()

  return (
    <Box sx={{addApartmentInputStyle}}>
    <Typography sx={labelStyle} variant='subtitle1'><Box sx={requiredStyle}>Description<RequiredField /></Box></Typography>
    <TextField
    multiline
    variant='outlined'
    minRows={4}
    fullWidth
    placeholder='Enter Description here...'
    value={description}
    onChange={(e)=>setDescription(e.target.value)}
    sx={{backgroundColor:'white'}}
    />
    <Typography sx={requiredMessage}>{errors.fourth.description}</Typography>
  </Box>
  )
}

export default DescriptionField
