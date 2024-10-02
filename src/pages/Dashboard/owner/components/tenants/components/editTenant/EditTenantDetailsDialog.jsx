import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomTextField from '../CustomTextField'
import EditIcon from '@mui/icons-material/Edit';
import NameFileds from './NameFileds';
import getTenantById from '../../../../../../../API/tenants/getTenantById';
import { useSelectedTenant } from './context/SelectedTenant';
import { useRefreshTenants } from '../../context/RefreshTenants';
import editTenantById from '../../../../../../../API/tenants/editTenantById';
import { useEditTenantInfo } from './context/EditTenantInfo';
import { useToken } from '../../../../../../../globalContext/TokenContext';
import PhoneCityFields from './PhoneCityFields';
function EditTenantDetailsDialog({success,setSuccess,editTenant,setEditTenant}) {
  const [tenantInfo,setTenantInfo]=useState({})
  const {setFirstName,setLastName,setPhone,setCityId,setNotes,firstName,lastName,phone,cityId,notes}=useEditTenantInfo()
  const {selectedTenant}=useSelectedTenant()
  const[changed,setChanged]=useState(false)
  const {refresh,setRefresh}=useRefreshTenants()
  const{token}=useToken()
  const [phoneNumberError,setPhoneNumberError]=useState('')
  const handleEditTenant=()=>{
    editTenantById(token,selectedTenant.id,firstName,lastName,phone,cityId,notes,refresh,{setRefresh,setSuccess,setChanged})
  }
  useEffect(()=>{
    if(editTenant && Object.keys(selectedTenant).length > 0){
    getTenantById(token,selectedTenant.id,{setTenantInfo,setFirstName,setLastName,setCityId,setPhone,setNotes,setChanged})
    }
  },[editTenant,selectedTenant])
  useEffect(()=>{
    if(phone){
      validatePhone(phone)
    }
  },[phone])
  const validatePhone = (phone) => {
    const trimmedPhone = phone.trim();
    const phoneNumberPattern = /^0\d{9}$/; 
    if (!phoneNumberPattern.test(trimmedPhone)) {
      setPhoneNumberError("Invalid phone number.");
    } else {
      setPhoneNumberError('');
    }
  };
  return (
    <>
    <Dialog open={editTenant} onClose={()=>{setEditTenant(false);setChanged(false)}} aria-labelledby={"title"} sx={{
        '& .MuiDialog-paper': { 
          maxWidth: '600px',
        }
      }}>
        <DialogTitle id={"title"} sx={{letterSpacing:1,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <EditIcon />Edit Tenant Details
        </DialogTitle>
        <DialogContent>
            <NameFileds setChanged={setChanged} />
            <PhoneCityFields setChanged={setChanged} phoneNumberError={phoneNumberError} />
            <CustomTextField label='Notes' value={notes} placeholder="Enter your Notes here" setValue={setNotes} type='text' multiline={true} rows={3} setChanged={setChanged}/>
        </DialogContent>
        <DialogActions>
            <Box sx={{display:'flex',gap:1,width:'100%',justifyContent:'center'}}>
                <Button color='primary' variant='contained' sx={{width:'30%'}} disabled={!changed || Boolean(phoneNumberError)} onClick={handleEditTenant}>Save change</Button>
                <Button sx={{border:'1px solid #1976d2',width:'30%'}} onClick={()=>{setEditTenant(false);setChanged(false)}} >Cancel</Button>
            </Box>
        </DialogActions>
      </Dialog>
      </>
  )
}
export default EditTenantDetailsDialog
