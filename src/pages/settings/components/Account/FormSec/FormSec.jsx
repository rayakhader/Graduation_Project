import React, { useState } from 'react'
import {  Box } from '@mui/material'
import Name from './Name'
import EmailCity from './EmailCity'
import PhoneNumber from './PhoneNumber'
import ActionBtn from './ActionBtn'
import { useRole } from '../../../../../globalContext/RoleContext'

function FormSec({citiesList,userInfo}) {
  const [phoneNumberError,setPhoneNumberError]=useState(false)
  const{userRole}=useRole()
  return (
    <Box sx={{border:'1px solid rgba(211,211,211,0.5)',width:'100%',borderRadius:'4px'}}>
        <Name userInfo={userInfo} />
        <EmailCity citiesList={citiesList} userInfo={userInfo} />
        {userRole==='Owner' && <PhoneNumber userInfo={userInfo} phoneNumberError={phoneNumberError} setPhoneNumberError={setPhoneNumberError} />}
        <ActionBtn userInfo={userInfo} phoneNumberError={phoneNumberError} />
    </Box>
  )
}

export default FormSec
