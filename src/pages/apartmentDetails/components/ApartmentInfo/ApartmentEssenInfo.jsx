import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LocationCityIcon from '@mui/icons-material/LocationCity'; 
import PlaceIcon from '@mui/icons-material/Place';
import BusinessIcon from '@mui/icons-material/Business'; 
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; 
function ApartmentEssenInfo({apartmentDetails}) {
  return (
    <Box sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-around',flexWrap:'wrap'}}>
        <Grid item display="flex" flexDirection="column" alignItems="center">
          <LocationCityIcon sx={{ color: 'rgba(0,0,0,0.4)', mb: 1 }} />
          <Typography className='apartment-info'>{apartmentDetails.cityName}</Typography>
        </Grid>
        <Grid item  display="flex" flexDirection="column" alignItems="center">
          <PlaceIcon sx={{color: 'rgba(0,0,0,0.4)', mb: 1 }} />
          <Typography className='apartment-info'>{apartmentDetails.region}</Typography>
        </Grid>
        <Grid item display="flex" flexDirection="column" alignItems="center">
          <BusinessIcon sx={{ color: 'rgba(0,0,0,0.4)', mb: 1 }} />
          <Typography className='apartment-info'>{apartmentDetails.building}</Typography>
        </Grid>
        <Grid item  display="flex" flexDirection="column" alignItems="center">
          <AccountBalanceIcon sx={{color: 'rgba(0,0,0,0.4)', mb: 1 }} />
          <Typography className='apartment-info'>{apartmentDetails.universityName}</Typography>
        </Grid>
        </Box>
  )
}

export default ApartmentEssenInfo
