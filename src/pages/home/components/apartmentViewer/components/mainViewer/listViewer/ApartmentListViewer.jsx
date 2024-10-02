import {  Box, Grid, useMediaQuery } from '@mui/material';
import React from 'react'
import NotAvailable from '../../subViewer/apartmentBox/NotAvailable';
import notAvailableStyle from '../../subViewer/style/notAvailableStyle';
import { useView } from '../../../../filter/filterAbove/context/ViewContext';
import ListViewerSlider from './ListViewerSlider';
import NotFound from '../NotFound';
import ApartmentBoxContent from '../../subViewer/apartmentBox/apartmentBoxContent/ApartmentBoxContent';
import DiscountIcon from '../../subViewer/apartmentBox/DiscountIcon';
import { useTheme } from '@mui/material/styles';

function ApartmentListViewer({apartments,setApartments}) {
  const {view}=useView()
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid container item xs={12}  >
        {view!=='grid'&& apartments.map((apartment) =>(
              <Grid item container xs={12} key={apartment.id} sx={{display:'flex',alignItems:'center',backgroundColor:'rgba(211, 211, 211, 0.13)',border:'1px solid rgba(211,211,211,1)',borderRadius:5,my:{xs:2,lg:0},mx:{md:2,lg:0},m:{lg:2},overflow:'hidden',position:'relative',height:'250px',pointerEvents: apartment.isAvailable ? 'auto' : 'none',cursor:'pointer',}}>
                {!apartment.isAvailable && (
      <>
      <NotAvailable />
      <Box sx={notAvailableStyle}>
      </Box>
      </>
      )}
       {apartment.isDiscounted && (
  <Box sx={{position: 'absolute', top: -15, right:isXs ? 'auto' : -15,left:isXs ? -15 : 'auto', zIndex: 1}}>
    <DiscountIcon  />
  </Box>
)}
       <Grid item xs={5} lg={3} sx={{p:2}} > 
             <ListViewerSlider  apartment={apartment}/>
        </Grid>
        <Grid item xs={7}  lg={9} sx={{p:2}}>
        <ApartmentBoxContent apartment={apartment} />
        </Grid>
                </Grid>
    ))}
    {view !=='grid' && apartments.length ===0 && (
      <NotFound/>
    )
    }
    </Grid>
  )
}

export default ApartmentListViewer
