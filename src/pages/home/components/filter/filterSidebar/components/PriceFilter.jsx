import { Box, Divider, FormControl, FormLabel, Input, InputAdornment, InputLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFilter } from '../context/FilterValues';
import { useError } from '../context/Error';

function PriceFilter() {
  const {minPrice,maxPrice,setMaxPrice,setMinPrice}=useFilter()
  const{minPriceError,setMinPriceError,maxPriceError,setMaxPriceError}=useError()
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === 'minPrice') setMinPrice(value);
    else if (name === 'maxPrice') setMaxPrice(value);
  };
  useEffect(()=>{
      validatePrice(minPrice,maxPrice)
  },[minPrice,maxPrice])
  const validatePrice = (min,max)=>{
    let minError=''
    let maxError=''
    if(min!=='' && min<=0){
      minError='Minimum price must be greater than zero'
    }
    if(max!==''&& max<=0){
      maxError='Maximim price must be greater than zero'
    }
    else if(min !=='' && max!=='' && parseFloat(max)< parseFloat(min)){
      maxError = 'Maximum price must be greater than minimum price';
    }
    setMinPriceError(minError)
    setMaxPriceError(maxError)
  }
  return (
    <div>
        <FormLabel component='legend' sx={{color:'black',fontWeight:'bold',padding:3,mb:-5}}>Price</FormLabel>
 <Box sx={{ display:'flex',justifyContent:'center',p:3 }}>
  <Box sx={{display:'flex',flexDirection:'column',width:'40%',m:1}}>
 <InputLabel htmlFor="min-price" sx={{  fontWeight: 'bold',fontSize:'10px',color:'rgba(0, 0, 0, 0.54)' }}>
  Minimum Price
</InputLabel>
<FormControl variant="outlined">
  <Input
    id="min-price"
    name="minPrice"
    value={minPrice}
    onChange={handlePriceChange}
    type="number"
    startAdornment={<InputAdornment position="start">₪</InputAdornment>}
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '4px', // Adjust this value as needed
      },
      '& .MuiInputBase-input': {
        textAlign: 'right',
      },
    }}
    error={!!minPriceError}
  />
  {minPriceError && <Typography color="error" variant="caption">{minPriceError}</Typography>}
</FormControl>
</Box>
<Box sx={{display:'flex',flexDirection:'column',width:'40%',m:1}}>
<InputLabel htmlFor="max-price" sx={{ color:'rgba(0, 0, 0, 0.54)', fontWeight: 'bold',fontSize:'10px' }}>
  Maximum Price
</InputLabel>
<FormControl variant="outlined">
  <Input
    id="max-price"
    name="maxPrice"
    value={maxPrice}
    onChange={handlePriceChange}
    type="number"
    startAdornment={<InputAdornment position="start">₪</InputAdornment>}
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '4px', 
      },
      '& .MuiInputBase-input': {
        textAlign: 'right',
      },
    }}
    error={!!maxPriceError}
  />
  {maxPriceError && <Typography color="error" variant="caption">{maxPriceError}</Typography>}
</FormControl>
</Box>
</Box>  
<Divider sx={{border:'1px solid rgba(211,211,211,0.5)'}} />
    </div>
  )
}

export default PriceFilter
