import { Box, FormControl, FormLabel, Input, InputAdornment, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFilter } from '../context/FilterValues'
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { useError } from '../context/Error';
function BedroomFilter() {
    const{bedrooms,setBedrooms}=useFilter()
    const[bedroomsError,setBedroomsError]=useState('')
    const{setError}=useError()
    useEffect(()=>{
            validateBedrooms(bedrooms)
    },[bedrooms])
    const validateBedrooms =(bedNum)=>{
        let bedNumError =''
        if(bedNum!=='' && bedNum<=0){
            bedNumError='Number of bedrooms must be greater than zero'
            setError(true)
        }
        else{
          setError(false)
        }
        setBedroomsError(bedNumError)
    }
  return (
    <div>
     <FormLabel component='legend' sx={{color:'black',fontWeight:'bold',padding:3,mb:-5}}>Bedrooms</FormLabel>
      <Box sx={{p:3}}>
      <FormControl variant="outlined" fullWidth>
  <Input
    id="bathrooms"
    name="bathrooms"
    value={bedrooms}
    onChange={(e)=>setBedrooms(e.target.value)}
    startAdornment={<InputAdornment position="start"><BedroomParentIcon/></InputAdornment>}
    type="number"
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '4px', 
      },
      '& .MuiInputBase-input': {
        textAlign: 'right',
      },
    }}
    error={!!bedroomsError}
  />
   {bedroomsError && <Typography color="error" variant="caption">{bedroomsError}</Typography>}
</FormControl>
</Box>
    </div>
  )
}

export default BedroomFilter
