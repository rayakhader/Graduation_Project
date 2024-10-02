import React from 'react'
import { Snackbar,Alert, Typography} from '@mui/material';
import { useForget } from '../context/ForgotPasswordContext';
import { Link as RouterLink } from 'react-router-dom';

function ForgetPasswordHandleErrors() {
  const {countDown,emailSent,openSnackbar,setOpenSnackbar,sendEmailError,setSendEmailError}=useForget()
  return (
    <div>
    {emailSent && <Typography sx={{textAlign: 'center' }} component="p">
    Didn't receive the email?
    <Typography component="p">Resend email in {countDown}s</Typography> 
    </Typography>
    }   
   {emailSent && <Snackbar
   open={openSnackbar}
   autoHideDuration={6000}
   onClose={() => setOpenSnackbar(false)}
   message="Email sent successfully,Please check your inbox."
   anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
   />}
   {sendEmailError&&
   <Alert severity="error"
   onClose={() => {setSendEmailError(false)}}
   >
   Incorrect email. If you don't have an account, you can {' '} <RouterLink to="/signup" style={{ textDecoration: 'underline', color: 'inherit' }}>
   Sign up here.
   </RouterLink>
   </Alert>}
   </div>
  )
}
export default ForgetPasswordHandleErrors
