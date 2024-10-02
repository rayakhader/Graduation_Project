import React, { useEffect, useState } from 'react'
import { TableCell, TableRow, Avatar, IconButton, Typography, Box } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import getUserStatus from '../../../../../API/suspend/getUserStatus';
import { useToken } from '../../../../../globalContext/TokenContext';

function OwnerItem({ owner, handleViewUser }) {
  const [userStatus, setUserStatus] = useState("")
  const { token } = useToken()

  useEffect(() => {
    if (Object.keys(owner).length !== 0) {
      getUserStatus(token, owner.id, { setUserStatus })
    }
  }, [owner])

  return (
    <TableRow>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={owner.imagePath} sx={{ width: 50, height: 50, marginRight: 1 }} />
          {owner.fullName}
        </Box>
      </TableCell>
      <TableCell>
        <Box variant='contained' sx={{ backgroundColor: '#f9e3f5', color: '#ed5fc7', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', px: 1, borderRadius: '4px' }}>
          <Typography>Owner</Typography>
        </Box>
      </TableCell>
      <TableCell>{owner.cityName}</TableCell>
      <TableCell sx={{ color: userStatus === 'Active' ? '#4caf50' : 'orange' }}>
        {userStatus}
      </TableCell>
      <TableCell>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {owner.creationDate}
          <IconButton onClick={() => handleViewUser(owner.id)}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  )
}

export default OwnerItem
