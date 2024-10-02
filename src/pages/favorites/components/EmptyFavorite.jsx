import { Grid, Typography } from '@mui/material'
import React from 'react'

function EmptyFavorite() {
  return (
    <Grid item xs={12} sx={{p:3,border:'1px solid rgba(211,211,211,1)',borderRadius:'4px'}}> 
      <Typography variant='body2' color='textSecondary' sx={{textAlign:'center'}}>No apartment added to favorite yet</Typography>
  </Grid>
  )
}

export default EmptyFavorite
