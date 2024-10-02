import { FormControl, FormLabel, MenuItem, Select} from '@mui/material'
import React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useFilter } from '../context/FilterValues';

function UniversityFilter({universitiesList}) {
  const {university,setUniversity}=useFilter()
  const handleUniversity=(event)=>{
    setUniversity(event.target.value)
  }
  return (
    <div>
<FormLabel component="legend" sx={{color:'black',fontWeight:'bold',padding:3,mb:-5}}>University</FormLabel>
<FormControl fullWidth margin="normal" sx={{padding:3}} >
  <Select
  value={university}
  onChange={(e) => handleUniversity(e)}
  displayEmpty
  inputProps={{ 'aria-label': 'Without label' }}
  sx={{ height: '56px' }}
  MenuProps={{
    PaperProps: {
      style: {
        maxHeight: 200,  
      },
    },
  }}
>
  <MenuItem value="" disabled>
    Select university
  </MenuItem>
  {universitiesList && universitiesList.map((universityItem) => (
    <MenuItem key={universityItem.id} value={universityItem.name}>
      {universityItem.name}
    </MenuItem>
  ))}
</Select>
</FormControl>    
    </div>
  )
}
export default UniversityFilter
