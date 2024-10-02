import React from 'react'
import { useData } from '../context/AddApartmentDataContext'
import addApartmentInputStyle, {  labelStyle,  requiredMessage,  requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { Box, InputAdornment,  SvgIcon, TextField, Tooltip, Typography } from '@mui/material'
function PriceField() {
    const {price,setPrice}=useData()
    const {errors}=useData()
  return (
    <Box sx={{...addApartmentInputStyle,width:'40%'}}>
    <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}>Price<RequiredField /></Box></Typography>
    <TextField
    value={price}
    onChange={(e)=>setPrice(e.target.value)}
    placeholder='Start From'
    type='number'
    variant="standard"
    InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <Tooltip
         title="Enter the lowest price for multi-room apartments with varied pricing.">
          <SvgIcon color="disabled" style={{height:'20px',width:'20px'}}>
            <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm.25 5a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5Zm2.25 13.5h-4a1 1 0 0 1 0-2h.75a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25h-.75a1 1 0 0 1 0-2h1a2 2 0 0 1 2 2v4.75a.25.25 0 0 0 .25.25h.75a1 1 0 1 1 0 2Z"></path>
          </SvgIcon>
        </Tooltip>
      </InputAdornment>
    ),
  }}
/>
<Typography sx={requiredMessage} >{errors.fourth.price}</Typography>
    </Box>
  )
}

export default PriceField
