import React from 'react'
import {  Box, TextField, Typography } from '@mui/material'
import inputStyle from './style/inputStyle'
import { useAccountData } from '../context/AccountData'
import { useCheckChange } from '../context/CheckChange'

function Name({userInfo}) {
  const {firstName,lastName,setFirstName,setLastName}=useAccountData()
  const{setChange}=useCheckChange()
  return (
    <Box sx={{display:'flex',width:'100%',alignItems:'center',p:1,justifyContent:'space-between'}}>
      <Box sx={{display:'flex',flexDirection:'column' , width:'50%',p:1}}>
    <Typography sx={{textAlign:'start'}} variant="subtitle1">First name</Typography>
    <TextField
   variant="outlined"
   value={firstName}
   sx={inputStyle}
   onChange={(e)=>{setFirstName(e.target.value);setChange(true)}}
  />
  </Box>
  <Box sx={{display:'flex',flexDirection:'column',width:'50%',p:1}}>
  <Typography sx={{textAlign:'start'}} variant="subtitle1">Last name</Typography>
    <TextField
   variant="outlined"
   value={lastName}
   sx={inputStyle}
   onChange={(e)=>{setLastName(e.target.value);setChange(true)}}
  />
  </Box>
    </Box>
  )
}

export default Name
