import { Box, Typography } from '@mui/material'
import React from 'react'

function NotAvailable() {
  return (
    <>
<Box sx={{
  position: 'absolute',
  top: 0,
  right: 0,
  width: '200px',
  height: '20px',
  bgcolor: 'rgba(211, 211, 211 ,1)', // Light grey overlay
  zIndex: 3,
  transform: 'translateY(-200%) translateX(50%) rotate(45deg)',
  transformOrigin: '0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <Typography variant="caption" sx={{
    color: 'black',
    fontWeight:'bold'
  }}>
    Not Available
  </Typography>
</Box>
</>
    
  )
}
export default NotAvailable
