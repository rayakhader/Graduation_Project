import React, { useEffect, useState } from 'react'
import {Typography ,Box,TextField,InputAdornment,IconButton} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import inputStyle from './style/inputStyle';
import { useNewPass } from './context/NewPassContext';
import SuccessPass from './SuccessPass';
import { useSuccess } from './context/SuccessContext';
import { useConfirmPass } from './context/ConfirmNewPass';
import { confirmPasswordValidation } from '../../../../validation/confirmPasswordValidation';

function ConfirmPass() {
    const{newPass}=useNewPass()
    const{confirmNewPass,setConfirmNewPass}=useConfirmPass('')
    const[showPassword,setShowPassword]=useState(false)
    const togglePasswordVisibility=()=>{
        setShowPassword(!showPassword)
    }
    const [error,setError]=useState('')
    const{success,setSuccess}=useSuccess()

    useEffect(()=>{
      if(confirmNewPass!==''){
      const{tempErrors}=confirmPasswordValidation(newPass,confirmNewPass)
      setError(tempErrors.confirmPassword)
      if(error===''){
        setSuccess(success.map((input,index)=>index===2?true:input))
      }else{
        setSuccess(success.map((input,index)=>index===2?false:input))
      }
    }
      else{
        setError('')
        setSuccess(success.map((input,index)=>index===2?false:input))
      }
    },[confirmNewPass,newPass,error])

  return (
    <Box sx={{ display: 'flex',flexDirection: 'column',width:{xs:'100%',md:'50%'},p:1}}>
    <Typography sx={{textAlign:'start',display:'flex',alignItems:'center',gap:1}} variant="subtitle1">Confirm Password{success[2]===true &&<SuccessPass/>}</Typography>
    <TextField
   placeholder='Re enter your new password'
   type={showPassword?'text':'password'}
   variant="outlined"
   value={confirmNewPass}
   onChange={(e)=>setConfirmNewPass(e.target.value)}
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
    ),}}
    sx={inputStyle}
    error={!!error}
    helperText={error}
    autoComplete='off'
  />
    </Box>
  )
}
export default ConfirmPass
