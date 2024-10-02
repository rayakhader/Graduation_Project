import { Box, Typography } from '@mui/material'
import React from 'react'

function CommonBox({label,value}) {
  return (
       <Box sx={{display:'flex',alignItems:'center',p:1.5,gap:1}}><Typography color='textSecondary' variant='body2'>{label}</Typography><Typography>{value}</Typography></Box>
  )
}

export default CommonBox
