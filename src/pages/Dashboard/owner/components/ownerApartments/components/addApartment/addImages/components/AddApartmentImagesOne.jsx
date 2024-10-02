import { Alert, Box,Button, Card, CardActions, CardContent, Typography} from '@mui/material'
import React, { useState } from 'react'
import { containerBoxStyle,  nextBtnStyle } from '../../style/addApartmentInputStyle'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useData } from '../../context/AddApartmentDataContext';
function AddApartmentImagesOne({goToNextPage}) {
  const [showError, setShowError] = useState(false);
  const{coverImage,setCoverImage}=useData()
  const handleCoverImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(file);
      setShowError(false)
    }
  };
  const handleNextClick=()=>{
    if(!coverImage){
      setShowError(true)
    }else{
      goToNextPage()
    }
  }
  return (
    <Box sx={containerBoxStyle}>
        <Card sx={{ p: 2, border: '2px dashed #ccc', borderRadius: '10px',backgroundImage: coverImage? `url(${URL.createObjectURL(coverImage)})`:'none',backgroundSize:'contain',height:400,backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
        <CardContent sx={{ height:'90%',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="cover-image-file"
            type="file"
            onChange={handleCoverImageSelect}
          />
          <label htmlFor="cover-image-file">
            <Button variant="contained" component="span" startIcon={<AddAPhotoIcon />}>
              Upload Cover Photo
            </Button>
          </label>
          <Typography variant="body2" color="textSecondary" component="p" sx={{ mt: 2 }}>
              Drop cover image here 
          </Typography>
        </CardContent>
        <CardActions sx={{display:'flex',justifyContent:'flex-end'}}>
          <Button size="small" color="primary" onClick={() => setCoverImage(null)}>Clear Cover</Button>
        </CardActions>
      </Card>
     {showError &&<Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Alert severity="error" sx={{ mt: 2}}>
              Please select a cover image to proceed.
            </Alert>
      <Button sx={nextBtnStyle} onClick={handleNextClick}>Next</Button>
      </Box>}
      {!showError &&<Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
      <Button sx={nextBtnStyle} onClick={handleNextClick}>Next</Button>
      </Box>}
    </Box>
  )
}
export default AddApartmentImagesOne
