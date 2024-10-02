import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import { Button, DialogActions } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning'; 

function SuspensionNotice({suspended,setSuspended,expiredDate}) {
  return (
    <Dialog
    open={suspended}
    onClose={() => setSuspended(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Suspension Notice"}
    </DialogTitle>
    <DialogContent>
      <Typography id="alert-dialog-description" sx={{ display: 'flex', alignItems: 'center', gap: 2 ,p:1.5}}>
        <WarningIcon color="error" />
        You have currently suspended this owner.
      </Typography>
      <Typography p={1.5} color='textSecondary'>Note: He can't add new Apartment until {expiredDate}</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setSuspended(false)} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
  )
}
export default SuspensionNotice
