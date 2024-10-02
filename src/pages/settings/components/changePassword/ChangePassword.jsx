import React, { useState } from 'react'
import {  Box, Grid, Typography,Button, Alert } from '@mui/material'
import NewPass from './NewPass';
import OldPass from './OldPass';
import ConfirmPass from './ConfirmPass';
import { useNewPass } from './context/NewPassContext';
import { useOldPass } from './context/OldPassContext';
import { useConfirmPass } from './context/ConfirmNewPass';
import { useSuccess } from './context/SuccessContext';
import { useToken } from '../../../../globalContext/TokenContext';
import changePasswordAPI from '../../../../API/Identity/changePasswordAPI';
function ChangePassword() {
  const[showAlert, setShowAlert]=useState(false)
  const {newPass,setNewPass}=useNewPass()
  const {oldPass,setOldPass,setOldError}=useOldPass()
  const {confirmNewPass,setConfirmNewPass}=useConfirmPass()
  const{success,setSuccess}=useSuccess()
  const{token}=useToken()
  const handleChangePass=(event)=>{
    event.preventDefault();
    changePasswordAPI(oldPass,newPass,confirmNewPass,token,{setOldError,setShowAlert,setOldPass,setNewPass,setConfirmNewPass,setSuccess})
  }
  return (
    <Grid container item sx={{width:{xs:'100%',md:'70%'},color:'black',p:2,display:'flex',flexDirection:'column',gap:2}} >
        <Typography variant='h6' sx={{textAlign:'start',p:1}}>Password</Typography>
        <form onSubmit={handleChangePass} style={{ width: '100%' }}>
        <OldPass />
        <NewPass />
        <ConfirmPass />
        <Box sx={{width:'100%',p:1}}>
          <Button variant='contained' type='submit' color='primary' sx={{width:{xs:'100%',md:'50%'}}} disabled={!success[0]||!success[1]||!success[2]}>Change Password</Button>
          {showAlert && (
        <Alert 
          onClose={() => setShowAlert(false)} 
          severity="success" 
          sx={{ mt: 2,width:'50%' }} 
        >
          Your password has been successfully updated.
        </Alert>
      )}
        </Box>
        </form>
    </Grid>
  )
}
export default ChangePassword
