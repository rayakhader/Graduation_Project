import {  Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CityExpansion from './CityExpansion';
import CityCompression from './CityCompression';
import { useCity } from '../context/CityContext';
import UniversityFilter from './UniversityFilter';
import { useFilter } from '../context/FilterValues';
import getAllCities from '../../../../../../API/city/getAllCities';
import getUniversitiesByCityId from '../../../../../../API/university/getUniversitiesByCityId';
import getAllUniversities from '../../../../../../API/university/getAllUniversities';

function CityFilter() {
  const capitalize = (s) => s && s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const {city,setCity}=useFilter()
  const[citiesList,setCitiesList]=useState([])
  const {visibleCity}=useCity()
  const[universitiesList,setUniversitiesList]=useState([])
  const handleCity=(event)=>{
    const value =event.target.value
    setCity(value)
  }
  useEffect(()=>{
    getAllCities({setCitiesList})
   },[])
   useEffect(()=>{
    if(city){
    const selectedCityObj = citiesList.find(cityItem => cityItem.name === city);
    const CityId= selectedCityObj.id
    getUniversitiesByCityId(CityId,{setUniversitiesList})}else{
      getAllUniversities({setUniversitiesList})
    }
   },[city])
  return (
    <div>
<FormLabel component="legend" sx={{color:'black',fontWeight:'bold',padding:3,mb:-5,}}>City</FormLabel>
<FormControl component="fieldset" sx={{padding:3}}>
<RadioGroup
  aria-label="city"
  name="city1"
  value={city}
  onChange={handleCity}
  sx={{color:'rgba(0, 0, 0, 0.54)'}}
>
   {citiesList.slice(0, visibleCity).map((cityItem) => (
<FormControlLabel
  key={cityItem.id}
  value={cityItem.name}
  control={<Radio  sx={{
    '& .MuiSvgIcon-root': { fontSize: 15 }, 
  }} />}
  label={capitalize(cityItem.name)}
  sx={{ '& .MuiTypography-root': { fontSize: '0.875rem' },color:'rgba(0, 0, 0, 0.54)' }} 
/>
))}
</RadioGroup>
</FormControl>
<CityExpansion citiesList={citiesList}/>
<CityCompression citiesList={citiesList} />
<Divider sx={{border:'1px solid rgba(211,211,211,0.5)'}} />
<UniversityFilter universitiesList={universitiesList} />
<Divider sx={{border:'1px solid rgba(211,211,211,0.5)'}} />
    </div>
  )
}
export default CityFilter
