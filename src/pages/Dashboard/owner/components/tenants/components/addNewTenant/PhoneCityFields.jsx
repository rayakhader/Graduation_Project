import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAddTenantInfo } from './context/AddTenantInfo';
import getAllCities from '../../../../../../../API/city/getAllCities';
import BusinessIcon from '@mui/icons-material/Business';
import CustomTextField from '../CustomTextField';
import PhoneIcon from '@mui/icons-material/Phone';
import CityField from './CityField';
function PhoneCityFields({phoneNumberError,setChanged}) {
    const[citiesList,setCitiesList]=useState([])
    const {city,setCity,phone,setPhone}=useAddTenantInfo()
    useEffect(()=>{
      getAllCities({setCitiesList})
    },[])
  return (
    <Box sx={{display:'flex',alignItems:'center',gap:3}}>
    <Box sx={{width:'50%'}}>
     <CustomTextField label='Phone' icon={<PhoneIcon />}value={phone} placeholder="Phone number" setValue={setPhone} type='tel' setChanged={setChanged} error={phoneNumberError} />
    </Box>
    <Box sx={{width:'50%'}}>
     <CityField label='City' value={city}  setValue={setCity} icon={<BusinessIcon />} list={citiesList}/>
    </Box>
</Box>
  )
}

export default PhoneCityFields
