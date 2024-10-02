import {Grid} from '@mui/material'
import React, { useEffect, useState } from 'react'
import CityUniversityList from './CityUniversityList';
import AddUniversity from './AddUniversity';
import getAllCities from '../../../../../API/city/getAllCities';

function University() {
    const [citiesList,setCitiesList]=useState([])
    useEffect(()=>{
        getAllCities({setCitiesList})
    },[])
  return (
   <Grid item container xs={11} md={9} lg={10} sx={{backgroundColor:'rgba(211,211,211,0.15)',px:2,display:'flex'}}>
    <CityUniversityList citiesList={citiesList}/>
    <AddUniversity citiesList={citiesList} />
   </Grid>
  )
}

export default University
