import { Alert } from '@mui/material'
import React from 'react'
import { useLogin } from '../context/LoginContext'

function LoginHandleErrors() {
  const {showAlert,loginError,setLoginError}=useLogin()
  return (
    <div>
       {showAlert && <Alert severity="success">Login Successfully</Alert>}
       {loginError && <Alert severity="error" onClose={() => {setLoginError(false)}}>Incorrect email or password.</Alert>}
    </div>
  )
}
export default LoginHandleErrors
