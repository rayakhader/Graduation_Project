import React from 'react'
import { Box, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material'
const countryData = [
    { name: "Palestine", code: "+970", flag: "ps" },
    { name: "Palestine", code: "+972", flag: "ps" },
  ];
  
function PhoneNumber({phoneNumber,setPhoneNumber,selectedCountry,setSelectedCountry,setChanged,phoneNumberError,setPhoneNumberError}) {
  const handleSelectChange = (event) => {
    const selectedCountry = countryData.find((country) => country.code === event.target.value);
    setSelectedCountry(selectedCountry);
    setChanged(true)
  };
  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    setChanged(true);
    const phoneNumberPattern = /^[1-9][0-9]{8}$/; 
    if (phoneNumberPattern.test(value)) {
      setPhoneNumberError(false);
    } else {
      setPhoneNumberError(true);
    }
  };
  return (
    <Box sx={{display:'flex',flexDirection:'column',width:{xs:'100%',md:'50%'},p:1.5}}>
        <Typography variant='body2' fontWeight='bold'>Phone number</Typography>
        <TextField
        value={phoneNumber} 
        error={phoneNumberError}
        helperText={phoneNumberError ? "Phone number must be 9 digits and not begin with 0" : ""}
        onChange={handlePhoneNumberChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Select
                value={selectedCountry.code}
                onChange={handleSelectChange}
                variant="standard"
                disableUnderline
              >
                {countryData.map((country) => (
                  <MenuItem key={country.code} value={country.code}>
                    <span
                      className={`flag-icon flag-icon-${country.flag}`}
                      style={{ marginRight: "8px" }}
                    />
                    {country.name.substring(0, 3)} ({country.code})
                  </MenuItem>
                ))}
              </Select>
            </InputAdornment>
          ),
        }}
        />
      </Box>
  )
}

export default PhoneNumber
