import React, { useEffect, useState } from 'react'
import { TableCell, TableRow, Avatar, IconButton, Tooltip, Badge, Box } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import getApartmentImagesById from '../../../../../API/apartments/getApartmentImagesById';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
import getUserByIdProfile from '../../../../../API/users/getUserByIdProfile';
import ConfirmUnsuspend from './ConfirmUnsuspend';

function SuspendedUserItem({ item, handleViewUser }) {
  const [userInfo, setUserInfo] = useState({})
  const [images, setImages] = useState([])
  const [confirmUnsuspend, setConfirmUnsuspend] = useState(false)

  useEffect(() => {
    if (item.apartmentId && item.userId) {
      getUserByIdProfile(item.userId, { setUserInfo })
      getApartmentImagesById(item.apartmentId, { setImages })
    }
  }, [item])

  const handleUnsuspendUser = (id) => {
    setConfirmUnsuspend(true)
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={userInfo.imagePath} sx={{ width: 50, height: 50, marginRight: 1 }} />
            {userInfo.fullName}
          </Box>
        </TableCell>
        <TableCell>
          <Avatar src={images[0]?.imagePath} sx={{ width: 80, height: 80, borderRadius: 0 }} />
        </TableCell>
        <TableCell>{item.startDate}</TableCell>
        <TableCell>{item.endDate}</TableCell>
        <TableCell>{item.reason}</TableCell>
        <TableCell>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => handleUnsuspendUser(userInfo.id)}>
              <Tooltip title="Unsuspend User">
                <Badge
                  badgeContent={<LockOpenIcon style={{ fontSize: 20, color: 'lightgreen' }} />}
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <PersonIcon style={{ fontSize: 30 }} />
                </Badge>
              </Tooltip>
            </IconButton>
            <IconButton onClick={() => handleViewUser(userInfo.id)}><MoreVertIcon /></IconButton>
          </Box>
        </TableCell>
      </TableRow>
      <ConfirmUnsuspend confirmUnsuspend={confirmUnsuspend} setConfirmUnsuspend={setConfirmUnsuspend} userId={userInfo.id} />
    </>
  )
}

export default SuspendedUserItem
