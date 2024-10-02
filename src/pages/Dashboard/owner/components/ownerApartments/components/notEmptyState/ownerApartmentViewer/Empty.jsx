import React from 'react'
import { Box, Typography } from '@mui/material'
function Empty({label}) {
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',p:10}}>
    <Typography variant='body2' color='textSecondary' sx={{textAlign:'center'}}>{label}</Typography>
</Box>
  )
}

export default Empty
