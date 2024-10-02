import React, { useState } from 'react'
import { Box, Button, Card,  MenuItem,TextField, Typography } from '@mui/material'
import ImageSec from './ImageSec';
import updateAdminInfo from '../../../../../API/users/updateAdminInfo';
import { useAdminSettings } from './context/RefreshAdminSettings';
import { useToken } from '../../../../../globalContext/TokenContext';
import SuccessUpdate from './SuccessUpdate';
import PhoneNumber from './PhoneNumber';
function ProfileDetails({citiesList,adminInfo,firstName,lastName,email,city,phoneNumber,selectedCountry,setFirstName,setLastName,setEmail,setCity,setPhoneNumber,setSelectedCountry}) {
    const {refresh,setRefresh}=useAdminSettings()
    const{token}=useToken()
    const[changed,setChanged]=useState(false)
    const[updated,setUpdated]=useState(false)
    const[phoneNumberError,setPhoneNumberError]=useState(false)
    const handleUpdate =()=>{
        const phoneNumberWithCode = selectedCountry.code + phoneNumber.replace(/^\+\d+/, "");
        updateAdminInfo(token,firstName,lastName,city,phoneNumberWithCode,refresh,{setRefresh,setChanged,setUpdated})
      }
      const CustomMenuProps = {
        PaperProps: {
          style: {
            maxHeight: 200, 
            overflow: 'auto', 
          },
        },
      };
  return (
    <>
    <Card sx={{p:2.5}}>
    <Typography variant='h6' textAlign='start'px={1.5}>Profile Details</Typography>
    <ImageSec adminInfo={adminInfo}  /> 
    <Box sx={{display:'flex',flexWrap:{xs:'wrap',md:'nowrap'},alignItems:'center',p:1.5}}>
      <Box sx={{display:'flex',width:{xs:'100%',md:'50%'},flexDirection:'column',pr:{xs:0,md:1.5}}}>
        <Typography variant='body2' fontWeight='bold'>First name</Typography>
        <TextField value={firstName} onChange={(e)=>{setFirstName(e.target.value);setChanged(true)}}/>
      </Box>
      <Box sx={{display:'flex',width:{xs:'100%',md:'50%'},flexDirection:'column',mt:{xs:1.5,md:0},pl:{xs:0,md:1.5}}}>
        <Typography variant='body2' fontWeight='bold'>Last name</Typography>
        <TextField value={lastName} onChange={(e)=>{setLastName(e.target.value);setChanged(true)}} />
      </Box>
    </Box>
    <Box sx={{display:'flex',flexWrap:{xs:'wrap',md:'nowrap'},alignItems:'center',p:1.5}}>
      <Box sx={{display:'flex',width:{xs:'100%',md:'50%'},flexDirection:'column',pr:{xs:0,md:1.5}}}>
      <Typography variant='body2' fontWeight='bold'>Email</Typography>
        <TextField value={email} disabled onChange={(e)=>{setEmail(e.target.value);setChanged(true)}} />
      </Box>
      <Box sx={{display:'flex',width:{xs:'100%',md:'50%'},flexDirection:'column',mt:{xs:1.5,md:0},pl:{xs:0,md:1.5}}}>
        <Typography variant='body2' fontWeight='bold'>City</Typography>
        <TextField
        select
       variant="outlined"
       value={city}
       onChange={(e)=>{setCity(e.target.value);setChanged(true)}}
       SelectProps={{
        MenuProps: CustomMenuProps,
      }}
      >
          {citiesList.map((city,index)=>(
    <MenuItem key={index} id={city.id} value={city.name}>{city.name}</MenuItem>
  ))}
        </TextField>
      </Box>
    </Box>
    <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setChanged={setChanged} phoneNumberError={phoneNumberError} setPhoneNumberError={setPhoneNumberError} />
      <Box sx={{p:1.5}}>
        <Button variant='contained' disabled={!changed || phoneNumberError} onClick={handleUpdate}>Save changes</Button>
      </Box>
    </Card>
    <SuccessUpdate updated={updated} setUpdated={setUpdated} />
    </>
  )
}

export default ProfileDetails
