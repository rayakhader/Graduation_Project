import {  Grid } from '@mui/material';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LoginWelcomeSection from "./LoginWelcomeSection.jsx";
import LoginFormSection from "./LoginFormSection.jsx";
import { LoginProvider } from '../context/LoginContext.jsx';
import { ShowPasswordProvider } from '../context/ShowPasswordContext.jsx';
import { useEffect } from 'react';
import { useToken } from '../../../globalContext/TokenContext.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRole } from '../../../globalContext/RoleContext.jsx';
import useResetFiltersOnNavigation from '../../home/customHook/useResetFiltersOnNavigation.js';

function Login() {
  const {token}=useToken()
  const{userRole}=useRole()
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(()=>{
    if (token && location.pathname === '/login'&& userRole!=='Admin' ) {
      navigate('/home', { replace: true });
    }else if(token && location.pathname === '/login'&& userRole==='Admin'){
      navigate('/admin', { replace: true });
    }
  },[token])
    const theme = createTheme({
      palette: {
        background: {
          default: '#f4f6f8'
        }
      },    
    });
    useResetFiltersOnNavigation()
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container sx={{height:'100vh',p:2}} >
        <Grid container  sx={{
            boxShadow: 10, 
            borderRadius: '10px',
            width:{xs:'100%',sm:'80%',lg:'70%'},
            margin:'auto',
            overflow:'hidden'
        }}>
         <LoginWelcomeSection />
         <LoginProvider>
          <ShowPasswordProvider>
           <LoginFormSection />
           </ShowPasswordProvider>
         </LoginProvider>
        </Grid>
        <ToastContainer />
        </Grid>
      </ThemeProvider>
      );
  }
  
  export default Login;

 