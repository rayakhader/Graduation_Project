import { Alert, Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import React from 'react'
import { useSignup } from '../context/SignupContext'

function SignupHandleErrors() {
  const {signupError,setSignupError,signupSuccess,openDialog,setOpenDialog}=useSignup()
  return (
    <div>
         {signupError && <Alert severity="error" onClose={() => setSignupError(false)}>Account already exists. Try another email or log in.</Alert>}
                              {signupSuccess && <Dialog
                                  open={openDialog}
                                  onClose={() => setOpenDialog(false)}>
                                  <DialogTitle>Registration successful! Please check your email inbox.</DialogTitle>
                                  <DialogActions>
                                      <Button onClick={() => setOpenDialog(false)}>OK</Button>
                                  </DialogActions>
                              </Dialog>}
    </div>
  )
}

export default SignupHandleErrors
