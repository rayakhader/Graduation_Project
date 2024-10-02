import { Dialog, DialogActions, DialogContent,Button, TextField, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import EventIcon from '@mui/icons-material/Event';
import LocationCity from '@mui/icons-material/LocationCity';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import getCityById from '../../../../../API/city/getCityById';

function AddUniversitySuccessDialog({university,cityId,setUniversity,setCityId,addUniversitySuccess,setAddUniversitySuccess}) {
 const [city,setCity]=useState('')
 const [creationDate,setCreationDate] =useState('')
  useEffect(()=>{
    if(cityId){
    getCityById(cityId,{setCity,setCreationDate})
    }
  },[cityId,university])
  const handleClose = ()=>{
    setAddUniversitySuccess(false)
    setUniversity('')
    setCityId('')
  }
  return (
    <Dialog
      open={addUniversitySuccess}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ '& .MuiDialog-paper': { 
        minWidth: '500px',
      }}}
    >
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 1,
            p: 1.5,
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main',width:'100%',alignItems:'center',display:'flex',justifyContent:'center' }} /> {/* The true icon */}
          <Typography variant='h6'>University added successfully</Typography>
         <Box sx={{width:'100%',display:'flex',borderRadius:'4px',my:1.5,flexWrap:'wrap',justifyContent:'center',backgroundColor:'rgba(211,211,211,0.15)',textAlign:'center',p:2,alignItems:'center'}}>
          <Typography>University</Typography>
          <TextField value={university} disabled InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                 <AccountBalanceIcon />
              </InputAdornment>
            )
          }} 
          sx={{maxWidth:'150px','& .MuiInputBase-input': { height: '10px'},p:1}}
          
          />
          <Typography>adds successfully on</Typography>
          <TextField value={creationDate} disabled 
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                 <EventIcon />
              </InputAdornment>
            )
          }} 
          sx={{maxWidth:'200px','& .MuiInputBase-input': { height: '10px'},p:1,}}
          />
          <Typography> to the city of </Typography>
          <TextField value={city} disabled
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                 <LocationCity />
              </InputAdornment>
            )
          }} 
          sx={{maxWidth:'150px','& .MuiInputBase-input': { height: '10px'},p:1}}
          />
        </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',p:1.5}}>
        <Button sx={{width:'50%'}} variant='contained' color='success' onClick={handleClose} autoFocus>
          Ok
        </Button>
        </Box>
      </DialogActions>
    </Dialog>
  )
}
export default AddUniversitySuccessDialog
