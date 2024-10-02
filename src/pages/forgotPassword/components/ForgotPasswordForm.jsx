import { Box, Button, Card, CardContent, InputAdornment, TextField, Typography, Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import ForgetPasswordHandleErrors from './ForgotPasswordHandleErrors'
import useEmail from '../customHook/useEmail';
import EmailIcon from '@mui/icons-material/Email';
import { useForget } from '../context/ForgotPasswordContext';
import forgotPassword from '../../../API/Identity/sendEmailAPI';

function ForgetPasswordForm() {
    const {handleChange,values,errors} = useEmail()
    const {emailSent,setEmailSent,setOpenSnackbar,setCountDown,setSendEmailError}=useForget()
    const sendEmail= async(e)=>{
        e.preventDefault();
        forgotPassword(values.email,{setEmailSent,setOpenSnackbar,setCountDown,setSendEmailError})
}
  return (
    <Box sx={{
        width: '100%', 
        maxWidth: '500px',
        margin: 'auto', 
   }}>
       <Card variant="outlined" sx={{ minWidth: 400, boxShadow: 10,borderRadius:'10px' }}>
         <CardContent>
           <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
             Forgot Password
           </Typography>
           <Box component="form" onSubmit={sendEmail} noValidate sx={{ mt: 1 }}>
            <TextField
               margin="normal"
               fullWidth
               name="email"
               label="Email"
               type="email"
               id="email"
               autoComplete="email"
               value={values.email}
               onChange={(e) => handleChange(e)}
               error={!!errors.email}
               helperText={errors.email}
               InputProps={{
                 startAdornment: (
                   <InputAdornment sx={{mr:1}} position='start'>
                     <EmailIcon />
                   </InputAdornment>
                 ),
               }}
             />
             
             <Typography component="p" sx={{mt:2}}>
                 Remembered your password? 
                 <MuiLink component={RouterLink} to='/login'>Log in</MuiLink>
               </Typography>
             <Button
               type="submit"
               fullWidth
               variant="contained"
               disabled={emailSent ||!values.email||errors.email!==''}
               sx={{ mt: 2,mb:2, backgroundColor: '#1976d2'}}
             >
               Send Password reset link
             </Button>
             <ForgetPasswordHandleErrors />
           </Box>
         </CardContent>
       </Card>
     </Box>
  )
}
export default ForgetPasswordForm
