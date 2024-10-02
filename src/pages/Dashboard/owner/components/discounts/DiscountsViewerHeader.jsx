import React from 'react'
import { TableRow, TableCell } from '@mui/material'

function DiscountsViewerHeader() {
  return (
    <TableRow>
      <TableCell>Amount</TableCell>
      <TableCell>Apartments</TableCell>
      <TableCell>Creation date</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  )
}

export default DiscountsViewerHeader
