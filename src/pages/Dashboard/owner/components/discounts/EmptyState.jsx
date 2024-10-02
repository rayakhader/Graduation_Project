import { Box, Typography } from '@mui/material'
import React from 'react'

function EmptyState() {
  return (
    <Box sx={{display:'flex',alignItems:'center',border:'1px solid rgba(211,211,211,1)',justifyContent:'center',width:'100%',p:10}}>
    <Typography variant='body2' color='textSecondary' sx={{textAlign:'center'}}>No discounts found</Typography>
</Box>
  )
}

export default EmptyState
