import React from 'react';
import { Box, TextField, Typography, InputAdornment, MenuItem, Select } from '@mui/material';
import { useAccountData } from '../context/AccountData';
import { useCheckChange } from '../context/CheckChange';
import "flag-icon-css/css/flag-icons.min.css";
import inputStyle from './style/inputStyle';
import { useSelectedCountry } from '../context/SelectedCountryAccount';

const countryData = [
  { name: "Palestine", code: "+970", flag: "ps" },
  { name: "Palestine", code: "+972", flag: "ps" },
];

function PhoneNumber({ userInfo,phoneNumberError,setPhoneNumberError }) {
  const { phoneNumber, setPhoneNumber } = useAccountData();
  const { setChange } = useCheckChange();
  const { selectedCountry, setSelectedCountry } = useSelectedCountry();
  const handleSelectChange = (event) => {
    const selectedCountry = countryData.find((country) => country.code === event.target.value);
    setSelectedCountry(selectedCountry);
    setChange(true)
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    setChange(true);
    const phoneNumberPattern = /^[1-9][0-9]{8}$/; 
    if (phoneNumberPattern.test(value)) {
      setPhoneNumberError(false);
    } else {
      setPhoneNumberError(true);
    }
  };
  return (
    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', p: 1}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: {xs:'100%',md:'50%'}, p: 1 }}>
        <Typography sx={{ textAlign: 'start' }} variant="subtitle1">Phone number</Typography>
        <TextField
          variant="outlined"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          sx={inputStyle}
          error={phoneNumberError}
          helperText={phoneNumberError ? "Phone number must be 9 digits and not begin with 0" : ""}
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
    </Box>
  );
}

export default PhoneNumber;
