import { Box, Button} from '@mui/material'
import React from 'react'
import { useNavigate } from './context/NavigateContext'
import { backBtnStyle, nextBtnStyle} from './style/addApartmentInputStyle'
import { useData } from './context/AddApartmentDataContext'
import secondPartValidation from './secondPart/validation/secondPartValidation'
import thirdPartValidation from './thirdPart/validation/thirdPartValidation'

function NavigationButton() {
    const{currentStep,goToNextPage,goToPreviousPage}=useNavigate()
    const{setErrors}=useData()
    const {name,building, cityName,universityName, region,floorNumber,numberOfRooms,numberOfBathrooms, apartmentNumber, furnishedStatus,
      genderAllowed} =useData()
    const handleNext =()=>{
       if(currentStep===2){
        goToNextPage()
      }
      else if(currentStep===3){
      const secondValidation=  secondPartValidation(name,building,
          cityName,universityName,
          region)
          if (!secondValidation.formIsValid) {
            setErrors((prevErrors) => ({...prevErrors, second: secondValidation.tempErrors}));
            return
          }
          setErrors((preErrors)=>({...preErrors,second:''}))
          goToNextPage()
        }
      else if(currentStep===4){
        const thirdValidation= thirdPartValidation(floorNumber, numberOfRooms, numberOfBathrooms, apartmentNumber, furnishedStatus,genderAllowed)
        if(!thirdValidation.formIsValid){
          setErrors((prevErrors) => ({...prevErrors, third: thirdValidation.tempErrors}))
        return
        }
          setErrors((preErrors)=>({...preErrors,third:''}))
          goToNextPage()
      }
    }
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <Button sx={backBtnStyle} onClick={goToPreviousPage}>Back</Button>
      <Button sx={nextBtnStyle} onClick={handleNext}>Next</Button>
      </Box>
  )
}
export default NavigationButton
