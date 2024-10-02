import React, { useEffect, useState } from 'react'
import { Box,  InputAdornment, TextField, Typography,Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EventIcon from '@mui/icons-material/Event';
import AddIcon from '@mui/icons-material/Add';
import { Snackbar, Alert } from '@mui/material';
import { useRefresh } from '../context/RefreshContext';
import { useToken } from '../../../../../../globalContext/TokenContext';
import addNewCity from '../../../../../../API/city/addNewCity';

function AddDialog({addCity,setAddCity}) {
    const today = new Date().toISOString().split('T')[0]
    const [cityName,setCityName]=useState('')
    const [addSuccess,setAddSuccess]=useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const {refresh,setRefresh}=useRefresh()
    const {token}=useToken()
    const handleAddCity= ()=>{
        if(cityName!==''){
        addNewCity(token,cityName,refresh,{setAddSuccess,setSnackbarOpen,setAddCity,setRefresh})}
     }
     useEffect(()=>{
      if(addCity){
        setCityName('')
      }
     },[addCity])
  return (
    <>
    <Dialog open={addCity} onClose={()=>setAddCity(false)}
     sx={{ '& .MuiDialog-paper': { 
        minWidth: {md:'500px'},
      }}}
      >
        <DialogTitle sx={{letterSpacing:1,display:'flex',alignItems:'center',justifyContent:'center'}}><AddIcon />Add new city</DialogTitle>
        <DialogContent sx={{display:'flex',flexDirection:'column'}}>
        <Box sx={{display:'flex',flexDirection:'column',my:1}}>
          <Typography variant='subtitle' sx={{textAlign:'start'}}>Name</Typography>
          <TextField
          placeholder='City name'
          value={cityName}
          onChange={(e)=>setCityName(e.target.value)}
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
          disabled
          value={today}
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
            <Button variant='contained' disabled={!cityName} sx={{width:'30%'}} onClick={handleAddCity}>Add</Button>
            <Button sx={{border:'1px solid #1976d2',width:'30%'}} onClick={()=>setAddCity(false)}>Cancel</Button>
          </Box>
        </DialogActions>
      </Dialog>
       <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)} sx={{minWidth:'500px'}} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
       <Alert onClose={() => setSnackbarOpen(false)} severity={addSuccess ? 'success' : 'error'} sx={{ width: '100%' }}>
         {addSuccess?'City added successfully':'City is already exist'}
       </Alert>
     </Snackbar>
     </>
  )
}

export default AddDialog
