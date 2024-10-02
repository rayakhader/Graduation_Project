import React, { useEffect, useState } from 'react'
import { Typography ,Box,TextField,InputAdornment,IconButton} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import inputStyle from './style/inputStyle';
import { useNewPass } from './context/NewPassContext';
import { passwordValidation } from '../../../../validation/passwordValidation';
import SuccessPass from './SuccessPass';
import passwordRules, { possibleError } from './passwordRules';
import { useSuccess } from './context/SuccessContext';

function NewPass() {
    const{newPass,setNewPass}=useNewPass()
    const[showPassword,setShowPassword]=useState(false)
    const[newPassError,setNewPassError]=useState('')
    const{success,setSuccess}=useSuccess()
    const[touched,setTouched]=useState(false)
    const togglePasswordVisibility=()=>{
        setShowPassword(!showPassword)
    }

    const handleNewPass=(e)=>{
      setTouched(true)
      setNewPass(e.target.value)
    }
    const [checked,setChecked]=useState([false,false,false,false])
    useEffect(()=>{
      const newChecked = passwordRules.map((rule)=>rule.validate(newPass))
      setChecked(newChecked)
    },[newPass])
    useEffect(()=>{
      const {tempErrors}=passwordValidation(newPass)
      setNewPassError(tempErrors.password)
      if(newPass!=='' &&newPassError===''){
        setSuccess(success.map((input,index)=>index===1?true:input))
      }else if(newPass===''){
        setTouched(false)
        setSuccess(success.map((input,index)=>index===1?false:input))
      }else if(newPass!==''&& newPassError!==''){
        setSuccess(success.map((input,index)=>index===1?false:input))
      }
    },[newPass,newPassError])

  return (
    <Box sx={{ display: 'flex',flexDirection: 'column',width:{xs:'100%',md:'50%'},p:1}}>
    <Typography sx={{textAlign:'start',display:'flex',alignItems:'center',gap:1}} variant="subtitle1">New Password{success[1]===true &&<SuccessPass/>}</Typography>
    <TextField
   placeholder='Enter your new password'
   type={showPassword?'text':'password'}
   variant="outlined"
   value={newPass}
   onChange={(e)=>handleNewPass(e)}
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
    autoComplete='off'
  />
   <Box component='ul' sx={{mt:2,display:touched &&!success[1] ?'block':'none',fontSize:'0.75rem'}}>
   {passwordRules.map((rule,index)=>(
    <li key={index} style={{color: newPassError===possibleError[index]? '#d32f2f':'black',textDecoration:checked[index]?'line-through':'none'}}>{rule.text}</li>
    ))}
  </Box>
    </Box>
  )
}
export default NewPass
