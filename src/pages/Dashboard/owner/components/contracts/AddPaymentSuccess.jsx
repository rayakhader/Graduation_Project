import React from 'react'
import { Dialog, DialogContent, IconButton, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
function AddPaymentSuccess({addSuccess,setAddSuccess}) {
  return (
    <Dialog open={addSuccess} onClose={()=>setAddSuccess(false)} sx={{'& .MuiDialog-paper': { 
        minWidth: {md:'400px'},
        minHeight:'200px'
      }}}>
        <DialogContent sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
           <IconButton onClick={()=>setAddSuccess(false)} sx={{position:'absolute',top:0,right:0}}>
                <CloseIcon />
            </IconButton> 
            <IconButton sx={{color:green[500]}}>
                <CheckCircleIcon sx={{height:80,width:80}} />
            </IconButton>
            <Typography variant='h6'>Successfully Added!</Typography>
        </DialogContent>
      </Dialog>
  )
}
export default AddPaymentSuccess
