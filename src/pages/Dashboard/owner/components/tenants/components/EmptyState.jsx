import { Box, Typography } from '@mui/material'
import React from 'react'

function EmptyState() {
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',p:10}}>
        <Typography variant='body2' color='textSecondary' sx={{textAlign:'center'}}>No tenants found</Typography>
    </Box>
  )
}

export default EmptyState
