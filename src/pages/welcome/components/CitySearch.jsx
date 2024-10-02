import React from 'react'
import {LocationOn} from '@mui/icons-material';
import { FormControl, InputAdornment,MenuItem,Select} from '@mui/material';

function CitySearch({cityId,setCityId,citiesList}) {
  return (
    <FormControl sx={{pr:{xs:0,md:1.5},width:{xs:'50%',md:'auto'}}}>
    <Select 
      value={cityId}
      onChange={(e) => setCityId(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <LocationOn sx={{ color: 'black' }} />
        </InputAdornment>
      }
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 200,  
          },
        },
      }}
      displayEmpty
      sx={{width:{xs:'100%',md:'170px'}}}
    >
      <MenuItem disabled value="">
        Choose City
      </MenuItem>
      {citiesList.map((city, index) => (
        <MenuItem key={index} value={city.id}>{city.name}</MenuItem>
      ))}
    </Select>
    </FormControl>
  )
}

export default CitySearch
