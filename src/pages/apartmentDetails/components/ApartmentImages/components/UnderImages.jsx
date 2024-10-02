import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {  Box, Button, Typography } from '@mui/material'

function UnderImages({apartmentDetails,apartmentDiscounts}) {
  const discountText = apartmentDiscounts.length === 1 ? 'Discount' : 'Discounts';
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <Button sx={{borderRadius:10,backgroundColor:'#1976d2',color:'white',
    '&:hover':{
      backgroundColor:'#1976d2',
      color:'white'
    }
    }}><LocalOfferIcon  />{apartmentDiscounts.length} {discountText}</Button>
      <Box sx={{display:'flex',alignItems:'center',gap:1}}>
        <Typography variant='body2' color='textSecondary'>Start from: </Typography>
      <Typography sx={{color:'black',fontSize:20,fontWeight:'bold'}}>
      {apartmentDetails.price} {apartmentDetails.priceCurrency?.name}</Typography>
      </Box>
      </Box>  )
}

export default UnderImages
