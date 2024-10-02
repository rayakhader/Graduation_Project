import React, { useState } from 'react'
import {  Box, Grid, Typography,Button, Alert } from '@mui/material'
import NewPass from './NewPass';
import OldPass from './OldPass';
import ConfirmPass from './ConfirmPass';
import { useNewPass } from './context/NewPassContext';
import { useOldPass } from './context/OldPassContext';
import { useConfirmPass } from './context/ConfirmNewPass';
import { useSuccess } from './context/SuccessContext';
import { useToken } from '../../../../../../globalContext/TokenContext';
import changePasswordAPI from '../../../../../../API/Identity/changePasswordAPI';
function ChangePassword() {
  const[showAlert, setShowAlert]=useState(false)
  const {newPass,setNewPass}=useNewPass()
  const {oldPass,setOldError,setOldPass}=useOldPass()
  const {confirmNewPass,setConfirmNewPass}=useConfirmPass()
  const{success,setSuccess}=useSuccess()
  const{token}=useToken()
  const handleChangePass=()=>{
    changePasswordAPI(oldPass,newPass,confirmNewPass,token,{setOldError,setShowAlert,setOldPass,setNewPass,setConfirmNewPass,setSuccess})
  }
  return (
    <Grid container item sx={{width:{xs:'100%',md:'50%'},color:'black',p:1.5,display:'flex',flexDirection:'column',gap:2}} >
        <OldPass />
        <NewPass />
        <ConfirmPass />
        <Box sx={{width:'100%'}}>
          <Button variant='contained' color='primary' sx={{width:{xs:'100%'}}} onClick={handleChangePass} disabled={!success[0]||!success[1]||!success[2]}>Change Password</Button>
          {showAlert && (
        <Alert 
          onClose={() => setShowAlert(false)} 
          severity="success" 
          sx={{ mt: 2,width:'100%' }} 
        >
          Your password has been successfully updated.
        </Alert>
      )}
        </Box>
    </Grid>
  )
}
export default ChangePassword
