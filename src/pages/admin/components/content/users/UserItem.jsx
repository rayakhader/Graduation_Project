import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TableCell, TableRow, Avatar, IconButton, Typography, Box } from '@mui/material'
import getUserStatus from '../../../../../API/suspend/getUserStatus';
import { useToken } from '../../../../../globalContext/TokenContext';

function UserItem({ user, handleViewUser }) {
  const [userStatus, setUserStatus] = useState("")
  const { token } = useToken()

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      getUserStatus(token, user.id, { setUserStatus })
    }
  }, [user])

  return (
    <TableRow>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={user.imagePath} sx={{ width: 50, height: 50, marginRight: 1 }} />
          {user.fullName}
        </Box>
      </TableCell>
      <TableCell>
        {user.roleName === 'Customer' &&
          <Box sx={{ backgroundColor: '#e6f2f7', color: '#3176de', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', px: 1, borderRadius: '4px' }}>
            <Typography>Customer</Typography>
          </Box>}
        {user.roleName === 'Owner' &&
          <Box sx={{ backgroundColor: '#f9e3f5', color: '#ed5fc7', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', px: 1, borderRadius: '4px' }}>
            <Typography>Owner</Typography>
          </Box>}
        {user.roleName === 'Admin' &&
          <Box sx={{ backgroundColor: '#ccf2f2', color: '#00AEAE', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', px: 1, borderRadius: '4px' }}>
            <Typography>Admin</Typography>
          </Box>}
      </TableCell>
      <TableCell>{user.cityName}</TableCell>
      <TableCell sx={{ color: userStatus === 'Active' ? '#4caf50' : 'orange' }}>
        {userStatus}
      </TableCell>
      <TableCell>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {user.creationDate}
          <IconButton onClick={() => handleViewUser(user.id)}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  )
}

export default UserItem
