import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useExpanded } from '../../../../../context/ExpandedSidebar'
import AddIcon from '@mui/icons-material/Add';
import AddApartmentSecondpage from './secondPart/AddApartmentSecondpage';
import { useNavigate } from './context/NavigateContext';
import AddApartmentThirdPage from './thirdPart/AddApartmentThirdPage';
import AddApartmentFourthPage from './fourthPart/AddApartmentFourthPage';
import AddApartmentImagesTwo from './addImages/components/AddApartmentImagesTwo';
import AddApartmentImagesOne from './addImages/components/AddApartmentImagesOne';

function AddApartment() {
  const {expanded}= useExpanded()
  const {currentStep, goToNextPage,goToPreviousPage}=useNavigate()
  return (
    <Grid container item xs={expanded?8:10.5} sm={expanded?8:10.9} md={expanded?9:11.3} lg={expanded?10:11.55}sx={{}}>
      <Grid item container xs={12} sx={{position:'relative',color:'#000'}}>
        <Box sx={{width:{
           xs:'100%',
           sm:'80%',
           md:'60%',
           lg:'40%'
          },
          margin:'auto',
          p:3}}>
          <Box sx={{display:'flex',flexDirection:'column',pb:5,alignItems:'center',textAlign:'center'}}>
          <Typography variant='h6'><AddIcon />Create a new Apartment</Typography>
          <Typography variant='body2' color="textSecondary" sx={{lineHeight:2,width:'80%'}} >Welcome to your dashboard!
             Here's your opportunity to showcase your property to a wide audience.</Typography>
        </Box>
        {currentStep===1 && <AddApartmentImagesOne currentStep={currentStep} goToNextPage={goToNextPage} />}
        {currentStep===2 && <AddApartmentImagesTwo currentStep={currentStep} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}  />}
        {currentStep===3 && <AddApartmentSecondpage  currentStep={currentStep} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} />}
        {currentStep===4 && <AddApartmentThirdPage  currentStep={currentStep} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} />}
        {currentStep===5 && <AddApartmentFourthPage  currentStep={currentStep} goToPreviousPage={goToPreviousPage} />}
        </Box>
    </Grid>
    </Grid>
  )
}
export default AddApartment
