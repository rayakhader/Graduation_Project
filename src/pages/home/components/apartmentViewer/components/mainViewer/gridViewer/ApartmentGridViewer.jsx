import { Grid  } from '@mui/material';
import React from 'react'
import ApartmentBox from '../../subViewer/apartmentBox/ApartmentBox';
import { useView } from '../../../../filter/filterAbove/context/ViewContext';
import NotFound from '../NotFound';

function ApartmentGridViewer({apartments}) {
  const {view}=useView()
  return (
    <Grid container item xs={12} sx={{}} >
        {view==='grid' && apartments.map((apartment) => (
      <Grid item xs={12} md={6} lg={4} xl={3} key={apartment.id} sx={{backgroundColor:'white',py:{xs:2,lg:0},px:{sm:2,lg:0},p:{lg:2}}}>
       <ApartmentBox apartment= {apartment} />
       </Grid>  
    ))}
    {view ==='grid' && apartments.length ===0 && (
      <NotFound />
    )
    }
    </Grid>
  )
}
export default ApartmentGridViewer
