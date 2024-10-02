import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from './TenantItem';
import { TablePagination } from '@mui/material';
export default function CollapsibleTable({success,setSuccess,filteredTenants,tenantsList, page,rowsPerPage, handleChangePage,handleChangeRowsPerPage,totalCount}) {
  return (
    <Paper sx={{width:'100%'}} >
    <TableContainer component={Paper} sx={{maxHeight:440}}>
      <Table stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenantsList.map((tenant) => (
            <Row key={tenant.id} success={success} setSuccess={setSuccess} tenant={tenant} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
    rowsPerPageOptions={[3,5,10,25]}
    component="div"
    count={totalCount}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    sx={{
      display: 'flex',
      justifyContent: 'flex-end', 
      '.MuiTablePagination-toolbar': {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap', 
      },
      '.MuiTablePagination-spacer': {
        flex: '0 1 auto', 
      },
      '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
        margin: '0 10px', 
      },
    }}
  />
  </Paper>
  );
}
