import { Box, Typography } from '@mui/material'
import React from 'react'

function ApartmentDesc({apartmentDetails}) {
  return (
    <Box sx={{border:'1px solid rgba(211,211,211,1)',p:1.5,borderRadius:'4px',boxShadow:3}}>
      <Box sx={{width:'100%',display:'flex',alignItems:'center',my:2,borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
        <Typography variant='h6'>Description</Typography>
      </Box>
      <Typography sx={{p:1.5}}>
        {apartmentDetails.description}
      </Typography>
    </Box>
  )
}

export default ApartmentDesc
