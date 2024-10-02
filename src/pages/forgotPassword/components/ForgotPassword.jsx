import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ForgetPasswordForm from './ForgotPasswordForm';
import { useForget } from '../context/ForgotPasswordContext';
import useResetFiltersOnNavigation from '../../home/customHook/useResetFiltersOnNavigation';
import { useToken } from '../../../globalContext/TokenContext';
import { useNavigate } from 'react-router-dom';

function ForgetPassword() {
  const {countDown,setCountDown,setEmailSent}=useForget()
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
        let intervalId;
        if(countDown>0){
            intervalId= setInterval(()=>{
                setCountDown(countDown-1)
            },1000)
        }else if(countDown===0){
            setEmailSent(false)
        }
        return ()=> clearInterval(intervalId)
    },[countDown])
    useResetFiltersOnNavigation()
    useEffect(()=>{
      if(token){
        navigate('*',{replace:true})
      }
    },[token,navigate])
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
    <Container maxWidth="lg" sx={{
    height: '100vh', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '16px',
  }}> 
   <ForgetPasswordForm />
</Container>
</ThemeProvider>
);
}
export default ForgetPassword


