import { Box, Card, CardActionArea, IconButton,Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { containerBoxStyle } from '../../style/addApartmentInputStyle'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NavigationButton from '../../NavigationButton';
import { useData } from '../../context/AddApartmentDataContext';

function AddApartmentImagesTwo({goToNextPage,goToPreviousPage}) {
    const{images,setImages}=useData()
    const[moreImages,setMoreImages]=useState(false)
    const handleImageChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const updatedImages = [...images];
            updatedImages[index] = file;
            setImages(updatedImages);
        }
    };
    const handleClear =(index)=>{
            const updatedImages = [...images];
            updatedImages[index] = null
            setImages(updatedImages);
    }

    return (
        <Box sx={{ ...containerBoxStyle, flexWrap: 'nowrap', gap: 2 }}>
            <Grid container >
            {images.slice(0,moreImages?images.length:4).map((image, index) => (
                <Grid item key={index} xs={12} sm={6} sx={{p:1}}>
                  <Card key={index} sx={{ width: '100%', height: 200, position: 'relative', backgroundSize: 'cover', backgroundImage: `url(${image ? URL.createObjectURL(image) : 'none'})` }}>
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign:'center' }}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id={`image-file-${index}`}
                            type="file"
                            onChange={(event) => handleImageChange(event, index)}
                        />
                        <Box sx={{display:'flex',flexDirection:'column'}}>
                        <label htmlFor={`image-file-${index}`}>
                            <IconButton color="primary" aria-label="upload picture" component="span" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' } }}>
                                <AddCircleOutlineIcon sx={{ width: 60, height: 60 }} />
                            </IconButton>
                        </label>
                        <Button size="small" color="primary" onClick={()=>handleClear(index)}>
                           Clear Image
                        </Button>
                        </Box>
                    </Box>
                </Card>
                </Grid>
            ))}
            </Grid>
          {moreImages===false &&<Box sx={{width:'100%',textAlign:'center'}}>
             <Typography onClick={()=>setMoreImages(true)} variant="body2" color="textSecondary" component="p" sx={{ mt: 2,cursor:'pointer' }}>
                more images?
            </Typography>
             </Box>}
             {moreImages===true &&<Box sx={{width:'100%',textAlign:'center'}}>
             <Typography onClick={()=>setMoreImages(false)} variant="body2" color="textSecondary" component="p" sx={{ mt: 2,cursor:'pointer' }}>
                View Less
            </Typography>
             </Box>}
             <NavigationButton />
        </Box>
    );
}
export default AddApartmentImagesTwo
