import React from 'react'
import { Box,TextField, Typography } from '@mui/material'
import { useAddTenantInfo } from './context/AddTenantInfo'

function DateFields() {
    const {startDate,setStartDate,endDate,setEndDate}=useAddTenantInfo()
  return (
    <Box sx={{display:'flex',gap:3}}>
             <Box sx={{display:'flex',flexDirection:'column',width:'50%'}}>
            <Typography variant='subtitle' sx={{textAlign:'start'}}>Start date</Typography>
            <TextField
            type='date'
            value={startDate}
            onChange={(e)=>setStartDate(e.target.value)}
              sx={{ '& .MuiInputBase-input': { height: '20px'}}}
             />
             </Box>
             <Box sx={{display:'flex',flexDirection:'column',width:'50%'}}>
            <Typography variant='subtitle' sx={{textAlign:'start'}}>End date</Typography>
            <TextField
            type='date'
            value={endDate}
            onChange={(e)=>setEndDate(e.target.value)}
              sx={{ '& .MuiInputBase-input': { height: '20px'}}}
             />
             </Box>
             </Box>
  )
}

export default DateFields
