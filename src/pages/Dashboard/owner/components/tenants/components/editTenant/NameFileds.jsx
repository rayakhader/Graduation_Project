import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material'
import CustomTextField from '../CustomTextField'
import { useEditTenantInfo } from './context/EditTenantInfo';

function NameFileds({setChanged}) {
    const {setFirstName,setLastName,firstName,lastName}=useEditTenantInfo()
    return (
      <Box sx={{display:'flex',alignItems:'center',gap:3}}>
              <Box sx={{width:'50%'}}>
              <CustomTextField label='First name' icon={<PersonIcon />} value={firstName} placeholder="First name" setValue={setFirstName} type='name' setChanged={setChanged}/>
              </Box>
              <Box sx={{width:'50%'}}>
              <CustomTextField label='Last name' icon={<PersonIcon />} value={lastName} placeholder="Last name"  setValue={setLastName} type='name' setChanged={setChanged}/>
              </Box>
            </Box>
    )
}

export default NameFileds
