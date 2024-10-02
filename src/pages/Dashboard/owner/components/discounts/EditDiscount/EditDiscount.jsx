import { Box, Button, Dialog, DialogActions, DialogContent, InputAdornment, TextField, Typography } from '@mui/material'
import getDiscountById from '../../../../../../API/discounts/getDiscountById'
import React, { useEffect, useState } from 'react'
import updateDiscount from '../../../../../../API/discounts/updateDiscount'
import { useToken } from '../../../../../../globalContext/TokenContext'
import { useDiscountRefresh } from '../context/RefreshDiscounts'

function EditDiscount({editDiscount,setEditDiscount,id,setSuccess}) {
    const [amount,setAmount]=useState('')
    const [description,setDescription]=useState('')
    const [changed,setChanged]=useState(false)
    const{token}=useToken()
    const {refresh,setRefresh}=useDiscountRefresh()
    useEffect(()=>{
        if(id && editDiscount){
            getDiscountById(id,{setAmount,setDescription,setChanged})
        }
    },[id,editDiscount])
    const handleEdit =(id)=>{
        updateDiscount(token,id,description,amount,refresh,{setRefresh,setSuccess})
    }
  return (
    <Dialog open={editDiscount} onClose={()=>setEditDiscount(true)} sx={{ '& .MuiDialog-paper': { 
        minWidth: {md:'500px'},
      }}}>
      <DialogContent>
      <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
       <Typography variant='h6'>Edit Discount</Typography>
      </Box>
      <Box sx={{p:1.5}}>
        <Typography >Discount amount</Typography>
        <TextField placeholder='Enter discount rate' value={amount} onChange={(e)=>{setAmount(e.target.value);setChanged(true)}} type='number' sx={{width:'100%'}} InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>,
      }}/>
      </Box>
      <Box sx={{p:1.5}}>
        <Typography >Description</Typography>
        <TextField value={description} onChange={(e)=>{setDescription(e.target.value);setChanged(true)}} placeholder='Add a description for your offer' multiline minRows={3} sx={{width:'100%'}}/>
        </Box>
      </DialogContent>
      <DialogActions sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button variant='contained' onClick={()=>handleEdit(id)} disabled={!changed}>Save changes</Button>
        <Button variant='outlined' onClick={()=>setEditDiscount(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditDiscount
