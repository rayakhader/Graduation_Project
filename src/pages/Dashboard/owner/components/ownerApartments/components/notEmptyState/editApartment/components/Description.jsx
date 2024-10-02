import React, { useEffect } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { useEditApartmentInfo } from '../context/EditApartmentInfo'
import { useChange } from '../context/Change'

function Description({apartmentDetails}) {
  const {description,setDescription}=useEditApartmentInfo()
  const{setChange}=useChange()
  useEffect(()=>{
    setDescription(apartmentDetails.description)
    setChange(false)
  },[apartmentDetails])
  return (
    <Box sx={{p:1.5}}>
    <Typography variant='h6' sx={{textAlign:'start',p:1}}>Description</Typography>
    <TextField
    multiline
    variant='outlined'
    minRows={4}
    fullWidth
    placeholder='Enter Description here...'
    value={description}
    onChange={(e)=>{setDescription(e.target.value);setChange(true)}}
    sx={{backgroundColor:'white'}}
    />
    </Box>
  )
}

export default Description
