import { Dialog, DialogContent } from '@mui/material'
import React from 'react'
import { IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import { red } from '@mui/material/colors';

function AddUniversityErrorDialog({addUniversityError,setAddUniversityError}) {
  return (
    <Dialog open={Boolean(addUniversityError)} onClose={() => setAddUniversityError(false)} sx={{
      '& .MuiDialog-paper': { 
        minWidth: '400px',
        minHeight: '200px',
        padding: '20px',
        position: 'relative' 
      }
    }}>
      <IconButton onClick={() => setAddUniversityError(false)} sx={{ position: 'absolute', top: 8, right: 8 }}>
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <IconButton sx={{ mb: 2 }}>
        <ErrorIcon sx={{ fontSize: 40, color: red[500] }} />
        </IconButton>
        <Typography variant='h5' sx={{textAlign: 'center',mb:2 }}>Sorry, Something went wrong!</Typography>
        <Typography variant='body2' color='textSecondary' sx={{ textAlign: 'center' }}>
          {addUniversityError}
        </Typography>
      </DialogContent>
    </Dialog>
  )
}

export default AddUniversityErrorDialog
