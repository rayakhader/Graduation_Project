import React from 'react'
import { Box,InputAdornment,MenuItem,OutlinedInput,Select,Typography } from '@mui/material'

function CityField({label,value,placeholder,setValue,icon,list}) {
  return (
    <Box sx={{display:'flex',flexDirection:'column',my:1}}>
    <Typography variant='subtitle' sx={{textAlign:'start'}}>{label}</Typography>
    <Select
    value={value}
    onChange={(e)=>setValue(e.target.value)}
    input={<OutlinedInput
      startAdornment={(
        <InputAdornment position="start">
          {icon}
        </InputAdornment>
      )}
      label={placeholder}
    />}
    MenuProps={{
      PaperProps: {
        style: {
          maxHeight: 200,  
        },
      },
    }}
      sx={{ '& .MuiInputBase-input': { height: '20px'}}}
      displayEmpty
    >
      <MenuItem value='' disabled>Select City</MenuItem>
      {list.map((item)=>(
         <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
        ))}
    </Select>
     </Box>
  )
}

export default CityField
