import { Avatar, Box } from '@mui/material'
import React from 'react'
import logo from '../../../../../images/newlogo.png'
function LogoSec() {
  return (
    <Box sx={{width:'100%',display:'flex',alignItem:'center',justifyContent:'center',backgroundColor:'#0D253F',borderRadius:'4px'}}>
              <Avatar src={logo} alt="logo" sx={{ height:'150px',width:'250px'}}/>
    </Box>
  )
}

export default LogoSec
