import { Box, IconButton, Button,ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import btnStyle from '../style/btnStyle';
import closeIcon from '../style/closeIcon';
import highlightText from './HighlightText';
import { useSearchbar } from '../context/SearchbarContext';

function HandleCity({citiesList,setCitiesList}) {
    const{selectedTab,query,setQuery}=useSearchbar()
    const[visibleCity,setVisibleCity]=useState(3)
    const filteredCities = citiesList.filter(city => city.name.toLowerCase().includes(query.toLowerCase()));
    const handleSelect =(name)=>{
        setQuery(name)
    }
  return (
    <>
     {selectedTab===0 &&
     <>
      {filteredCities.slice(0,visibleCity).map((city)=>(
      <ListItem key={city.id} sx={{cursor:'pointer',my:1,'&:hover': {
        backgroundColor: '#e0e0e0', }}} onClick={()=>handleSelect(city.name)}>
        <ListItemText  primary={highlightText(city.name, query)} sx={{'.MuiListItemText-primary': { textAlign: 'start' }}}   />
        <ListItemIcon sx={{display:'flex',alignItems:'center',justifyContent:'end'}}>
      <IconButton sx={closeIcon} onClick={(e) => {
        e.stopPropagation()
        setCitiesList(citiesList.filter(c => c.id !== city.id))}}>
        <CloseIcon />
      </IconButton>
    </ListItemIcon>
      </ListItem>
     ))
      }
      {visibleCity===3 && filteredCities.length >3 &&<Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',p:1}}>
       <Button onClick={()=>{setVisibleCity(filteredCities.length)}}  endIcon={<ArrowForwardIosIcon sx={{ml:1}} />} sx={btnStyle}>
        View More</Button>
    </Box>
     }
     {visibleCity===filteredCities.length&& filteredCities.length>3 &&<Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',p:1}}>
       <Button onClick={()=>{setVisibleCity(3)}}  endIcon={<ArrowForwardIosIcon sx={{ml:1}} />} sx={btnStyle}>
        View Less</Button>
    </Box>
     }
      </>
    }
      
    </>
  )
}

export default HandleCity
