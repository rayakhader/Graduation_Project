import React, { useEffect, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CustomTextField from '../CustomTextField';
import NameFields from './NameFields';
import addNewTenant from '../../../../../../../API/tenants/addNewTenant';
import { useToken } from '../../../../../../../globalContext/TokenContext';
import AddSuccess from './AddSuccess';
import { useRefreshTenants } from '../../context/RefreshTenants';
import { useAddTenantInfo } from './context/AddTenantInfo';
import PhoneCityFields from './PhoneCityFields';
import resetField from './resetField';

function AddTenantDialog({ createTenant, setCreateTenant }) {
  const { firstName, lastName, phone, setPhone, setFirstName, setLastName, city, setCity, notes, setNotes } = useAddTenantInfo();
  const { token } = useToken();
  const [added, setAdded] = useState(false);
  const { refresh, setRefresh } = useRefreshTenants();
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const handleAddTenant = () => {
    addNewTenant(token, firstName, lastName, phone, city, notes, refresh, { setAdded, setCreateTenant, setRefresh, setFirstName, setLastName, setPhone, setCity, setNotes });
  };
  useEffect(() => {
    if (phone) {
      validatePhone(phone);
    }
  }, [phone]);
  const validatePhone = (phone) => {
    const trimmedPhone = phone.trim();
    const phoneNumberPattern = /^0\d{9}$/;
    if (!phoneNumberPattern.test(trimmedPhone)) {
      setPhoneNumberError("Invalid phone number.");
    } else {
      setPhoneNumberError('');
    }
  };
  useEffect(()=>{
    if(createTenant){
    resetField(setFirstName,setLastName,setPhone,setCity,setNotes)
    }
  },[createTenant])
  const [changed, setChanged] = useState(false);
  const allFieldsFilled = firstName && lastName && phone && city && notes;
  return (
    <>
      <Dialog open={createTenant} onClose={() => { setCreateTenant(false) }} aria-labelledby="form-dialog-title" sx={{
        '& .MuiDialog-paper': {
          maxWidth: '600px',
        }
      }}>
        <DialogTitle id="form-dialog-title" sx={{ letterSpacing: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><AddIcon />Add new Tenant</DialogTitle>
        <DialogContent>
          <NameFields setChanged={setChanged} />
          <PhoneCityFields phone={phone} setPhone={setPhone} city={city} setCity={setCity} phoneNumberError={phoneNumberError} setChanged={setChanged} />
          <CustomTextField label='Notes' value={notes} placeholder="Enter your Notes here" setValue={setNotes} type='text' multiline={true} rows={3} setChanged={setChanged} />
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: 'flex', gap: 1, width: '100%', justifyContent: 'center' }}>
            <Button color='primary' variant='contained' sx={{ width: '30%' }} onClick={handleAddTenant}
              disabled={!allFieldsFilled || Boolean(phoneNumberError)}
            >Add</Button>
            <Button sx={{ border: '1px solid #1976d2', width: '30%' }} onClick={() => setCreateTenant(false)} >Cancel</Button>
          </Box>
        </DialogActions>
      </Dialog>
      <AddSuccess added={added} setAdded={setAdded} />
    </>
  )
}

export default AddTenantDialog
