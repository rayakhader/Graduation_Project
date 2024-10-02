import React, { useEffect, useState } from 'react'
import { TableCell, TableRow, Avatar, IconButton, Typography, Box } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import getUserStatus from '../../../../../API/suspend/getUserStatus';
import { useToken } from '../../../../../globalContext/TokenContext';

function CustomerItem({ customer, handleViewUser }) {
  const [userStatus, setUserStatus] = useState("")
  const { token } = useToken()

  useEffect(() => {
    if (Object.keys(customer).length !== 0) {
      getUserStatus(token, customer.id, { setUserStatus })
    }
  }, [customer])

  return (
    <TableRow>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={customer.imagePath} sx={{ width: 50, height: 50, marginRight: 1 }} />
          {customer.fullName}
        </Box>
      </TableCell>
      <TableCell>
        <Box variant='contained' sx={{ backgroundColor: '#e6f2f7', color: '#3176de', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', px: 1, borderRadius: '4px' }}>
          <Typography>Customer</Typography>
        </Box>
      </TableCell>
      <TableCell>{customer.cityName}</TableCell>
      <TableCell sx={{ color: userStatus === 'Active' ? '#4caf50' : 'orange' }}>
        {userStatus}
      </TableCell>
      <TableCell>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {customer.creationDate}
          <IconButton onClick={() => handleViewUser(customer.id)}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  )
}

export default CustomerItem
