import React from 'react'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { handleCity } from './handleCity'
import { useData } from '../context/AddApartmentDataContext';
import { Box, MenuItem,  Select,  Typography } from '@mui/material'
import addApartmentInputStyle, { iconStyle, labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle';
import RequiredField from '../RequiredField';

function CityField() {
    const{cityName,setCityName,citiesList,setUniversitiesList}=useData()
    const{errors}=useData()
  return (
    <Box sx={addApartmentInputStyle}>
        <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}><LocationCityIcon sx={iconStyle} />Apartment City<RequiredField /></Box></Typography>
        <Select
        variant="outlined"
        value={cityName}
        onChange={(e)=>handleCity(e,citiesList,setCityName,setUniversitiesList)}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200,  
            },
          },
        }}
          displayEmpty
        >
          <MenuItem value='' disabled>Select City</MenuItem>
        {citiesList.map((city)=>(
            <MenuItem key={city.id} id={city.id} value={city.name}>{city.name}</MenuItem>
          ))}
          </Select>
          <Typography sx={requiredMessage}>{errors.second.city}</Typography>
      </Box>
  )
}

export default CityField
