import React from 'react'
import { Box,InputAdornment,MenuItem,TextField,Typography } from '@mui/material'

function CityField({label,value,placeholder,setValue,icon,list,setChanged}) {
  const CustomMenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200, 
        overflow: 'auto', 
      },
    },
  };
  const isValidValue = list.some(item => item.id === value);
  return (
    <Box sx={{display:'flex',flexDirection:'column',my:1}}>
    <Typography variant='subtitle' sx={{textAlign:'start'}}>{label}</Typography>
    <TextField
    select
    value={isValidValue?value:''}
    onChange={(e)=>{setValue(e.target.value);setChanged(true)}}
    InputProps={{
        startAdornment:(
          <InputAdornment position='start'>
            {icon}
          </InputAdornment>
        )
    }}
    SelectProps={{
      MenuProps: CustomMenuProps,
    }}
      sx={{ '& .MuiInputBase-input': { height: '20px'}}}
    >
      <MenuItem value='' disabled>Select City</MenuItem>
      {list.map((item)=>(
         <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
        ))}
    </TextField>
     </Box>
  )
}

export default CityField
