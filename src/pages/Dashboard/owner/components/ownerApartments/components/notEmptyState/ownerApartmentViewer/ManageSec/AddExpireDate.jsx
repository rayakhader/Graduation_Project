import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useToken } from '../../../../../../../../../globalContext/TokenContext'
import addDiscountToApartmentsInApartmentsPage from '../../../../../../../../../API/discounts/addDiscountToApartmentInApartmentsPage'
import { useRefreshApartments } from './context/RefreshApartments'

function AddExpireDate({addExpireDate,setAddExpireDate,selectedDiscount,id,setSuccess}) {
    const[expireDate,setExpireDate]=useState('')
    const{token}=useToken()
    const{refreshAddDiscount,setRefreshAddDiscount}=useRefreshApartments()
    const handleAddDiscount =()=>{
        addDiscountToApartmentsInApartmentsPage(token,id,selectedDiscount,expireDate,refreshAddDiscount,{setRefreshAddDiscount,setSuccess})
    }
  return (
    <>
    <Dialog open={addExpireDate} onClose={()=>setAddExpireDate(false)}>
        <DialogTitle>
            Expire date
        </DialogTitle>
        <DialogContent>
            <TextField title='ExpireDate' type='date' value={expireDate} onChange={(e)=>setExpireDate(e.target.value)}/>
        </DialogContent>
        <DialogActions sx={{display:'flex',alignItems:'center',justifyContent:'center',p:1.5}}>
            <Button variant='contained' onClick={handleAddDiscount} disabled={expireDate===''}>Add</Button>
            <Button variant='outlined' onClick={()=>setAddExpireDate(false)}>Cancel</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default AddExpireDate
