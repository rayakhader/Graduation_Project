import React, { useEffect, useState } from 'react'
import Footer from '../../../stableLayoutComponent/Footer.jsx';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import SearchBox from './SearchBox.jsx';
import ApartmentsViewer from './ApartmentsViewer.jsx';
import { useNavigation } from '../../../customHook/useNavigation.js';
import { useRole } from '../../../globalContext/RoleContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import getApartmentsWelcomePage from '../../../API/apartments/getApartmentsWelcomePage.js';
import useResetFiltersOnNavigation from '../../home/customHook/useResetFiltersOnNavigation.js';
import background from '../../../images/welcome.jpg'

function WelcomePage() {
  const[newelyAddedApartments,setNewelyAddedApartments]=useState([])
  const{clickHome}=useNavigation()
  const {userRole}=useRole()
  const navigate= useNavigate()
  useEffect(()=>{
    if(userRole==='Admin'){
      navigate('/admin',{replace:true})
    }
    else{
    getApartmentsWelcomePage('-CreationDate',{setNewelyAddedApartments})}
  },[userRole])

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const variant = isXs ? 'h4' : isLg ? 'h2' : 'h3'; 
  useResetFiltersOnNavigation()

  return (
    <>
    <Grid container item xs={12} sx={{color:'black',mb:40}}>
      <Grid item container xs={12} sx={{
  backgroundImage: `url(${background})`,  
  backgroundSize: {xs:'300px 300px',md:'650px 650px'} , 
  backgroundRepeat:'no-repeat',
  backgroundPosition: 'right 35%', 
  minHeight: 500,
  position:'relative',
  backgroundColor: 'white' ,
  border:'1px solid rgba(211,211,211,1) '
}}>
        <Grid item xs={4} sx={{p:1.5,display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <Typography variant={variant} textAlign='start' p={1.5} fontWeight='bold' >Welcome To Sakanat.</Typography>
          <Typography variant='body2' px={1.5} pb={1.5}>No need to worry if you want to rent an apartment, we provide all the types you want.</Typography>
          <Box px={1.5} mb={2}><Button variant='contained'  sx={{py:1.5,px:5,fontSize:{lg:'20px'}}} onClick={clickHome}>Get Started</Button></Box>
        </Grid>
        <Box sx={{position:'absolute',bottom:{xs:-160,lg:-80},width:'100%'}}>
        <SearchBox />
        </Box>
      </Grid>
      {newelyAddedApartments.length>0 && <Grid container item xs={12} sx={{mt:20,p:1.5}}>
        <Box sx={{display:'flex',alignItems:'center',gap:0.5,p:1.5}}>
        <Typography variant='h6' >Newely Added</Typography>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
         <circle cx="12" cy="12" r="12" fill="#FF0000"/>
        <path fill="#ffffff" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
        </Box>
        <Grid container item xs={12}>
          {newelyAddedApartments.slice(0,6).map((apartment)=>(
             <ApartmentsViewer key={apartment.id} apartment={apartment}/>
          ))}
        </Grid>
      </Grid>}
    </Grid>
  <Footer />
    </>
  )
}
export default WelcomePage
