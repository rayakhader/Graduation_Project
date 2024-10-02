import React, { useEffect, useState } from 'react';
import { Container, ThemeProvider } from '@mui/material';
import {useNavigate, useSearchParams } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResetPasswordForm from './ResetPasswordForm.jsx';
import { ResetPasswordProvider } from '../context/ResetPasswordContext.jsx';
import { ShowPasswordProvider } from '../context/ShowPasswordContext.jsx';
import resetForgottenPassword from '../../../API/Identity/resetForgottenPassword.js';
import ErrorPage from '../../signUp/components/ErrorPage.jsx';
import useResetFiltersOnNavigation from '../../home/customHook/useResetFiltersOnNavigation.js';

function ResetPassword() {
  const[searchParams,setSearchParams]=useSearchParams()
  const token= searchParams.get('token')
  const email=searchParams.get('Email')
  const navigate = useNavigate()
  const theme = createTheme({
    palette: {
      background: {
        default: '#f4f6f8'
      }
    },
  });
  const [error,setError]=useState('')
  const[loading,setLoading]=useState(true)
  useEffect(() => {
    setLoading(true)
    if(email && token ){
    console.log('error')
    resetForgottenPassword(email, token,navigate,{setError}).finally(()=>setLoading(false))
    }
  else{
    setLoading(false)
    setError('Not Found')
  }
  }, [email, token, navigate]);
  useResetFiltersOnNavigation()
  return (
    <>
    {!loading && (!error ? (<ThemeProvider theme={theme}>
      <CssBaseline />
    <Container maxWidth="lg" sx={{height: '100vh',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: '16px', 
  }}>
    <ResetPasswordProvider>
      <ShowPasswordProvider>
      <ResetPasswordForm email={email} token={token}/>
      </ShowPasswordProvider>
    </ResetPasswordProvider>
    </Container>
    </ThemeProvider>): <ErrorPage error={error} />)}
    </>
  );
}

export default ResetPassword;
