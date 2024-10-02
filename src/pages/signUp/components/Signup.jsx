import React, { useEffect, useState } from 'react';
import {Grid, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SignupWelcomeSection from './SignupWelcomeSection';
import SignupFormSection from './SignupFormSection';
import { SignupProvider } from '../context/SignupContext';
import { ShowPasswordProvider } from '../context/ShowPasswordContext';
import getAllCities from '../../../API/city/getAllCities';
import useResetFiltersOnNavigation from '../../home/customHook/useResetFiltersOnNavigation';
import { useToken } from '../../../globalContext/TokenContext';
import { useNavigate } from 'react-router-dom';

function Signup(){
  const [citiesList, setCitiesList] = useState([]);
  const{token}=useToken()
  const navigate = useNavigate()
    const theme = createTheme({
      palette: {
        background: {
          default: '#f4f6f8'
        }
      },
    });
    useEffect(()=>{
     getAllCities({setCitiesList})
    },[])
    useResetFiltersOnNavigation()
    useEffect(()=>{
      if(token){
        navigate('*',{replace:true})
      }
    },[token,navigate])
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container sx={{height:'100vh',p:2}} >
      <Grid container spacing={0} sx={{ boxShadow: 10,overflow:'hidden', borderRadius: '10px',width:{xs:'100%',sm:'80%',lg:'70%'},margin:'auto'}}>
          <SignupWelcomeSection />
         <SignupProvider>
          <ShowPasswordProvider>
          <SignupFormSection 
          citiesList={citiesList}
          />
          </ShowPasswordProvider>
         </SignupProvider>
      </Grid>
  </Grid>
  </ThemeProvider>
    );
  }
export default Signup;