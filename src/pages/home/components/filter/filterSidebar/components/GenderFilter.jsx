import React from 'react';
import { Box, FormControl, FormLabel, Select, MenuItem, InputAdornment } from '@mui/material';
import { useFilter } from '../context/FilterValues';
import WcIcon from '@mui/icons-material/Wc';

function GenderFilter() {
  const { gender, setGender } = useFilter();

  return (
    <div>
      <FormLabel component='legend' sx={{ color: 'black', fontWeight: 'bold', padding: 3, mb: -5 }}>Gender</FormLabel>
      <Box sx={{ p: 3 }}>
        <FormControl variant="standard" fullWidth>
          <Select
            labelId="gender-label"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            startAdornment={<InputAdornment position="start"><WcIcon sx={{ mr: 1 }} /></InputAdornment>}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '4px',
              },
              '& .MuiInputBase-input': {
                textAlign: 'left',
              },
            }}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Gender
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default GenderFilter;
