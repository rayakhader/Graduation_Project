import { Box, FormControl, FormLabel, Input, InputAdornment, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFilter } from '../context/FilterValues'
import BathtubIcon from '@mui/icons-material/Bathtub';
import { useError } from '../context/Error';
function BathroomFilter() {
    const{bathrooms,setBathrooms}=useFilter()
    const[bathroomsError,setBathroomsError]=useState('')
    const{setError}=useError()
    useEffect(()=>{
            validateBathrooms(bathrooms)
    },[bathrooms])
    const validateBathrooms =(bathNum)=>{
        let bathNumError =''
        if(bathNum!=='' && bathNum<=0){
            bathNumError='Number of bathrooms must be greater than zero'
            setError(true)
        }
        else{
          setError(false)
        }
        setBathroomsError(bathNumError)
    }
  return (
    <div>
      <FormLabel component='legend' sx={{color:'black',fontWeight:'bold',padding:3,mb:-5}}>Bathrooms</FormLabel>
      <Box sx={{p:3}}>
      <FormControl variant="outlined" fullWidth>
  <Input
    id="bathrooms"
    name="bathrooms"
    value={bathrooms}
    onChange={(e)=>setBathrooms(e.target.value)}
    type="number"
    error={!!bathroomsError}
    startAdornment={<InputAdornment position="start"><BathtubIcon/></InputAdornment>}
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '4px',
      },
      '& .MuiInputBase-input': {
        textAlign: 'right',
      },
    }}
  />
 {bathroomsError && <Typography color="error" variant="caption">{bathroomsError}</Typography>}
</FormControl>
</Box>
    </div>
  )
}

export default BathroomFilter
