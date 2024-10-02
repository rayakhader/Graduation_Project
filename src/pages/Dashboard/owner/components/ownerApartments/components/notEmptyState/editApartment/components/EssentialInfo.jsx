import React, { useEffect } from 'react'
import { Box,Input, Typography } from '@mui/material'
import { useEditApartmentInfo } from '../context/EditApartmentInfo'
import { useChange } from '../context/Change'

function EssentialInfo({apartmentDetails}) {
  const {name,setName,building,setBuilding,city,setCity,university,setUniversity,
    region,setRegion}=useEditApartmentInfo()
    const{setChange}=useChange()
    useEffect(()=>{
      setName(apartmentDetails.name)
      setBuilding(apartmentDetails.building)
      setCity(apartmentDetails.cityName)
      setUniversity(apartmentDetails.universityName)
      setRegion(apartmentDetails.region)
      setChange(false)
    },[apartmentDetails])
  return (
    <Box sx={{p:1.5}}>
    <Typography variant='h6' sx={{textAlign:'start',p:1}}>Essential Details</Typography>
    <Box sx={{backgroundColor:'white',borderRadius:'4px',p:1.5,border:'1px solid rgba(211,211,211,1)'}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
             <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
             <Typography>Name</Typography>
             <Input value={name} onChange={(e)=>{setName(e.target.value);setChange(true)}}/>
             </Box>
             <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
             <Typography>Building</Typography>
             <Input disabled value={building} />
             </Box>
            </Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
             <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
             <Typography>City</Typography>
             <Input disabled value={city}/>
             </Box>
             <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
             <Typography>University</Typography>
             <Input disabled value={university} />
             </Box>
            </Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
                    <Typography>Region</Typography>
                    <Input value={region} onChange={(e)=>{setRegion(e.target.value);setChange(true)}} />
                </Box>
            </Box>
            </Box>
            </Box>
  )
}

export default EssentialInfo
