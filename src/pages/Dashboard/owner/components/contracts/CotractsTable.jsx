import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Contract from './Contract';
import { useSelectedContract } from './context/SelectedContract';
import { useSelectedIndex } from './context/SelectedIndex';

export default function StickyHeadTable({setSuccess,contracts,page,rowsPerPage,handleChangePage,handleChangeRowsPerPage,totalCount}) {
  const {selectedContract, setSelectedContract} = useSelectedContract()
  const {selectedIndex,setSelectedIndex}=useSelectedIndex()
  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell />
            <TableCell>#</TableCell>
            <TableCell>Tenant name</TableCell>
            <TableCell>Apartment</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Start date</TableCell>
            <TableCell>End date</TableCell>
            <TableCell>Rent price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contracts.map((contract,index) => {
                  return (
                  <Contract key={contract.id} setSuccess={setSuccess} contract={contract} index={index} selectedContract={selectedContract} setSelectedContract={setSelectedContract} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/> 
                  );
                })}
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
    </>
  );
}

