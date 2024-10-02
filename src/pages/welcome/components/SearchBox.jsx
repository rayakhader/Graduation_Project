import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import CitySearch from './CitySearch';
import UniversitySearch from './UniversitySearch';
import PriceSearch from './PriceSearch';
import getAllCities from '../../../API/city/getAllCities';
import getUniversitiesByCityId from '../../../API/university/getUniversitiesByCityId';
import getCityById from '../../../API/city/getCityById';
import { useNavigation } from '../../../customHook/useNavigation';
import getAllUniversities from '../../../API/university/getAllUniversities';
import { useFilters } from '../../home/context/Filters';

function SearchBox() {
    const[cityId,setCityId]=useState('')
    const[city,setCity]=useState('')
    const[creationDate,setCreationDate]=useState('')
    const[university,setUniversity]=useState('')
    const[price,setPrice]=useState('')
    const[citiesList,setCitiesList]=useState([])
    const[universitiesList,setUniversitiesList]=useState([])
    const {setFilters}=useFilters()
    const[notFound,setNotFound]=useState(false)
    const[priceError,setPriceError]=useState(false)
    const {clickHome}=useNavigation()
    useEffect(()=>{
        getAllCities({setCitiesList})
        if(cityId){
        getUniversitiesByCityId(cityId,{setUniversitiesList})
        getCityById(cityId,{setCity,setCreationDate})
      }else{
      getAllUniversities({setUniversitiesList})}
    },[cityId])
    const handleSearch =()=>{
        const filters = { city, university,price, minPrice :'', maxPrice:'', bathrooms:'', bedrooms:'',gender:'',visible:'isVisible==true' };
        setFilters(filters)
        clickHome()
    }
  return (
    <Box sx={{borderRadius:'4px',width:{xs:'100%',lg:'50%'},margin:'auto',boxShadow:5,backgroundColor:'white',p:1.5}}>
          <Typography variant='h6' color='black' textAlign='start' p={1.5}>Search the type you looking for</Typography>
          <Box sx={{display:'flex',p:1.5,alignItems:'stretch',flexWrap:{xs:'wrap',md:'nowrap'}}}>
           <CitySearch cityId={cityId} setCityId={setCityId} citiesList={citiesList}/>
           <UniversitySearch university={university} setUniversity={setUniversity} universitiesList={universitiesList}/>
           <PriceSearch price={price} setPrice={setPrice} priceError={priceError} setPriceError={setPriceError}  />
           <Button variant='contained' disabled={(!cityId && !university && !price) || priceError }  onClick={handleSearch} >Search</Button>
    </Box>
   </Box>
  )
}

export default SearchBox
