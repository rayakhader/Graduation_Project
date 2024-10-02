import { Box, Button, Dialog,DialogContent,Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import KeyIcon from '@mui/icons-material/Key';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigation } from '../../../customHook/useNavigation';
import image from '../../../images/undraw_Access_account_re_8spm.webp'
function FavoriteDialog({open,setOpen}) {
    const {clickLogin,clickSignup}=useNavigation()
    const handleClose = (event)=>{
        event.stopPropagation()
        setOpen(false)
    }
    const handleLoginClick = (event) => {
        event.stopPropagation();
        clickLogin();
      };
      const handleSignupClick = (event) => {
        event.stopPropagation();
        clickSignup();
      };
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{display:'flex'}}>
            <Box sx={{position:'absolute',top:10,right:10}}>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={{width:'50%',p:1.5}}>
                <img src={image} alt='building-img' style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </Box>
            <Box sx={{width:'50%',backgroundColor:'white',p:1.5}}>
                <Typography variant='h6'>Join us</Typography>
                <Typography variant='body2' color='textSecondary' sx={{textAlign:'center',mt:1}}>Join our vibrant community now to unlock exclusive features and embark on an exciting journey of discovery with us!</Typography>
                <Divider sx={{border:'1px solid rgba(211,211,211,1)',mt:3}}  />
                <Box sx={{width:'100%',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:1,mt:5}}>
                    <Button variant='contained' sx={{width:'120px'}} startIcon={<KeyIcon />} onClick={handleLoginClick}>Login</Button>
                    <Button variant='outlined'  sx={{width:'120px'}} startIcon={<PersonAddIcon />} onClick={handleSignupClick}>Sign up</Button>
                </Box>
            </Box>
        </DialogContent>
    </Dialog>
  )
}

export default FavoriteDialog
