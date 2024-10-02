import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import getNumberOfApartments from '../../../../../../API/apartments/getNumberOfApartments'
import suspendUser from '../../../../../../API/suspend/suspendUser'
import { useToken } from '../../../../../../globalContext/TokenContext'
import Error from './Error'
import SuspensionNotice from './SuspensionNotice'

function SuspendOwner({suspend,setSuspend,selectedApartmentId,ownerInfo,selectedOption,otherReason}) {
    const[apartmentsNum,setApartmentsNum]=useState('')
    const[enterDate,setEnterDate]=useState(false)
    const[expiredDate,setExpiredDate]=useState('')
    const[suspended,setSuspended]=useState(false)
    const[error,setError]=useState('')
    const {token}=useToken()
    useEffect(()=>{
        if(ownerInfo && ownerInfo.id){
        getNumberOfApartments(token,ownerInfo.id,{setApartmentsNum})
        }
    },[ownerInfo])
    const handleSuspend= ()=>{
         suspendUser(token,ownerInfo.id,selectedApartmentId,expiredDate,selectedOption==='other'?otherReason:selectedOption,{setSuspended,setSuspend,setError})
    }
    useEffect(()=>{
        if(suspend){
            setEnterDate(false)
            setExpiredDate('')
        }
    },[suspend])
  return (
    <>
   <Dialog open={suspend} onClose={()=>setSuspend(false)} sx={{'& .MuiDialog-paper': { 
    maxWidth: '400px',
  }
   }}>
    <DialogTitle>
        <Typography variant='Body2'>Do you want to suspend the owner?</Typography>
        <Box sx={{display:'flex',my:1,alignItems:'center',justifyContent:'space-around',boxShadow:1,py:1.5,borderRadius:'4px',border:'1px solid rgba(211,211,211,1)'}}>
        <Avatar src={ownerInfo.imagePath} sx={{height:100,width:100}}/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
            <Typography variant='h6' textAlign='start' >{ownerInfo.fullName}</Typography>
            <Typography variant='body2'>Owned {apartmentsNum} apartments</Typography>
        </Box>
        </Box>
    </DialogTitle>
   {!enterDate && <DialogActions sx={{display:'flex',justifyContent:'center',alignItems:'center',p:1.5}}>
        <Button variant='contained'  onClick={()=>setEnterDate(true)}>Yes</Button>
        <Button variant='outlined' onClick={()=>setSuspend(false)}>No</Button>
    </DialogActions>}
    {enterDate &&
     <DialogContent sx={{display:'flex',flexDirection:'column',gap:3}}>
        <Box sx={{display:'flex',alignItems:'center',gap:1.5}}>
        <Typography color='textsecondary' fontWeight='bold'>Suspend until</Typography>
        <TextField type='date' variant='standard' value={expiredDate} onChange={(e)=>setExpiredDate(e.target.value)} />
        </Box>
        <DialogActions sx={{display:'flex',justifyContent:'center',alignItems:'center',p:0,m:0}}>
            <Button color='error' variant='contained' onClick={handleSuspend} disabled={!expiredDate}>Suspend</Button>
            <Button  variant='outlined' onClick={()=>setSuspend(false)}>Cancel</Button>
        </DialogActions>
    </DialogContent>
    }
   </Dialog>
   <SuspensionNotice suspended={suspended} setSuspended={setSuspended} expiredDate={expiredDate} />
   <Error error={error} setError={setError}/>
   </>
  )
}

export default SuspendOwner
