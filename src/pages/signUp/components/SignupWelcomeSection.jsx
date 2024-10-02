import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigation } from '../../../customHook/useNavigation';
import logo from '../../../images/newlogo.png'
function SignupWelcomeSection() {
  const {clickWelcomePage}= useNavigation();
  return (
    <Grid item xs={12} lg={6} sx={{ display:'flex',flexDirection:'column',textAlign: 'center',justifyContent:'space-evenly',backgroundColor:'#1976d2'}}>
              <img src={logo} alt="logo" onClick={clickWelcomePage} style={{ maxWidth: '250px', margin: '0 auto',cursor:'pointer' }} />
              <Typography variant="h4" color="white" gutterBottom sx={{textAlign:'start',mx:'20px',letterSpacing:'2px'}}>
                  Join Sakanat!
                  </Typography>
                  <Typography variant="subtitle1" color="white" sx={{textAlign:'justify',mx:'20px',letterSpacing:'1px'}}>
              Join our community and start exploring a 
              wide selection of properties
               tailored to your needs.
              </Typography>
          </Grid>
  )
}

export default SignupWelcomeSection
