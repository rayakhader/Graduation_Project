import { Box, IconButton, Input, InputAdornment, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import modalStyle from '../style/modal';
import { useCopyToClipboard } from '../customHook/useCopyToClipboard';
import getApartmentImagesById from '../../../../../../../API/apartments/getApartmentImagesById';

function ShareModal({apartmentDetails,id}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const Id = open ? 'simple-modal' : undefined;
  const [images,setImages]=useState([])
  useEffect(()=>{
    getApartmentImagesById(id,{setImages})
  },[id])
  const {copyToClipboard}=useCopyToClipboard()
  const shareUrlLink = window.location.href;
  const url ='https://super-pegasus-b0fc42.netlify.app/';
  const encodedUrl = encodeURIComponent(url);
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const whatsappUrl = `https://wa.me/?text=${encodedUrl}`;
  return (
    <>
    <IconButton aria-label="share" aria-describedby={id} onClick={handleClick} sx={{ color: 'black',backgroundColor:'white',m:1 }}>
    <ShareIcon sx={{ fontSize: '1rem' }} />
 </IconButton>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="share-modal-title"
    aria-describedby="share-modal-description"
>
    <Box sx={modalStyle}>
      <Box sx={{position:'absolute',zIndex:5,width:'80%',display:'flex',
      backgroundColor:'white',boxShadow:10,
      alignItems:'center',justifyContent:'center',
      top:-50,border:'2px solid white',borderRadius:2,overflow:'hidden'
      }}>
        {images.length>0&& (
        <img src={images[0].imagePath} alt='apartment-img' style={{height:200,width:'100%',objectFit:'cover',filter:'blur(1px)'}} />
        )}
        </Box>
      <Box sx={{mt:20}}>
        <Typography id="share-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
            Share this with your social Community
        </Typography>
        <IconButton sx={{position:'absolute',top:0,right:0}} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <IconButton color="success" onClick={() => window.open(whatsappUrl, '_blank')}>
                <WhatsAppIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => window.open(shareUrl, '_blank')}>
                <FacebookIcon />
            </IconButton>
        </Box>
      <Typography fullWidth sx={{ mt: 2,textAlign:'start' }}  variant='textSecondary'>or copy link</Typography>
      <Box sx={{display:'flex',alignItems:'center',width:'100%'}}>
        <Input fullWidth id='copy-link' name='copyLink' value={shareUrlLink} sx={{
      backgroundColor:'rgba(211,211,211,0.3)',borderRadius:2,border:'1px solid rgba(211,211,211,1)',
      '&:before, &:after': {
        display: 'none', 
      },
      '& .MuiInput-input': {
        padding: '10px 0', 
      },
    }}
      readOnly
      endAdornment={
      <InputAdornment position='end'>
        <IconButton onClick={()=>copyToClipboard(shareUrlLink)}>
          <ContentCopyIcon  />
        </IconButton>
      </InputAdornment>
      }
      > 
        </Input>
        </Box> 
    </Box>
    </Box>
</Modal>
</>
  )
}
export default ShareModal
