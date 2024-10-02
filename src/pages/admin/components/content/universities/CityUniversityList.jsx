import React, { useState } from 'react'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EventIcon from '@mui/icons-material/Event';
import { Box, Button, Grid, Typography } from '@mui/material'
import ViewDialog from './ViewDialog';
import getCityById from '../../../../../API/city/getCityById';
import getUniversitiesByCityId from '../../../../../API/university/getUniversitiesByCityId';

function CityUniversityList({citiesList}) {
    const [universitiesList,setUniversitiesList]=useState([])
    const [city,setCity]=useState('')
    const [cityId,setCityId]=useState('')
    const [creationDate,setCreationDate]=useState('')
    const [openViewDialog,setOpenViewDialog]=useState(false)
    const handleViewUniversities =(id)=>{
        setCityId(id)
        getCityById(id,{setCity,setCreationDate})
        getUniversitiesByCityId(id,{setUniversitiesList})
        setOpenViewDialog(true)
    }
  return (
    <Grid item xs={12} lg={6} sx={{p:2}}>
        <Box sx={{width:'100%',backgroundColor:'white',p:2,borderRadius:'4px',mt:1}}>
        <Box sx={{width:'100%',backgroundColor:'rgba(211,211,211,0.15)',p:1.5,borderRadius:'20px'}}>
            <Typography variant='h6' sx={{textAlign:'start'}}>Cities and universities</Typography>
        </Box>
        <Typography variant='body2' color='textSecondary' sx={{p:1.5}}>Here cities and universities corresponding to specific city</Typography>
        <Box sx={{width:'100%',p:1.5}}>
            <Box sx={{width:'100%',borderRadius:'4px',backgroundColor:'rgba(211,211,211,0.15)',display:'flex',flexWrap:'wrap',justifyContent:'space-between',p:1.5,alignItems:'center'}}>
                <Box sx={{minWidth:120,display:'flex',alignItems:'center',gap:0.5}}><LocationCityIcon /><Typography sx={{fontWeight:'bold'}}>City Name</Typography></Box>
                <Box sx={{minWidth:150,display:'flex',alignItems:'center',gap:0.5,mt:{xs:1,sm:0}}}><EventIcon /><Typography sx={{fontWeight:'bold'}}>Added on</Typography></Box>
                <Box sx={{minWidth:100}}><Typography></Typography></Box>
            </Box>
            <Box sx={{maxHeight:'500px',overflow:'auto',width:'100%'}}>
            {citiesList.map((city)=>(
                <Box key={city.id} sx={{width:'100%',borderRadius:'4px',border:'1px solid rgba(211,211,211,1)',my:1,minHeight:'50px',p:1.5,display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center'}}>
                   <Box sx={{minWidth:120,mt:{xs:1,md:0}}}><Typography sx={{textTransform:'capitalize',fontSize:'18px'}}>{city.name}</Typography></Box>
                   <Box sx={{minWidth:120,textAlign:{md:'center'},mt:{xs:1,md:0}}}><Typography variant='body2' color="textSecondary">{city.creationDate}</Typography></Box>
                   <Box sx={{minWidth:100,mt:{xs:1,md:0}}}><Button color='primary' variant='contained' sx={{textTransform:'none'}} onClick={()=>handleViewUniversities(city.id)}>View Universities</Button></Box>
                </Box>
            ))}
            </Box>
        </Box>
        </Box>
           {cityId!==''&& <ViewDialog openViewDialog={openViewDialog} setOpenViewDialog={setOpenViewDialog} universitiesList={universitiesList} setUniversitiesList={setUniversitiesList} city={city} creationDate={creationDate} cityId={cityId}/>}
    </Grid>
  )
}
export default CityUniversityList
