import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material'
import CustomTextField from '../CustomTextField';
import { useAddTenantInfo } from './context/AddTenantInfo';

function NameFields({setChanged}) {
    const {firstName,lastName,setFirstName,setLastName}=useAddTenantInfo()
  return (
    <Box sx={{display:'flex',alignItems:'center',gap:3}}>
            <Box sx={{width:'50%'}}>
            <CustomTextField label='First name' icon={<PersonIcon />} value={firstName} placeholder="First Name" setValue={setFirstName} type='name' setChanged={setChanged}/>
            </Box>
            <Box sx={{width:'50%'}}>
            <CustomTextField label='Last name' icon={<PersonIcon />} value={lastName} placeholder="Last Name" setValue={setLastName} type='name' setChanged={setChanged}/>
            </Box>
    </Box>
  )
}

export default NameFields
