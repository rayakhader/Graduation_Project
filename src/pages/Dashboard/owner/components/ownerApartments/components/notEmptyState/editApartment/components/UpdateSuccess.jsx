import React from 'react'
import { Dialog, DialogContent, IconButton, Typography } from '@mui/material'
import { green } from '@mui/material/colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

function UpdateSuccess({updated,setUpdated}) {
  return (
      <Dialog open={updated} onClose={()=>setUpdated(false)} sx={{'& .MuiDialog-paper': { 
        minWidth: '400px',
        minHeight:'200px'
      }}}>
        <DialogContent sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
           <IconButton onClick={()=>setUpdated(false)} sx={{position:'absolute',top:0,right:0}}>
                <CloseIcon />
            </IconButton> 
            <IconButton sx={{color:green[500]}}>
                <CheckCircleIcon sx={{height:80,width:80}} />
            </IconButton>
            <Typography variant='h6'>Successfully Updated!</Typography>
        </DialogContent>
      </Dialog>
  )
}

export default UpdateSuccess
