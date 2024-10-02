import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'

function HeaderOfTenantsList({tenantName,setTenantName,handleSearch}) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',pb:1.5,flexWrap:'wrap'}}>
    <Box sx={{display:'flex', alignItems:'center'}}>
    <TextField
    placeholder='Search by name'
    value={tenantName}
    onChange={(e)=>setTenantName(e.target.value)}
    onKeyDown={handleKeyDown}
    InputProps={{
      endAdornment:(
        <InputAdornment position='end'>
          <IconButton onClick={handleSearch}>
           <SearchIcon />
          </IconButton>
        </InputAdornment>
      )
    }}
    sx={{backgroundColor:'white', '& .MuiInputBase-input': { height: '10px'}}}
    />
   </Box>
    </Box>
  )
}

export default HeaderOfTenantsList
