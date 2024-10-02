import React from 'react'
import {  Box,MenuItem, TextField, Typography } from '@mui/material'
import inputStyle from './style/inputStyle'
import { useAccountData } from '../context/AccountData'
import { useCheckChange } from '../context/CheckChange'

function EmailCity({citiesList,userInfo}) {
  const{city,setCity}=useAccountData()
  const {setChange}=useCheckChange()
  const CustomMenuProps = {
    PaperProps: {
      style: {
        maxHeight: 200, 
        overflow: 'auto', 
      },
    },
  };
  return (
    <Box sx={{display:'flex',width:'100%',alignItems:'center',p:1,justifyContent:'space-between'}}>
      <Box sx={{ display: 'flex',flexDirection: 'column',width:'50%',p:1}}>
    <Typography sx={{textAlign:'start'}} variant="subtitle1">Email</Typography>
    <TextField
   variant="outlined"
   value={userInfo.email || ''}
   disabled
   sx={inputStyle}
  />
    </Box>

        <Box sx={{ display: 'flex',flexDirection: 'column',width:'50%',p:1}}>
        <Typography sx={{textAlign:'start'}} variant="subtitle1">City</Typography>
        <TextField
        select
       variant="outlined"
       value={city}
      onChange={(e)=>{setCity(e.target.value);setChange(true)}}
       sx={inputStyle}
       SelectProps={{
        MenuProps: CustomMenuProps,
      }}
      >
          {citiesList.map((city,index)=>(
    <MenuItem key={index} id={city.id} value={city.name}>{city.name}</MenuItem>
  ))}
        </TextField>
      
        </Box>
        </Box> 
  )
}
export default EmailCity
