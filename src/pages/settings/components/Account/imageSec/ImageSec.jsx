import React, { useEffect, useRef, useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Box, Button, Dialog, Typography,CircularProgress} from '@mui/material'
import { useToken } from '../../../../../globalContext/TokenContext';
import { jwtDecode } from 'jwt-decode';
import { useUserImage } from '../context/UserImage';
import uplodeUserImage from '../../../../../API/images/uplodeUserImage';
import deleteUserImage from '../../../../../API/images/deleteUserImage';
function ImageSec({userInfo}) {
  const [uplodeImage,setUplodeImage]=useState(false)
  const {userImage,setUserImage}=useUserImage()
  const {token}=useToken()
  const fileInputRef =useRef(null)
  const[loading,setLoading]=useState(false)
  const handleImageChange =(event)=>{
    const file = event.target.files[0]
    if(file){
    setUserImage(file)
    fileInputRef.current.value = null; 
    }
  }
  useEffect(()=>{
    if(Object.keys(userInfo)!==0){
    setUserImage(userInfo.imagePath)
  }
  },[userInfo])
  const handleDeleteImage =()=>{
    setLoading(true)
    deleteUserImage(token,{setUserImage}).finally(()=>setLoading(false))
  }
  useEffect(()=>{
      if(token && uplodeImage && userImage){
      const decoded = jwtDecode(token);
      const userId = decoded['userId'];
      setLoading(true)
      uplodeUserImage(token,userId,userImage,{setUserImage,setUplodeImage}).finally(()=>setLoading(false))
      } 
  },[userImage])
  return (
    <Box sx={{display:'flex',width:'100%',gap:5,alignItems:'center',border:'1px solid rgba(211,211,211,0.5)',p:2,borderRadius:'4px'}}>
    <Avatar 
    src={userInfo.imagePath}
    alt='User image'
    sx={{height:80,width:80,bgcolor: 'inherit',color:'black',border:'1px solid rgba(211,211,211,1)'}}
    />
    <Box sx={{display:'flex',alignItems:'start',gap:2,flexWrap:'wrap'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
    <Button sx={{color:'#1976d2',border:'2px solid #1976d2',borderRadius:'10px',p:1,textTransform:'none',gap:1}} onClick={()=>{setUplodeImage(true)
    fileInputRef.current.click()
    }}>
    <input
          accept="image/*"
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      <CloudUploadIcon />Change photo</Button>
    <Typography variant="body2" color='textSecondary'>Allowed file types: JPG, PNG, GIF</Typography>
    </Box>
    <Button onClick={handleDeleteImage} disabled={!userInfo.imagePath} sx={{color:'black',border:'1px solid rgba(211,211,211,1)',borderRadius:'10px',p:1,textTransform:'none',gap:1}}><DeleteIcon />Delete</Button>
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
