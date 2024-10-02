import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import getApartmentImagesById from '../../../API/apartments/getApartmentImagesById'
import { useNavigate } from 'react-router-dom'

function ApartmentsViewer({apartment}) {
    const [images,setImages]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        getApartmentImagesById(apartment.id,{setImages})
    },[apartment])
    const handleClick= (id)=>{
        const path =`/home/apartment/${id}`
        navigate(path)
    }
  return (
    <Grid item xs={12} sm={6} md={4} lg={2} key={apartment.id} sx={{p:1.5}}>
        <Card  sx={{
    backgroundImage: `url(${images[0]?.imagePath})`,
    backgroundSize: 'cover',
    position: 'relative',
    minHeight: 250,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundPosition: 'center',
}}>
    <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'  
    }} />
    <Box sx={{
        position: 'absolute',
        bottom: 30,
        left: 5,
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2
    }}>
        <Typography variant='h6' fontWeight='bold' color='white' p={1.5} textAlign='start'>{apartment.name}</Typography>
        <Button onClick={()=>handleClick(apartment.id)} variant='contained' sx={{
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '20px',
            color: 'black',
            textTransform: 'none',
            '&:hover': {
                backgroundColor: '#1976d2',
                border: 'none',
                color: 'white'
            }
        }}>Explore now</Button>
    </Box>
</Card>
    </Grid>
  )
}

export default ApartmentsViewer
