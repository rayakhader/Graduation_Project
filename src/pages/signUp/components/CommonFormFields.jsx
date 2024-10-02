import { Box, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, Menu, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useShowPassword } from '../context/ShowPasswordContext';
import { useTogglePasswordVisibility } from '../customHook/useTogglePasswordVisibility';
 function CommonFormFields ({ values, errors, handleChange, citiesList }){
  const{showPassword}=useShowPassword()
  const {togglePasswordVisibility}=useTogglePasswordVisibility()
  return(
        <>
        <Box sx={{display:'flex',gap:2}}>
          <TextField
            margin="normal"
            fullWidth
            id="firstName"
            label="First Name"
            type="text"
            name="firstName"
            autoComplete="name"
            autoFocus
            value={values.firstName}
            onChange={(e) => handleChange(e)}
            error={!!errors.firstName}
            helperText={errors.firstName}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'  sx={{mr:1}}>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
            <TextField
            margin="normal"
            fullWidth
            id="lastName"
            label="Last Name"
            type="text"
            name="lastName"
            autoComplete="name"
            autoFocus
            value={values.lastName}
            onChange={(e) => handleChange(e)}
            error={!!errors.lastName}
            helperText={errors.lastName}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start' sx={{mr:1}}>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          </Box>
         
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) =>handleChange(e)}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start' sx={{mr:1}}>
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            autoComplete="new-password"
            value={values.password}
            onChange={(e) => handleChange(e)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
                startAdornment: (
                  <InputAdornment position='start' sx={{mr:1}}>
                    <LockIcon />
                  </InputAdornment>
                ),
            }}
            error={!!errors.password}
            helperText={errors.password}
          />
          <FormControl fullWidth error={!!errors.city} margin="normal" >
          <InputLabel id="city-select-label">City</InputLabel>
          <Select
          labelId="city-select-label"
          id="city"
          name="city"
          value={values.city}
          onChange={(e) => handleChange(e)}
          error={!!errors.city}
          startAdornment={
            <InputAdornment position='start' sx={{mr:1}}>
              <LocationCityIcon />
            </InputAdornment>
          }
          label='City'
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200,
              },
            },
          }}
          sx={{ height: '56px' }}
        >
          <MenuItem value="" disabled>
            Select city
          </MenuItem>
          {citiesList && citiesList.map((cityItem) => (
            <MenuItem key={cityItem.id} value={cityItem.name}>
              {cityItem.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.city}</FormHelperText>
        </FormControl>
              </>
  )
 }
  export default CommonFormFields

