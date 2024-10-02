import React from 'react'
import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material'

function CardContainer({icon,count,label}) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{p:1.5}}>
    <Card sx={{boxShadow:2}}>
      <CardContent>
        <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          <IconButton sx={{p:1.5,backgroundColor: 'rgba(0, 0, 0, 0.08)',color:'black'}}>
          {icon}
          </IconButton>
          <Box sx={{display:'flex',flexDirection:'column',textAlign:'center',p:1.5}}>
          <Typography>{count}</Typography>
          <Typography color='textSecondary'>{label}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
    </Grid>
  )
}

export default CardContainer
