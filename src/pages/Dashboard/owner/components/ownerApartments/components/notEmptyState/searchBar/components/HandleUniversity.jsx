import React, { useState } from 'react'
import { Box, IconButton, ListItem, ListItemIcon, ListItemText,Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import highlightText from './HighlightText';
import btnStyle from '../style/btnStyle';
import closeIcon from '../style/closeIcon';
import { useSearchbar } from '../context/SearchbarContext';
function HandleUniversity({universitiesList,setUniversitiesList}) {
    const{query,setQuery,selectedTab}=useSearchbar()
    const[visibleUniversity,setVisibleUniversity]=useState(3)
    const filteredUniversities = universitiesList.filter(university => university.name.toLowerCase().includes(query.toLowerCase()));
    const handleSelect =(name)=>{
        setQuery(name)
    }

  return (
    <>
      {selectedTab===1 &&
     <>
     {filteredUniversities.slice(0,visibleUniversity).map((university)=>(
      <ListItem key={university.id} sx={{cursor:'pointer',my:1, '&:hover': {
        backgroundColor: '#e0e0e0', 
      },}} onClick={()=>handleSelect(university.name)} >
        <ListItemText  primary={highlightText(university.name, query)} sx={{'.MuiListItemText-primary': { textAlign: 'start' }}} />
        <ListItemIcon sx={{display:'flex',alignItems:'center',justifyContent:'end'}}>
      <IconButton sx={closeIcon} onClick={(e) => {
        e.stopPropagation()
        setUniversitiesList(universitiesList.filter(u=> u.id !== university.id))}}>
        <CloseIcon />
      </IconButton>
    </ListItemIcon>
      </ListItem>
     ))}
     {visibleUniversity===3 && filteredUniversities.length >3&&<Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',p:1}}>
       <Button onClick={()=>{setVisibleUniversity(filteredUniversities.length)}}  endIcon={<ArrowForwardIosIcon sx={{ml:1}} />} sx={btnStyle}>
        View More</Button>
    </Box>
}
{visibleUniversity===filteredUniversities.length &&filteredUniversities.length>3 &&<Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',p:1}}>
       <Button onClick={()=>{setVisibleUniversity(3)}}  endIcon={<ArrowForwardIosIcon sx={{ml:1}} />} sx={btnStyle}>
        View Less</Button>
    </Box>
}
     </>
     }
      
    </>
  )
}

export default HandleUniversity
