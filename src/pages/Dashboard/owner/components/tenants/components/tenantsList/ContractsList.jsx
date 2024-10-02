import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ContractItem from './ContractItem';

function ContractsList({contracts,open}) {
  return (
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, maxHeight: 200, overflow: 'auto'  }}>
              <Typography variant="h6" gutterBottom component="div">
                Contracts
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow sx={{backgroundColor:'rgba(211,211,211,0.15)'}}>
                    <TableCell />
                    <TableCell>#</TableCell>
                    <TableCell>Apartment</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>End Date</TableCell>
                    <TableCell>Rent Price</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contracts.length!==0 ?contracts.map((contract,index) => (
                    <ContractItem key={contract.id} contract={contract} index={index} />
                  )): (<TableRow >
                        <TableCell colSpan={9} sx={{ textAlign: 'center', color: 'gray'}}>No contracts yet</TableCell>
                     </TableRow>)}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
  )
}

export default ContractsList
