import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigation } from '../../../customHook/useNavigation';
import logo from '../../../images/newlogo.png'

function LoginWelcomeSection() {
    const {clickWelcomePage}= useNavigation();

  return (
    <Grid item xs={12} md={5} lg={6} sx={{
        backgroundImage: 'url("your-background-image.jpg")', 
        backgroundColor: '#1976d2', 
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src={logo} alt="logo" style={{
            maxWidth: '250px',
            marginBottom: '1rem',
            cursor:'pointer',
          }} onClick={clickWelcomePage} />
          <Typography variant="h4" sx={{letterSpacing:'2px'}} gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="subtitle1" sx={{letterSpacing:'1px'}}>
            Your journey to a perfect rental starts here.
          </Typography>
        </Box>
      </Grid>
  )
}

export default LoginWelcomeSection
