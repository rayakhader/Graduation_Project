import React, { useRef, useState } from 'react';
import { Box, Button, Card, CardMedia, Dialog, DialogContent, DialogTitle, IconButton, Typography,CircularProgress } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import changeApartmentImage from '../../../../../../../../../API/images/changeApartmentImage';
import { useRefreshApartmentDetails } from '../context/RefreshApartmentDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import deleteApartmentImage from '../../../../../../../../../API/images/deleteApartmentImage';
import { useToken } from '../../../../../../../../../globalContext/TokenContext';

function ChangeImagesDialog({ change, setChange, images, id }) {
    const fileInputRef = useRef(null);
    const {token}=useToken()
    const[activeImageId,setActiveImageId]=useState(null)
    const [loading, setLoading] = useState(false);
    const {refresh,setRefresh}=useRefreshApartmentDetails()
    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setLoading(true); 
            const formData = new FormData();
            formData.append("image", event.target.files[0]);
            changeApartmentImage(token,id, activeImageId, formData,refresh,{setRefresh}).finally(()=>setLoading(false))
            setTimeout(() => {
                setChange(false);
            }, 1000);
        }
    };
    const handleIconClick = (imageId,event) => {
        event.stopPropagation();  
        setActiveImageId(imageId)
        fileInputRef.current.click();  
    };
    const handleDeleteImage = (imageId,event)=>{
        event.stopPropagation(); 
        setLoading(true); 
        deleteApartmentImage(token,id,imageId,refresh,{setRefresh}).finally(()=>setLoading(false))
        setTimeout(() => {
            setChange(false);
        }, 1000);
    }
    return (
        <Dialog open={change} onClose={() => setChange(false)} sx={{ '& .MuiDialog-paper': { minWidth: { xs: '90%', sm: '500px' } } }}>
            <DialogTitle sx={{ textAlign: 'center', backgroundColor: '#1976d2',color:'white' }}>
              <PhotoCameraIcon />
                Change images
            </DialogTitle>
            <DialogContent>
                {images.map((image, index) => (
                    <Box key={index} sx={{ position: 'relative', my: 2, mx: 1 }}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={image.imagePath}
                                alt={`Description of image ${index + 1}`}
                            />
                            <Box sx={{display:'flex',gap:1,position: 'absolute', right: 10, top: 10,}}>
                            <IconButton
                                sx={{ color: 'primary.main', backgroundColor: 'rgba(255, 255, 255, 0.8)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' } }}
                                onClick={(event)=>handleIconClick(image.id,event)} 
                            >
                                <PhotoCameraIcon />
                            </IconButton>
                            <IconButton color='error'
                             sx={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}
                             onClick={(event)=>handleDeleteImage(image.id,event)}
                             disabled={images.length===1}
                             >
                                 <DeleteIcon />
                            </IconButton>
                            </Box>
                        </Card>
                    </Box>
                ))}
                <input
                    type="file"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: 'none'}} 
                />
            </DialogContent>
            <Dialog open={loading}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                    <CircularProgress />
                    <Typography sx={{ mt: 2 }}>Processing...</Typography>
                </Box>
            </Dialog>
        </Dialog>
    );
}

export default ChangeImagesDialog;
