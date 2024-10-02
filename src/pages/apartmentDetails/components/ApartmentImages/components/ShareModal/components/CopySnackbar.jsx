import React from 'react'
import { useCopySnackbar } from '../context/CopySnackbarContext'
import { IconButton, Snackbar, SnackbarContent } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import { green } from '@mui/material/colors';

function CopySnackbar() {
  const {openSnackbar,setOpenSnackbar} =useCopySnackbar()
  return (
    <>
    {openSnackbar &&<Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <SnackbarContent
          message={
            <span id="client-snackbar" style={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon style={{ color: green[600], marginRight: '8px'}} />
              Copied to clipboard
            </span>
          }
          action={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={() => setOpenSnackbar(false)}>
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>}
      </>
  )
}
export default CopySnackbar
