import React from 'react'
import { FaDollarSign } from 'react-icons/fa';
import {InputAdornment,TextField} from '@mui/material';

function PriceSearch({price,setPrice,priceError,setPriceError}) {
  const handlePriceChange =(event)=>{
    const value = event.target.value
    setPrice(value)
    if(value < 0){
      setPriceError(true)
    }else{
      setPriceError(false)
    }
  }
  return (
    <TextField 
    type='number'
    placeholder='Price' sx={{px:{xs:0,md:1.5},width:{xs:'50%',md:'170px'}}} 
    value={price} 
    error={priceError}
    onChange={handlePriceChange}
    InputProps={{
       startAdornment:(
         <InputAdornment position="start">
           <FaDollarSign  color='black' />
         </InputAdornment>
        )
    }}/>
  )
}

export default PriceSearch
