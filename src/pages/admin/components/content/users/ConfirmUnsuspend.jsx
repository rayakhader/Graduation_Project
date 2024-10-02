import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import unsuspendUser from '../../../../../API/suspend/unsuspendUser'
import { useSuspendedUsers } from './context/refreshSuspendedUsers'
import { useToken } from '../../../../../globalContext/TokenContext'

function ConfirmUnsuspend({confirmUnsuspend,setConfirmUnsuspend,userId}) {
    const{refresh,setRefresh}=useSuspendedUsers()
    const{token}=useToken()
    const handleUnsuspend = (id)=>{
        unsuspendUser(token,id,refresh,{setRefresh})
    }
  return (
    <Dialog open={confirmUnsuspend} onClose={()=>setConfirmUnsuspend(false)}>
        <DialogTitle>Confirm Unsuspend</DialogTitle>
        <DialogContent>
            <Typography variant='body2' color='textSecondary'>Are you sure you want to unsusped this user? </Typography>
        </DialogContent>
        <DialogActions sx={{display:'flex',alignItems:'center',justifyContent:'center',p:1.5}}>
            <Button variant='contained' onClick={()=>handleUnsuspend(userId)}>Confirm</Button>
            <Button variant='outlined' onClick={()=>setConfirmUnsuspend(false)}>Cancel</Button>
        </DialogActions>

    </Dialog>
  )
}

export default ConfirmUnsuspend
