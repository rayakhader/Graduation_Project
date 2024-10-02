import { Box, Button, Card, CardContent, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import usePassword from '../customHook/usePassword';
import { useNavigation } from '../../../customHook/useNavigation';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import ResetPassowrdHandleErrors from './ResetPassowrdHandleErrors';
import { useTogglePasswordVisibility } from '../customHook/useTogglePasswordVisibility';
import { useShowPassword } from '../context/ShowPasswordContext';
import { useResetPassword } from '../context/ResetPasswordContext';
import resetPasswordAPI from '../../../API/Identity/resetPasswordAPI';

function ResetPasswordForm({email,token}) {
    const {clickLogin}=useNavigation()
    const{showPassword}=useShowPassword()
    const {setResetPassword}=useResetPassword()
    const {togglePasswordVisibility}=useTogglePasswordVisibility()
    const {handleChange,values,errors}=usePassword()
    
    const handleSubmit = async (event) => {
        event.preventDefault(); 
          resetPasswordAPI(values.password,values.confirmPassword,email,token,{setResetPassword,clickLogin})
      }
  return (
    <Box sx={{  width: '100%',
    maxWidth: '500px', 
    margin: 'auto',  
    }}>
       <Card variant="outlined" sx={{ minWidth: 275, boxShadow: 10,borderRadius:'10px' }}>
         <CardContent>
           <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
             Reset Password
           </Typography>
           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
           <TextField
             margin="normal"
             fullWidth
             name="password"
             label="New Password"
             type={showPassword?'text':'password'}
             id="newpassword"
             autoComplete="current-password"
             value={values.password}
             onChange={(e) => handleChange(e)}
             InputProps={{
               endAdornment: (
                 <InputAdornment position="end">
                   <IconButton
                     aria-label="toggle password visibility"
                     onClick={togglePasswordVisibility}
                     edge="end"
                   >
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                   </IconButton>
                 </InputAdornment>
               ),
               startAdornment: (
                 <InputAdornment position='start' sx={{mr:1}}>
                   <LockIcon />
                 </InputAdornment>
               ),
             }}
             error={!!errors.password}
             helperText={errors.password}
           />
           <TextField
             margin="normal"
             fullWidth
             name="confirmPassword"
             label="Confirm Password"
             type='password'
             id="confirmpassword"
             autoComplete="current-password"
             value={values.confirmPassword}
             onChange={(e) => handleChange(e)}
             error={!!errors.confirmPassword}
             helperText={errors.confirmPassword}
             InputProps={{
               startAdornment: (
                 <InputAdornment position='start' sx={{mr:1}}>
                   <LockIcon />
                 </InputAdornment>
               ),
             }}
           />
             <Button
               disabled={!values.password||!values.confirmPassword||errors.password!==''||errors.confirmPassword!==''}
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2, backgroundColor: '#1976d2' }}
             >
                Reset new Password
             </Button>
             <ResetPassowrdHandleErrors />
           </Box>
         </CardContent>
       </Card>
     </Box>
  )
}
export default ResetPasswordForm
