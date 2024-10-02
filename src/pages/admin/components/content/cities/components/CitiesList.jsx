import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography, IconButton } from '@mui/material'
import { useSelectedCityId } from '../context/SelectedCityIdContext';
import Empty from '../../../../../Dashboard/owner/components/ownerApartments/components/notEmptyState/ownerApartmentViewer/Empty';

function CitiesList({citiesList,editCity,setEditCity}) {
    const{setSelectedCityId,setSelectedCity}=useSelectedCityId()

  return (
    <Box sx={{maxHeight: '350px',
    overflowY:'auto',
    width:'100%',}}>
            {citiesList.length >0 && citiesList.map((city)=>(
              <Box key={city.id} sx={{boxShadow:5,width:'100%',flexWrap:'wrap',display:'flex',alignItems:'center',backgroundColor:'white',my:1,borderRadius:'4px',border:'1px solid rgba(211,211,211,1)'}}>
                <Box sx={{width:{xs:'100%',md:'80%',lg:'50%'},p:1.5,display:'flex',alignItems:'center'}}>
                 <Typography  sx={{textAlign:'center'}}>{city.name}</Typography>
                 </Box>
                 <Box sx={{width:{xs:'100%',md:'80%',lg:'50%'},flexWrap:'wrap',p:1.5,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                 <Typography>{city.creationDate}</Typography>
                 <Box sx={{display:'flex',gap:1,alignItems:'center'}}>
                 <IconButton 
              aria-label="edit" 
              onClick={()=>{
                setSelectedCityId(city.id)
                setSelectedCity(city)
                setEditCity(true)}} 
          >
              <EditIcon />
          </IconButton>
                </Box>
                 </Box>
              </Box>
            ))}
            {citiesList.length===0 && <Empty label="No Cities Found" />}
          </Box>
  )
}
export default CitiesList
