import React from 'react'
import { TableRow, TableCell } from '@mui/material'

function FollowersListHeader() {
  return (
    <TableRow>
      <TableCell>Image</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Role</TableCell>
      <TableCell>Date</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  )
}

export default FollowersListHeader
