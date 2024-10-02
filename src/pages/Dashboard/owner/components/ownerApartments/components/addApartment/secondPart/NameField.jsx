import React from 'react'
import { Box, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import addApartmentInputStyle, { iconStyle, labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { useData } from '../context/AddApartmentDataContext';
import ErrorIcon from '@mui/icons-material/Error';

function NameField() {
    const{name,setName}=useData()
    const{errors}=useData()
  
  return (
    <Box sx={addApartmentInputStyle}>
    <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}><HomeWorkIcon sx={iconStyle} />Apartment Name<RequiredField /></Box></Typography>
    <TextField
     variant="outlined"
     placeholder="Enter apartment name..."
     value={name}
     onChange={(e)=>setName(e.target.value)}
    //  InputProps={{
    //   endAdornment: errors.second.name && (
    //     <Tooltip title={errors.second.name} arrow>
    //       <IconButton>
    //        <ErrorIcon color="error" />
    //       </IconButton>
    //     </Tooltip>
    //   ),
    // }}
      // sx={{
      //   '& .MuiOutlinedInput-root fieldset': {
      //     borderColor: errors.second.name ? '#d32f2f' : undefined,
      //   },
      //   '&:hover .MuiOutlinedInput-root fieldset': {
      //     borderColor: errors.second.name ? '#d32f2f' : undefined,
      //   },
      //   '&.Mui-focused .MuiOutlinedInput-root fieldset': {
      //     borderColor: errors.second.name ? '#d32f2f' : 'primary.main', 
      //   },
      // }}
     />
     <Typography sx={requiredMessage}>{errors.second.name}</Typography>
  </Box>
  )
}
export default NameField
