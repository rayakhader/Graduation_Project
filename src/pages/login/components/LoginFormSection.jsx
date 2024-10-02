import { Box, Button, Card, CardContent, Grid, IconButton, InputAdornment, TextField, Typography, Link as MuiLink, useMediaQuery } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import LoginHandleErrors from './LoginHandleErrors';
import useForm from '../customHook/useForm';
import { toast } from 'react-toastify'; 
import { useNavigation } from '../../../customHook/useNavigation';
import { useTheme } from '@emotion/react';
import { useLogin } from '../context/LoginContext';
import { useShowPassword } from '../context/ShowPasswordContext';
import { useTogglePasswordVisibility } from '../customHook/useTogglePasswordVisibility';
import loginAPI from '../../../API/Identity/loginAPI';
function LoginFormSection() {
  const {handleChange,values,errors}=useForm()
  const{showPassword}=useShowPassword()
  const {togglePasswordVisibility} =useTogglePasswordVisibility()
  const {setShowAlert,setLoginError,setIsLoggedin}=useLogin();
  const {clickHome,clickAdmin}=useNavigation()
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const logIn = async (event) => {
    event.preventDefault();
    loginAPI(values.email,values.password, { setShowAlert, setLoginError, clickHome,clickAdmin, toast, setIsLoggedin })
  };
  return (
    <Grid item xs={12} md={7} lg={6} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: matchesSM ? 2 : 4,
        backgroundColor: 'white', 
      }}>
        <Card variant="outlined" sx={{ width: '100%', maxWidth: '400px' }}>
          <CardContent>
            <Typography component="h1" variant="h5" textAlign="center" >
              Log in
            </Typography>
            <Box component="form" onSubmit={logIn} noValidate sx={{ mt: 1 }}>
            <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={values.email}
            onChange={(e) => handleChange(e)}
            error={!!errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start' sx={{mr:1}}>
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type={showPassword?'text':'password'}
            id="password"
            autoComplete="current-password"
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
            <Typography component="p" sx={{mt:3,textAlign:'end'}}>
          <MuiLink component={RouterLink} to='/forgot-password'>Forgot Password?</MuiLink>
          </Typography>
              <Button
                disabled={!values.email || !values.password || errors.email !== '' || errors.password !== ''}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, backgroundColor: '#1976d2'}}
              >
                Log In
              </Button>
            </Box>
            <LoginHandleErrors />
            <Typography>
              Don't have an account? <MuiLink component={RouterLink} to='/signup' >Sign up</MuiLink>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
  )
}
export default LoginFormSection
