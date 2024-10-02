import React from 'react'
import { AccountBalance} from '@mui/icons-material';
import {FormControl, InputAdornment,MenuItem,Select} from '@mui/material';

function UniversitySearch({university,setUniversity,universitiesList}) {
  return (
    <FormControl sx={{px:{xs:0,md:1.5},width:{xs:'50%',md:'auto'}}}>
    <Select
      value={university}
      onChange={(e) => setUniversity(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <AccountBalance sx={{ color: 'black' }} />
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
      <MenuItem disabled value="" >
        Choose University
      </MenuItem>
      {universitiesList.map((university, index) => (
        <MenuItem key={index} value={university.name}>{university.name}</MenuItem>
      ))}
    </Select>
    </FormControl>
  )
}

export default UniversitySearch
