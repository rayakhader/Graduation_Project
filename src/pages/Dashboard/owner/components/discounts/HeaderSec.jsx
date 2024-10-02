import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CreateDiscountDialog from './createDiscount/CreateDiscountDialog';

function HeaderSec({discountsList}) {
 const [createNewDiscount,setCreateNewDiscount]=useState(false)
  return (
  <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',my:2,borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
     <Box sx={{display:'flex',alignItems:'center'}}>
    <Typography variant='h6'>Discounts</Typography>
    <Typography color="textSecondary">({discountsList.length})</Typography>
    </Box>
    <Button variant='contained' onClick={()=>setCreateNewDiscount(true)}><AddIcon />Create Discount</Button>
    <CreateDiscountDialog createNewDiscount={createNewDiscount} setCreateNewDiscount={setCreateNewDiscount} />
  </Box>
  )
}

export default HeaderSec
