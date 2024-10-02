import { Box, Typography } from '@mui/material'
import React from 'react'

function HeaderSec({apartmentList}) {
  return (
    <Box sx={{width:'100%',display:'flex',alignItems:'center',my:2,borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
        <Typography variant='h6'>Apartments</Typography>
        <Typography color="textSecondary">({apartmentList.length})</Typography>
      </Box>
  )
}

export default HeaderSec
