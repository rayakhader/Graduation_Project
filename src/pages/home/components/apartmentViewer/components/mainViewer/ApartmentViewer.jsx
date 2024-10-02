import React from 'react'
import ApartmentGridViewer from './gridViewer/ApartmentGridViewer';
import ApartmentListViewer from './listViewer/ApartmentListViewer'
import { Grid } from '@mui/material';
import { useView } from '../../../filter/filterAbove/context/ViewContext';

function ApartmentViewer({apartments}) {
  const {view} =useView()
  const isEmpty = apartments.length === 0;
  return (
    <Grid item container={isEmpty ? true : undefined}  sx={{px:{lg:2}}} xs={12} sm={view==='grid'&&7} md={7} lg={10}>
      {view==='grid'&& <ApartmentGridViewer apartments={apartments}  />}
      {view!=='grid'&& <ApartmentListViewer  apartments={apartments} />}
    </Grid>   
  )
}

export default ApartmentViewer
