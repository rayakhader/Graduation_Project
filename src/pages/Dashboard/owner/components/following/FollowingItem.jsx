import React from 'react'
import { Avatar, Button, IconButton, TableCell, TableRow, Typography, Box } from '@mui/material'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useToken } from '../../../../../globalContext/TokenContext';
import unfollowOwner from '../../../../../API/follow/unfollowOwner';
import { useFollowingRefresh } from './context/FollowingRefresh';
import { useNavigate } from 'react-router-dom';

function FollowingItem({ following }) {
  const { token } = useToken()
  const { refresh, setRefresh } = useFollowingRefresh()
  const navigate = useNavigate()

  const handleUnfollow = () => {
    if (following.id) {
      unfollowOwner(token, following.id).finally(() => {
        setRefresh(!refresh)
      })
    }
  }

  const handleViewProfile = () => {
    const path = `/profile/${following.id}`;
    navigate(path);
  }

  return (
    <TableRow>
      <TableCell><Avatar sx={{ height: 50, width: 50, boxShadow: 2 }} src={following.imagePath} /></TableCell>
      <TableCell><Typography>{following.fullName}</Typography></TableCell>
      <TableCell>
        <Box variant='contained' sx={{
          backgroundColor: following.roleName === 'Owner' ? '#f9e3f5' : '#e6f2f7',
          color: following.roleName === 'Owner' ? '#ed5fc7' : '#3176de',
          display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', px: 1, borderRadius: '4px'
        }}>
          <Typography>{following.roleName}</Typography>
        </Box>
      </TableCell>
      <TableCell><Typography variant='body2' color='textSecondary'>{following.creationDate}</Typography></TableCell>
      <TableCell>
        <Button variant='outlined' onClick={handleUnfollow} color='error' startIcon={<PersonRemoveIcon />} sx={{ textTransform: 'none' }}>Unfollow</Button>
        <IconButton onClick={handleViewProfile}><MoreVertIcon /></IconButton>
      </TableCell>
    </TableRow>
  )
}

export default FollowingItem
