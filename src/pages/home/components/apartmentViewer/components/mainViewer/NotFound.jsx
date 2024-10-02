import { Grid, Typography } from '@mui/material'
import React from 'react'

function NotFound() {
  return (
    <Grid item xs={12} sx={{p:2,border:'1px solid rgba(211,211,211,1)',display:'flex',alignItems:'center',borderRadius:5,justifyContent:'center'}}>
      <Typography variant='body2' color='textSecondary'>No Apartments Found</Typography>
    </Grid>
  )
}

export default NotFound
