import React from 'react'
import { Avatar, IconButton, TableCell, TableRow, Typography, Box } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

function FollowerItem({ follower }) {
  const navigate = useNavigate()

  const handleViewProfile = () => {
    const path = `/profile/${follower.id}`;
    navigate(path);
  }

  return (
    <TableRow>
      <TableCell><Avatar sx={{ height: 50, width: 50, boxShadow: 2 }} src={follower.imagePath} /></TableCell>
      <TableCell><Typography>{follower.fullName}</Typography></TableCell>
      <TableCell>
        <Box variant='contained' sx={{
          backgroundColor: follower.roleName === 'Owner' ? '#f9e3f5' : '#e6f2f7',
          color: follower.roleName === 'Owner' ? '#ed5fc7' : '#3176de',
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', px: 1, borderRadius: '4px'
        }}>
          <Typography>{follower.roleName}</Typography>
        </Box>
      </TableCell>
      <TableCell><Typography variant='body2' color='textSecondary'>{follower.creationDate}</Typography></TableCell>
      <TableCell>
        <IconButton onClick={handleViewProfile}><MoreVertIcon /></IconButton>
      </TableCell>
    </TableRow>
  )
}

export default FollowerItem
