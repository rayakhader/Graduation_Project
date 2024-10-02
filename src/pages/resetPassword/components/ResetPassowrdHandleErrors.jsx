import { Alert } from '@mui/material'
import React from 'react'
import { useResetPassword } from '../context/ResetPasswordContext'

function ResetPassowrdHandleErrors() {
    const {resetPassword}=useResetPassword()
  return (
    <div>
    {resetPassword&&<Alert severity='success'>Password reset successfully.</Alert>}

    </div>
  )
}

export default ResetPassowrdHandleErrors
