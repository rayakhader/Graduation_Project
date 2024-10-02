import { Box, Typography } from '@mui/material'
import React from 'react'
import ApartmentEssenInfo from './ApartmentEssenInfo'
import ApartmentSecInfo from './ApartmentSecInfo'

function ApartmentInfo({apartmentDetails}) {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper',mt:1,color:'black'}}>
      <Box sx={{display:'flex',alignItems:'center',border:'1px solid rgba(211,211,211,1)',borderRadius:'4px',p:1.5,width:'100%',flexWrap:{xs:'wrap',md:'noWrap'},gap:1,boxShadow:3}}>
      <ApartmentEssenInfo apartmentDetails={apartmentDetails} />
      </Box>
      <Box sx={{border:'1px solid rgba(211,211,211,1)',boxShadow:3,p:1.5,mt:4,borderRadius:'4px'}}>
         <Box sx={{width:'100%',display:'flex',alignItems:'center',my:2,borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
           <Typography variant='h6'>Information</Typography>
         </Box>
         <ApartmentSecInfo apartmentDetails={apartmentDetails} />
      </Box>
    </Box>
  )
}
export default ApartmentInfo
