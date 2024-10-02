import React from 'react'
import {Card, Typography } from '@mui/material'
import ChangePassword from './changePassword/ChangePassword'

function ChangePasswordContainer() {
  return (
    <Card sx={{p:2.5}}>
    <Typography variant='h6' textAlign='start' px={1.5} >Change Paswword</Typography>
    <Typography variant='body2' color='textSecondary'p={1.5}>You can change password, Ensure your account's security by updating your password regularly </Typography>
    <ChangePassword />
  </Card>
  )
}

export default ChangePasswordContainer
