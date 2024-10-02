import React, { useEffect, useRef, useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Avatar, Box, Button, CircularProgress, Dialog, Typography} from '@mui/material'
import uplodeAdminImage from '../../../../../API/images/uplodeAdminImage';
import { useToken } from '../../../../../globalContext/TokenContext';
import { useAdminSettings } from './context/RefreshAdminSettings';
import DeleteIcon from '@mui/icons-material/Delete';
import deleteAdminImage from '../../../../../API/images/deleteAdminImage';

function ImageSec({adminInfo}) {
  const fileInputRef =useRef(null)
  const [adminImage,setAdminImage]=useState(null)
  const {token}=useToken()
  const [loading,setLoading]=useState(false)
  const{refresh,setRefresh}=useAdminSettings()
  const handleImageChange =(event)=>{
    const file = event.target.files[0]
    if(file){
      setAdminImage(file)
      fileInputRef.current.value = null; 
    }
  }
  const handleDeleteImage =()=>{
    setLoading(true)
    deleteAdminImage(token,refresh,{setRefresh}).finally(()=>setLoading(false))
  }
  useEffect(()=>{
    if(adminImage){
      const formData = new FormData()
      formData.append('file', adminImage);
      setLoading(true)
      uplodeAdminImage(token,formData,refresh,{setRefresh}).finally(()=>setLoading(false))
    }
  },[adminImage])

  return (
    <Box sx={{display:'flex',flexWrap:{xs:'wrap',md:'nowrap'}, alignItems:'center',p:1.5, gap:3}}>
        <Avatar sx={{height:80,width:80}} src={adminInfo.imagePath}/>
        <Box sx={{display:'flex',alignItems:'start',gap:2,flexWrap:'wrap'}}>
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Button variant='outlined' startIcon={<CloudUploadIcon />} onClick={()=>fileInputRef.current.click()} >
        <input
          accept="image/*"
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
          uplode profile photo</Button>
          <Typography variant="body2" color='textSecondary'>Allowed file types: JPG, PNG, GIF</Typography>
        </Box>
        <Button onClick={handleDeleteImage} disabled={!adminInfo.imagePath} sx={{color:'black',border:'1px solid rgba(211,211,211,1)'}} startIcon={<DeleteIcon />}>Delete</Button>
        </Box>
        <Dialog open={loading}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Loading ...</Typography>
        </Box>
      </Dialog>
    </Box>
  )
}

export default ImageSec
