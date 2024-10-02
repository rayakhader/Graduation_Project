import React from 'react'
import { TableRow, TableCell } from '@mui/material'

function ApartmentListHeader() {
  return (
    <TableRow>
      <TableCell>Image</TableCell>
      <TableCell>City</TableCell>
      <TableCell>University</TableCell>
      <TableCell>Price</TableCell>
      <TableCell>Status</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  )
}

export default ApartmentListHeader
