import React, { useState } from 'react'
import { backBtnStyle, nextBtnStyle } from '../style/addApartmentInputStyle'
import { Box, Button, Dialog, Typography,CircularProgress} from '@mui/material'
import { useNavigate } from '../context/NavigateContext'
import PriceField from './PriceField'
import CurrencyField from './CurrencyField'
import DescriptionField from './DescriptionField'
import fourthPartValidation from './validation/fourthPartValidation'
import { useData } from '../context/AddApartmentDataContext'
import { useToken } from '../../../../../../../../globalContext/TokenContext'
import createApartment from '../../../../../../../../API/apartments/createApartment'
import AddApartmentError from './AddApartmentError'

function FourthPartForm({setShowSuccess,setApartmentId}) {
    const{goToPreviousPage}=useNavigate()
    const{errors,setErrors,allImages,setImages,setCoverImage}=useData()
    const{token}=useToken()
    const [loading, setLoading] = useState(false);
    const[error,setError]=useState('')
    const{ name,region,building,floorNumber,apartmentNumber,numberOfRooms,numberOfBathrooms,
     description,price,furnishedStatus,genderAllowed,priceCurrency,cityName,universityName}=useData()
    const {setName,setRegion,setBuilding,setFloorNumber,setApartmentNumber,setNumberOfRooms,setNumberOfBathrooms,
      setDescription,setPrice,setFurnishedStatus,setGenderAllowed,setPriceCurrency,setCityName,setUniversityName}=useData()
      const clear = () => {
            setCoverImage(null)
            setImages(Array(6).fill(null))
            setName('')
            setRegion('')
            setBuilding('')
            setFloorNumber('')
            setApartmentNumber('')
            setNumberOfBathrooms('')
            setNumberOfRooms('')
            setDescription('')
            setPrice('')
            setFurnishedStatus('')
            setGenderAllowed('')
            setPriceCurrency('')
            setCityName('')
            setUniversityName('')
        }
    const handleCreation =()=>{
      const fourthValidation=fourthPartValidation(price,priceCurrency,description)
      if(!fourthValidation.formIsValid){
      setErrors({...errors, fourth:fourthValidation.tempErrors})
    return
    }
    else{
      setLoading(true); 
      setErrors({...errors, fourth:''})
   createApartment(name,region,building,floorNumber,apartmentNumber,numberOfRooms,numberOfBathrooms,
   description,price,furnishedStatus,genderAllowed,priceCurrency,cityName,universityName,allImages,token,clear,{setShowSuccess,setError,setApartmentId}).finally(()=>{setLoading(false);})
  }
    }
  return (
    <>
         <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <PriceField />
          <CurrencyField />
         </Box>
        <DescriptionField/>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
         <Button sx={backBtnStyle} onClick={goToPreviousPage} >Back</Button>
         <Button sx={nextBtnStyle} onClick={handleCreation} >Publish</Button>
        </Box>
        <Dialog open={loading}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Publishing apartment...</Typography>
        </Box>
      </Dialog>
      <AddApartmentError error={error} setError={setError} />
    </>
  )
}

export default FourthPartForm
