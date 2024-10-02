import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function TopInfo({apartmentDetails}) {
  return (
    <Grid item xs={12} sx={{p:3}}>
    <Box sx={{color:'black'}} >
     <Typography variant='h5' sx={{textAlign:'start'}}>{apartmentDetails.name}</Typography>
    </Box>
    <Box sx={{display:'flex',mt:3}}>
    <Box>
    <Typography color="textSecondary"><LocationOnIcon  />{apartmentDetails.cityName}, {apartmentDetails.building}, {apartmentDetails.region}</Typography>
    </Box>
    </Box>
  </Grid>
  )
}

export default TopInfo
