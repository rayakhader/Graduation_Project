import React, { useEffect, useState } from 'react'
import { Box, InputAdornment, TextField, Typography,Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import { useSelectedCityId } from '../context/SelectedCityIdContext';
import { Snackbar, Alert } from '@mui/material';
import { useRefresh } from '../context/RefreshContext';
import getCityById from '../../../../../../API/city/getCityById';
import { useToken } from '../../../../../../globalContext/TokenContext';
import updateCity from '../../../../../../API/city/updateCity';

function EditDialog({editCity,setEditCity}) {
    const today = new Date().toISOString().split('T')[0]
    const[city,setCity]=useState('')
    const[changed,setChanged]=useState(false)
    const[creationDate,setCreationDate]=useState('')
    const{selectedCityId}=useSelectedCityId()
    const [editSuccess,setEditSuccess]=useState(false)
    const [snackbarOpen,setSnackbarOpen]=useState(false)
    const{refresh,setRefresh}=useRefresh()
    const{token}=useToken()
    const handleEditCity=(id,cityName)=>{
      updateCity(token,id,cityName,refresh,{setEditSuccess,setEditCity,setSnackbarOpen,setRefresh})
     }
     useEffect(()=>{
      if(selectedCityId && editCity){
        getCityById(selectedCityId,{setCity,setCreationDate})
        setChanged(false)
      }
     },[selectedCityId,editCity])
      const handleCloseDialog = ()=>{
        setEditCity(false)
        setChanged(false)
      }
  return (
    <>
    <Dialog open={editCity} onClose={handleCloseDialog} 
    sx={{ '& .MuiDialog-paper': { 
        minWidth: {md:'500px'},
      }}}
      >
        <DialogTitle sx={{letterSpacing:1,display:'flex',alignItems:'center',justifyContent:'center'}}><EditIcon />Edit city</DialogTitle>
        <DialogContent sx={{display:'flex',flexDirection:'column'}}>
        <Box sx={{display:'flex',flexDirection:'column',my:1}}>
          <Typography variant='subtitle' sx={{textAlign:'start'}}>Name</Typography>
          <TextField
          value={city}
          onChange={(e)=>{setCity(e.target.value);setChanged(true)}}
          InputProps={{
              startAdornment:(
                <InputAdornment position='start'>
                   <LocationCityIcon />
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
            <Button variant='contained' sx={{width:'30%'}} disabled={!changed} onClick={()=>handleEditCity(selectedCityId,city)} >Save change</Button>
            <Button sx={{border:'1px solid #1976d2',width:'30%'}} onClick={handleCloseDialog}>Cancel</Button>
          </Box>
        </DialogActions>
      </Dialog>
       <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)} sx={{minWidth:'500px'}} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
       <Alert onClose={() => setSnackbarOpen(false)} severity={editSuccess ? 'success' : 'error'} sx={{ width: '100%' }}>
         {editSuccess?'City updated successfully':'Something went wrong'}
       </Alert>
     </Snackbar>
     </>
  )
}

export default EditDialog
