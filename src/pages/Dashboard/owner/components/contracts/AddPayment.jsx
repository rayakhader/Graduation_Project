import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import addPaymentToContract from '../../../../../API/payments/addPaymentToContract';
import { useRefreshPayments } from './context/RefreshPayments';
import { useToken } from '../../../../../globalContext/TokenContext';
import AddPaymentError from './AddPaymentError';
function AddPayment({setSuccess,openAddPayment,setOpenAddPayment,selectedContract}) {
    const today = new Date().toISOString().split('T')[0]
    const [paymentAmount, setPaymentAmount] = useState('');
    const [paymentDate, setPaymentDate] = useState(today);
    const [addSuccess,setAddSuccess]=useState(false)
    const[error,setError]=useState('')
    const{refreshPayments,setRefreshPayments}=useRefreshPayments()
    const [isAmountValid, setIsAmountValid] = useState(true);
    const{token}=useToken()
    const handleCloseAddPayment = () => {
        setOpenAddPayment(false);
      };
      const handleAddPayment = () => {
        addPaymentToContract(token,selectedContract,paymentAmount,refreshPayments,{setRefreshPayments,setOpenAddPayment,setAddSuccess,setPaymentAmount,setSuccess,setError})
      };
      useEffect(()=>{
        if(paymentAmount){
          setIsAmountValid(paymentAmount>0)
        }
      },[paymentAmount])
      useEffect(()=>{
        if(openAddPayment){
          setPaymentAmount('')
        }
      },[openAddPayment])
  return (
    <>
    <Dialog open={openAddPayment} onClose={handleCloseAddPayment}>
        <DialogTitle>Add Payment</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{mb:2}}>
            Please enter the payment details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Payment Date"
            type="date"
            fullWidth
            value={paymentDate}
            disabled
            // onChange={(e) => setPaymentDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Payment Amount"
            type="number"
            fullWidth
            error={paymentAmount!==''&& !isAmountValid}
            helperText={!isAmountValid ? 'Payment amount cannot be negative or zero' : ''}
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{p:1.5,dispaly:'flex',alignItems:'center',justifyContent:'center'}}>
          <Button variant='contained' onClick={handleAddPayment}  disabled={!isAmountValid || paymentAmount === ''}>Add Payment</Button>
          <Button variant='outlined'onClick={handleCloseAddPayment}>Cancel</Button>
        </DialogActions>
      </Dialog>
      {/* <AddPaymentSuccess addSuccess={addSuccess} setAddSuccess={setAddSuccess} /> */}
      <AddPaymentError error={error} setError={setError} />
      </>
  )
}

export default AddPayment
