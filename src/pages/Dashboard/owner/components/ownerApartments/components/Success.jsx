import React from 'react'
import { Dialog, DialogContent, IconButton, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
function Success({label,success,setSuccess}) {
  return (
    <Dialog open={success} onClose={()=>setSuccess(false)} sx={{'& .MuiDialog-paper': { 
        minWidth: {md:'400px'},
        minHeight:'200px'
      }}}>
        <DialogContent sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
           <IconButton onClick={()=>setSuccess(false)} sx={{position:'absolute',top:0,right:0}}>
                <CloseIcon />
            </IconButton> 
            <IconButton sx={{color:green[500]}}>
                <CheckCircleIcon sx={{height:80,width:80}} />
            </IconButton>
            <Typography variant='h6'>{label}</Typography>
        </DialogContent>
      </Dialog>
  )
}

export default Success
