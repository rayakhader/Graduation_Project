import { Box } from '@mui/material'
import React from 'react'
import  { containerBoxStyle } from '../style/addApartmentInputStyle'
import NavigationButton from '../NavigationButton'
import FloorNum from './FloorNum'
import ApartmentNum from './ApartmentNum'
import BedroomNum from './BedroomNum'
import BathroomNum from './BathroomNum'
import Furnished from './Furnished'
import Gender from './Gender'
function AddApartmentThirdPage() { 
  return (
    <>
      <Box sx={containerBoxStyle}>
        <FloorNum />
        <ApartmentNum />
        <BedroomNum />
        <BathroomNum />
        <Furnished />
        <Gender />
      <NavigationButton />
    </Box>
    </>
  )
}
export default AddApartmentThirdPage
