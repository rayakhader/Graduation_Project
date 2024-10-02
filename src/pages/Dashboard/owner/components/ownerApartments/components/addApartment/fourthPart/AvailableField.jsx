import React from 'react'
import { useData } from '../context/AddApartmentDataContext'
import addApartmentInputStyle, { labelStyle,  requiredMessage,  requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { Box, TextField, Typography } from '@mui/material'
function AvailableField() {
    const{endAvailableDate,setEndAvailableDate}=useData()
    const today = new Date().toISOString().split('T')[0]
    const {errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
      <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}>Avaialable<RequiredField /></Box></Typography>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Box sx={{...addApartmentInputStyle,width:'40%'}}>
        <Typography variant="body2" color="textSecondary" component="p">
              Start Date
            </Typography>
            <TextField
            type="date" 
            value={today}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{...addApartmentInputStyle,width:'40%'}}>
        <Typography variant="body2" color="textSecondary" component="p" >
              End Date
            </Typography>
            <TextField
            type="date" 
            variant='standard'
            value={endAvailableDate}
            onChange={(e)=>setEndAvailableDate(e.target.value)}
          />
        </Box>
        </Box>
        <Typography sx={requiredMessage}>{errors.fourth.endDate}</Typography>
      </Box>
  )
}

export default AvailableField
