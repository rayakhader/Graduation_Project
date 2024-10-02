import { Box, CssBaseline, Grid, ThemeProvider } from '@mui/material'
import React, { useEffect } from 'react'
import SidebarSettings from './SidebarSettings'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useToken } from '../../../globalContext/TokenContext';
import { useNavigation } from '../../../customHook/useNavigation';
import Footer from '../../../stableLayoutComponent/Footer';
import useResetFiltersOnNavigation from '../../home/customHook/useResetFiltersOnNavigation';
import { createTheme } from '@mui/material/styles';

function Settings() {
  const location = useLocation();
  const {token}=useToken()
  const {clickWelcomePage}=useNavigation()
  useResetFiltersOnNavigation()
  useEffect(()=>{
    if(!token){
      clickWelcomePage()
     }
  },[token])
  const theme = createTheme({
    palette: {
      background: {
        default: 'rgba(211, 211, 211, 0.13)'
      }
    },
  });
  if (location.pathname.endsWith('/settings') || location.pathname.endsWith('/settings/')) {
    return <Navigate to="/settings/my-account" replace />;
  }
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
   <Grid container sx={{height:'100vh',mb:40}} >
    <Grid item container xs={12} >
    <Box sx={{width:'75%',
          margin:'auto',
          display:'flex',
          borderRadius:'4px',
          flexWrap:'wrap',
          backgroundColor:'white',
          boxShadow:5,
          minHeight:'80%'
        }}>
     <SidebarSettings />
     <Outlet />
     </Box>
     </Grid>
   </Grid>
   <Footer />
   </ThemeProvider>
  )
}

export default Settings
