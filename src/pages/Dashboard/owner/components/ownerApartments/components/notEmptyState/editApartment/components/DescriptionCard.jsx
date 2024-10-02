import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

function DescriptionCard({apartmentDetails,setOpen}) {
  return (
    <Box sx={{width:'100%',backgroundColor:'white', mt:2,p:1.5,borderRadius:'4px',border:'1px solid rgba(211,211,211,1)'}}>
           <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',my:2,borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
            <Typography variant='h6'>Description</Typography>
            <IconButton onClick={()=>setOpen(true)}>
      <EditIcon />
    </IconButton>
           </Box>
           <Box sx={{width:'100%',p:1.5}}>
            <Typography sx={{lineHeight:1.5}}>{apartmentDetails.description}</Typography>
           </Box>
          </Box>
  )
}

export default DescriptionCard
