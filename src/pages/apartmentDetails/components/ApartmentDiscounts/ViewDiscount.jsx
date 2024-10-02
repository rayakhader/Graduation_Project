import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';

function ViewDiscount({discount,view,setView}) {
  return (
   <Dialog open={view}>
    <DialogContent>
        <IconButton sx={{position:'absolute',top:5,right:5}} onClick={()=>setView(false)}>
            <CloseIcon />
        </IconButton>
        <Box sx={{display:'flex',alignItems:'center'}}>
        <Box sx={{borderRadius:100,p:5,border:'2px solid #d32f2f'}}>
            <Typography variant='h6' sx={{color:'#d32f2f'}}>{discount.percentage}%</Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',gap:1,p:1.5}}>
            <Typography variant='h6' sx={{letterSpacing:1}}>Discount Description</Typography>
            <Typography sx={{textTransform:'capitalize'}} color='textSecondary' textAlign='center'>{discount.description}</Typography>
        </Box>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',p:1.5,gap:1}}>
           <EventIcon />
           <Typography variant='body2' color='textSecondary'>Expiry date</Typography> 
           <TextField value={discount.expiryDate} disabled   />
        </Box>
    </DialogContent>
    <DialogActions sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button variant='contained' onClick={()=>setView(false)}>Cancel</Button>
    </DialogActions>
   </Dialog>
  )
}

export default ViewDiscount
