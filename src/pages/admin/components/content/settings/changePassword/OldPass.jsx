import React, { useEffect, useState } from 'react'
import { Typography ,Box,TextField,InputAdornment,IconButton} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import inputStyle from './style/inputStyle';
import SuccessPass from './SuccessPass';
import passwordRules, { possibleError } from './passwordRules';
import { useSuccess } from './context/SuccessContext';
import { useOldPass } from './context/OldPassContext';
import { passwordValidation } from '../../../../../../validation/passwordValidation';
function OldPass() {
    const{oldPass,setOldPass,oldError}=useOldPass()
    const[showPassword,setShowPassword]=useState(false)
    const[oldPassError,setOldPassError]=useState('')
    const{success,setSuccess}=useSuccess()
    const[touched,setTouched]=useState(false)
    const togglePasswordVisibility=()=>{
        setShowPassword(!showPassword)
    }
    const [checked,setChecked]=useState([false,false,false,false])
    useEffect(()=>{
      const newChecked = passwordRules.map((rule)=>rule.validate(oldPass))
      setChecked(newChecked)
    },[oldPass])
    const handleOldPass=(e)=>{
      setTouched(true)
      setOldPass(e.target.value)
    }
    useEffect(()=>{
      const {tempErrors}=passwordValidation(oldPass)
      setOldPassError(tempErrors.password)
      if(oldPass!=='' &&oldPassError===''){
        setSuccess(success.map((input,index)=>index===0?true:input))
      }else if(oldPass===''){
        setTouched(false)
        setSuccess(success.map((input,index)=>index===0?false:input))
      }else if(oldPass!==''&& oldPassError!==''){
        setSuccess(success.map((input,index)=>index===0?false:input))
      } 
    },[oldPass,oldPassError])
  return (
    <Box sx={{ display: 'flex',flexDirection: 'column',width:{xs:'100%'}}}>
    <Typography sx={{textAlign:'start',display:'flex',alignItems:'center',gap:1}} variant="subtitle1">Old Password{success[0]===true &&<SuccessPass/>}</Typography>
    <TextField
    placeholder='Enter your old password'
    type={showPassword?'text':'password'}
   variant="outlined"
   value={oldPass}
   onChange={(e)=>handleOldPass(e)}
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
    error={!!oldError}
    helperText={oldError}
  />
  <Box component='ul' sx={{mt:2,display:touched &&!success[0] ?'block':'none',fontSize:'0.75rem'}}>
    {passwordRules.map((rule,index)=>(
    <li key={index} style={{color: oldPassError===possibleError[index]? '#d32f2f':'black',textDecoration:checked[index]?'line-through':'none'}}>{rule.text}</li>
    ))}
    </Box>
    </Box>
  )
}
export default OldPass
