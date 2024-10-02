import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCity } from '../context/CityContext';
import { Box, IconButton, Typography } from '@mui/material';

function CityExpansion( {citiesList}) {
    const {visibleCity,setVisibleCity,expanded,setExpanded}=useCity()
    const handleExpandClick = () => {
        setVisibleCity(citiesList.length)
        setExpanded(!expanded);
      };
  return (
    <div>
        {visibleCity < citiesList.length && (
<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',px:3}} onClick={handleExpandClick}>
<Typography sx={{fontSize:'10px',color:'rgba(0, 0, 0, 0.54)'}}>View More</Typography>
<IconButton
  onClick={handleExpandClick}
  aria-expanded={expanded}
  aria-label="show more"
>
<ExpandMoreIcon
sx={{
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.3s',
}}
/>
</IconButton>
</Box>
)}   
    </div>
  )
}

export default CityExpansion
