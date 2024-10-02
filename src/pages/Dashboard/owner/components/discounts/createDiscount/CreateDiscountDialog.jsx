import { Box, Button, Dialog, DialogActions, DialogContent, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDiscountInfo} from './context/DiscountInfo'
import { useToken } from '../../../../../../globalContext/TokenContext'
import createDiscount from '../../../../../../API/discounts/CreateDiscount'
import { useDiscountRefresh } from '../context/RefreshDiscounts'
import CreateSuccess from './CreateSuccess'

function CreateDiscountDialog({createNewDiscount,setCreateNewDiscount}) {
  const {amount,setAmount,description,setDescription}=useDiscountInfo()
  const[create,setCreate]=useState(false)
  const[created,setCreated]=useState(false)
  const {token}=useToken()
  const {refresh,setRefresh}=useDiscountRefresh()
  const allFieldsFilled= amount && description
  useEffect(()=>{
    if(create){
     createDiscount(token,description,amount,refresh,{setRefresh,setCreate,setCreateNewDiscount,setCreated})
    }
  },[create])
  useEffect(()=>{
    if(createNewDiscount){
      setAmount('')
      setDescription('')
    }
  },[createNewDiscount])
  return (
    <>
    <Dialog open={createNewDiscount} onClose={()=>setCreateNewDiscount(true)} sx={{ '& .MuiDialog-paper': { 
        minWidth: {md:'500px'},
      }}}>
      <DialogContent>
      <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
       <Typography variant='h6'>Create Discount</Typography>
      </Box>
      <Box sx={{p:1.5}}>
        <Typography >Discount amount</Typography>
        <TextField placeholder='Enter discount rate' value={amount} onChange={(e)=>setAmount(e.target.value)} type='number' sx={{width:'100%'}} InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>,
      }}/>
      </Box>
      <Box sx={{p:1.5}}>
        <Typography >Description</Typography>
        <TextField value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Add a description for your offer' multiline minRows={3} sx={{width:'100%'}}/>
        </Box>
      </DialogContent>
      <DialogActions sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button variant='contained' onClick={()=>setCreate(true)} disabled={!allFieldsFilled}>Create</Button>
        <Button variant='outlined' onClick={()=>setCreateNewDiscount(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
    <CreateSuccess created={created} setCreated={setCreated} />
   </>
  )
}

export default CreateDiscountDialog
