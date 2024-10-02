import { Box, Typography } from '@mui/material'
import React, { useEffect} from 'react'
import  { containerBoxStyle} from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField';
import NavigationButton from '../NavigationButton';
import SecondPartForm from './SecondPartForm';
import { useData } from '../context/AddApartmentDataContext';
import getAllCities from '../../../../../../../../API/city/getAllCities';

function AddApartmentSecondpage() {
  const{setCitiesList}=useData()
useEffect(()=>{
  getAllCities({setCitiesList})
},[])
  return (
    <>
      <Box sx={containerBoxStyle}>
       <SecondPartForm/>
      <Box sx={{display:'flex',alignItems:'center'}} >
      <RequiredField />
      <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'start' }}>
       Required
       </Typography>
      </Box>
      <NavigationButton />
        </Box>
    </>
  )
}
export default AddApartmentSecondpage
