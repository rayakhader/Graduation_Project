import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { useNavigation } from '../../../customHook/useNavigation'
import { useDialog } from '../context/DialogContext'

function GuestDialog() {
  const{clickLogin,clickSignup}=useNavigation()
  const {openDialog,setOpenDialog}=useDialog()
  const handleCloseDialog = (event) => {
    setOpenDialog(false);
  };
  return (
    <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Access Restricted"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            To see the owner information, please log in or sign up if you don't have an account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={clickSignup} color="primary">
            Sign Up
          </Button>
          <Button onClick={clickLogin} color="primary" autoFocus>
            Login
          </Button>
          <Button onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
  )
}

export default GuestDialog
