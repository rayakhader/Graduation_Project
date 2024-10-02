import React, { useEffect, useState } from 'react'
import { Box, InputAdornment, TextField, Typography,Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import { Snackbar, Alert } from '@mui/material';
import getUniversityById from '../../../../../API/university/getUniversityById'
import { useToken } from '../../../../../globalContext/TokenContext';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import updateUniversity from '../../../../../API/university/updateUniversity';

function EditUniversity({editUniversity,setEditUniversity,selectedUniversityId,cityId,setOpenViewDialog}) {
    const today = new Date().toISOString().split('T')[0]
    const[changed,setChanged]=useState(false)
    const [editSuccess,setEditSuccess]=useState(false)
    const [snackbarOpen,setSnackbarOpen]=useState(false)
    const{token}=useToken()
    const handleEditUniversity=(id,universityName)=>{
        updateUniversity(token,id,universityName,{setEditSuccess,setSnackbarOpen,setEditUniversity,setOpenViewDialog})}
      
    const handleCloseDialog = ()=>{
        setEditUniversity(false)
        setChanged(false)
    }
    const[universityName,setUniversityName]=useState('')
    useEffect(()=>{
        if(selectedUniversityId && editUniversity){
        getUniversityById(selectedUniversityId,{setUniversityName})
        setChanged(false)
    }
    },[selectedUniversityId,editUniversity])
  return (
    <>
    <Dialog open={editUniversity} onClose={handleCloseDialog} sx={{ '& .MuiDialog-paper': { 
        minWidth: {md:'500px'},
      }}}>
        <DialogTitle sx={{letterSpacing:1,display:'flex',alignItems:'center',justifyContent:'center'}}><EditIcon />Edit University</DialogTitle>
        <DialogContent sx={{display:'flex',flexDirection:'column'}}>
        <Box sx={{display:'flex',flexDirection:'column',my:1}}>
          <Typography variant='subtitle' sx={{textAlign:'start'}}>Name</Typography>
          <TextField
          value={universityName}
          onChange={(e)=>{setUniversityName(e.target.value);setChanged(true)}}
          InputProps={{
              startAdornment:(
                <InputAdornment position='start'>
                   <AccountBalanceIcon />
                </InputAdornment>
              )
            }}
            sx={{ '& .MuiInputBase-input': { height: '20px'}}}
          />
           </Box>
          <Box sx={{display:'flex',flexDirection:'column',my:1}}>
          <Typography variant='subtitle' sx={{textAlign:'start'}}>Added on</Typography>
          <TextField  
          type='date'
          value={today}
          disabled
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                 <EventIcon />
              </InputAdornment>
            )
          }}
          sx={{ '& .MuiInputBase-input': { height: '20px'}}}
          />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box sx={{width:'100%',display:'flex',alignItems:'center',gap:1,justifyContent:'center'}}>
            <Button variant='contained' sx={{width:'30%'}} disabled={!changed} onClick={()=>handleEditUniversity(selectedUniversityId,universityName)} >Save change</Button>
            <Button sx={{border:'1px solid #1976d2',width:'30%'}} onClick={handleCloseDialog}>Cancel</Button>
          </Box>
        </DialogActions>
      </Dialog>
       <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)} sx={{minWidth:'500px'}} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
       <Alert onClose={() => setSnackbarOpen(false)} severity={editSuccess ? 'success' : 'error'} sx={{ width: '100%' }}>
         {editSuccess?'University updated successfully':'Something went wrong'}
       </Alert>
     </Snackbar>
     </>
  )
}

export default EditUniversity
