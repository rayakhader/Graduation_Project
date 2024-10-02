import { Box } from '@mui/material'
import React, { useState } from 'react'
import  {  containerBoxStyle } from '../style/addApartmentInputStyle'
import SuccessCreation from './SuccessCreation'
import FourthPartForm from './FourthPartForm'
function AddApartmentFourthPage() {
  const [showSuccess,setShowSuccess]=useState(false)
  const[apartmentId,setApartmentId]=useState('')
  return (
    <>
      <Box sx={containerBoxStyle}>
        <FourthPartForm  setShowSuccess={setShowSuccess} setApartmentId={setApartmentId}/>
    </Box>
    {showSuccess&& <SuccessCreation showSuccess={showSuccess} setShowSuccess={setShowSuccess} apartmentId={apartmentId} />}
  </>
  )
}
export default AddApartmentFourthPage
