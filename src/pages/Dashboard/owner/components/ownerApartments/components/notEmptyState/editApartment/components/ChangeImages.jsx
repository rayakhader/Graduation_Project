import React, { useEffect, useState } from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Box, Button} from '@mui/material'
import getApartmentImagesById from '../../../../../../../../../API/apartments/getApartmentImagesById';
import ChangeImagesDialog from './ChangeImagesDialog';
import { useRefreshApartmentDetails } from '../context/RefreshApartmentDetails';

function ChangeImages({apartmentDetails,id}) {
    const [images,setImages]=useState([])
    const [change,setChange]=useState(false)
    const{refresh}=useRefreshApartmentDetails()
    useEffect(()=>{
        if(id){
            getApartmentImagesById(id,{setImages})
        }
    },[id,refresh])
  return (
    <>
    <Box sx={{width:'100%',mb:1}}>
          <Button variant='outlined' color='primary' startIcon={<PhotoCameraIcon />} onClick={()=>setChange(true)}>Change Images</Button>
    </Box>
    <ChangeImagesDialog change={change} setChange={setChange} images={images} id={id} />
    </>
  )
}

export default ChangeImages
