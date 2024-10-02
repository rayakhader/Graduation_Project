import React from 'react'
import { TableRow, TableCell } from '@mui/material'

function UsersListHeader() {
  return (
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Role</TableCell>
      <TableCell>City</TableCell>
      <TableCell>Status</TableCell>
      <TableCell>Enrolled</TableCell>
    </TableRow>
  )
}

export default UsersListHeader
