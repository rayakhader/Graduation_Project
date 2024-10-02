import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import { useSaveChanges } from '../context/SaveChanges'
import CloseIcon from '@mui/icons-material/Close';

function SaveChanges({saveChanges}) {
    const {setSaveChanges,setConfirm}=useSaveChanges()
  return (
   <Dialog open={saveChanges} onClose={()=>setSaveChanges(false)} sx={{'& .MuiDialog-paper': { 
    minWidth: {md:'400px'},
  }}}>
    <DialogTitle>Save Changes</DialogTitle>
        <DialogContent>
            <IconButton onClick={()=>setSaveChanges(false)} sx={{position:'absolute',top:0,right:0}}>
                <CloseIcon />
            </IconButton>
            <Typography variant='body2' color='textSecondary'>Are you sure you want to save your changes? </Typography>
        </DialogContent>
        <DialogActions sx={{display:'flex',alignItems:'center',justifyContent:'center',p:1.5}}>
            <Button variant='contained' onClick={()=>setConfirm(true)}>Confirm</Button>
            <Button variant='outlined' onClick={()=>setSaveChanges(false)}>Cancel</Button>
        </DialogActions>
    </Dialog>
  )
}

export default SaveChanges
