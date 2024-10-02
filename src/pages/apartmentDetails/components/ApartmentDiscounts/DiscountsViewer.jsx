import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import DiscountsFilter from './DiscountsFilter';
import Discount from './Discount';

function DiscountsViewer({apartmentDiscounts,setApartmentDiscounts,id}) {
  return (
    <Box sx={{border:'1px solid rgba(211,211,211,1)',p:1.5,borderRadius:'4px',boxShadow:3}}>
         <Box sx={{width:'100%',display:'flex',alignItems:'center',my:2,borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
          <Typography variant='h6'>Discounts</Typography>
         </Box>
        <DiscountsFilter setApartmentDiscounts={setApartmentDiscounts} id={id} />
         {apartmentDiscounts.map((discount)=>(
           <Discount key={discount.id} discount={discount}/>
         ))}
         </Box>
  )
}

export default DiscountsViewer
