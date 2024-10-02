import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'

function CustomTextField({label,icon,value,placeholder,setValue,type,multiline,rows,setChanged,error}) {
  return (
    <Box sx={{display:'flex',flexDirection:'column',my:1}}>
            <Typography variant='subtitle' sx={{textAlign:'start'}}>{label}</Typography>
            <TextField
            placeholder={placeholder}
            value={value}
            onChange={(e)=>{setValue(e.target.value);setChanged(true)}}
            type={type}
            multiline={multiline}
            rows={rows||1}
            error={!!error}
            helperText={error}
            InputProps={{
                startAdornment:(
                  <InputAdornment position='start'>
                     {icon}
                  </InputAdornment>
                )
              }}
              sx={{ '& .MuiInputBase-input': { height: '20px'}}}
            />
             </Box>
  )
}

export default CustomTextField
