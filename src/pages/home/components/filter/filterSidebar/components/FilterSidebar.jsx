import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CityFilter from './CityFilter'
import PriceFilter from './PriceFilter'
import { CityProvider } from '../context/CityContext'
import { useFilter } from '../context/FilterValues'
import BathroomFilter from './BathroomFilter'
import BedroomFilter from './BedroomFilter'
import { useError } from '../context/Error'
import { useView } from '../../filterAbove/context/ViewContext'
import GenderFilter from './GenderFilter'

function FilterSidebar({onFilterChange}) {
  const {city,university,minPrice,maxPrice,bathrooms,bedrooms,gender,setCity,setUniversity,setMinPrice,setMaxPrice,setBathrooms,setBedrooms,setGender}=useFilter()
  const[apply,setApply]=useState(false)
  const{error,minPriceError,maxPriceError}=useError()
  const{view}=useView()
  const applyFilters = () => {
    setApply(true);
  };

  useEffect(() => {
    if (apply) {
      const filters = { city, university,price:'', minPrice, maxPrice, bathrooms, bedrooms,gender,visible:'isVisible==true' };
      onFilterChange(filters);
      setApply(false);
    }
  }, [apply]);

  const handleReset = () => {
    setCity('');
    setUniversity('');
    setMinPrice('');
    setMaxPrice('');
    setBathrooms('');
    setBedrooms('');
    setGender('')
    const filters = { city: '', university: '',price:'', minPrice: '', maxPrice: '', bathrooms: '', bedrooms: '',gender:'',visible:'isVisible==true' };
    onFilterChange(filters);
  };
  return (
    <Grid item xs={12} sm={view==='grid'&& 5} md={5} lg={2} sx={{backgroundColor:'rgba(211, 211, 211, 0.13)',borderRadius:5,color:'black',border:'1px solid rgba(211,211,211,1)'}} >
       <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:'center',p:1 }}>
     <img src="https://prod-static-assets.amberstudent.com/images/funnel.svg" alt="Funnel" style={{ width: 30, height: 30}} />
     <Typography variant="h6" color="text.primary">Filters</Typography>
     </Box>
      <CityProvider>
        <CityFilter />
      </CityProvider>
      <PriceFilter />
      <BathroomFilter />
      <Divider sx={{border:'1px solid rgba(211,211,211,0.5)'}} />
      <BedroomFilter />
      <Divider sx={{border:'1px solid rgba(211,211,211,0.5)'}} />
      <GenderFilter />
<Box sx={{display:'flex',justifyContent:'center',gap:0.5,alignItems:'center',p:1.5}}>
      <Button disabled={(!city && !university && !minPrice && !maxPrice && !bedrooms && !bathrooms && !gender)
         || Boolean(error || minPriceError || maxPriceError)} variant="contained" color="primary" sx={{ mt: 3 }} onClick={applyFilters}>
        Apply Filters
      </Button>
      <Button variant="outlined" color="primary" disabled={!city && !university && !minPrice && !maxPrice && !bedrooms && !bathrooms && !gender} sx={{ mt: 3 }} onClick={handleReset}>
        Reset
      </Button>
</Box>
  </Grid>
  )
}

export default FilterSidebar
