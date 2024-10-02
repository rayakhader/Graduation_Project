import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ViewDiscount from './ViewDiscount';

function Discount({discount}) {
  const[view,setView]=useState(false)
  return (
    <Box sx={{backgroundColor:'white',p:1.5,boxShadow:1,display:'flex',justifyContent:'space-between',alignItems:'center',border:'1px solid rgba(211,211,211,1)',my:1.5}}>
    <Box sx={{display:'flex',alignItems:'center'}}>
    <LocalOfferIcon sx={{mr:1,color:'#d32f2f'}}/>
    <Typography variant='body2' color='textSecondary' sx={{textTransform:'capitalize'}}>{discount.description}</Typography>
    </Box>
    <Button variant='outlined' sx={{textTransform:'none',border:'1px solid rgba(211,211,211,1)',color:'black'}} onClick={()=>setView(true)}>View</Button>
    <ViewDiscount discount={discount} view={view} setView={setView}/>
 </Box>
  )
}

export default Discount
