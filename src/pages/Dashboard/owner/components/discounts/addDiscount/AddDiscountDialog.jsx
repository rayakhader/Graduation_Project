import { Box, Button, Dialog, DialogActions, DialogContent, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import addDiscountToApartment from '../../../../../../API/discounts/addDiscountToApartment';
import AddDiscountPartOne from './AddDiscountPartOne';
import AddDiscountSuccess from './AddDiscountSuccess'
import AddDiscountFailed from './AddDiscountFailed'
import { useDiscountRefresh } from '../context/RefreshDiscounts';
import { useToken } from '../../../../../../globalContext/TokenContext';

function AddDiscountDialog({addDiscount,setAddDiscount,id,apartmentsList,setSuccess}) {
  const [selectedApartmentId,setSelectedApartmentId]=useState(null)
  const {token}=useToken()
  const handleSelectApartment = (id) => {
    setSelectedApartmentId(id);
  }; 
  const [added,setAdded]=useState(false)
  const [add,setAdd]=useState(false)
  const [error,setError]=useState('')
  const [expireDate,setExpireDate]=useState('')
  const{refresh,setRefresh}=useDiscountRefresh()
  useEffect(()=>{
    if(add){
    addDiscountToApartment(token,selectedApartmentId,id,expireDate,refresh,{setAddDiscount,setAdd,setAdded,setError,setRefresh,setSuccess})
    }
  },[add, token, selectedApartmentId, id, expireDate, refresh, setAddDiscount, setAdd, setAdded, setError, setRefresh])

  useEffect(()=>{
    setSelectedApartmentId(null)
    setExpireDate('')
  },[addDiscount])

return (
  <>
    <Dialog open={addDiscount} onClose={()=>setAddDiscount(false)} sx={{ '& .MuiDialog-paper': { 
        minWidth: {md:'500px'},
      }}}>
      <DialogContent>
        <Box>
        <Box sx={{width:'100%',display:'flex',alignItems:'center',borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
        <Typography variant='h6'>Select apartment</Typography>
      </Box>
        <Typography variant='body2' color='textSecondary' sx={{p:1.5}}>which apartment do you want to add discount to it?</Typography>
        </Box>
        <Box sx={{ maxHeight: '300px', overflowY: 'auto' }}>
        {apartmentsList.map((apartment)=>(
          <AddDiscountPartOne 
          key={apartment.id} 
          apartment={apartment} 
          selectedApartmentId={selectedApartmentId} 
          onSelectApartment={handleSelectApartment}
          />
        ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1.5, bottom: '20px', backgroundColor: 'white', zIndex: 1 }}>
            <Typography fontWeight='bold'>Expire Date</Typography>
            <TextField variant='standard' type='date' value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />
          </Box>
      </DialogContent>
      <DialogActions sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Button disabled={!selectedApartmentId || !expireDate} variant='outlined' onClick={()=>setAdd(true)}>Add</Button>
        <Button variant='contained' onClick={()=>setAddDiscount(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
    <AddDiscountSuccess  added={added} setAdded={setAdded}/>
    <AddDiscountFailed error={error} setError={setError} />
    </> 
  )
}
export default AddDiscountDialog
