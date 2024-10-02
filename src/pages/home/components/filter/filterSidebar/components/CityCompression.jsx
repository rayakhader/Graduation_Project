import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCity } from '../context/CityContext';
import { Box, IconButton, Typography } from '@mui/material';

function CityCompression({citiesList}) {
    const {visibleCity,setVisibleCity,expanded,setExpanded}=useCity()
    const handleCompressClick = () => {
        setVisibleCity(4)
        setExpanded(!expanded);
      };
  return (
    <div>
        {citiesList.length > 4 && visibleCity === citiesList.length &&(
<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',px:3}}onClick={handleCompressClick}>
<Typography sx={{fontSize:'10px',color:'rgba(0, 0, 0, 0.54)'}}>View Less</Typography>
<IconButton
  onClick={handleCompressClick}
  aria-expanded={expanded}
  aria-label="show less"
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

export default CityCompression
