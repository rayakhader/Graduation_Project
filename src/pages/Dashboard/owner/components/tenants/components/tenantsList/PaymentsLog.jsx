import { Box, Dialog, DialogContent, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import React from 'react'


function PaymentsLog({viewPayments,setViewPayments,contract}) {
   
  return (
   <Dialog open={viewPayments} onClose={()=>setViewPayments(false)}
   sx={{ '& .MuiDialog-paper': { minWidth: {md:'500px'} } }}
   >
    <DialogTitle>Payments</DialogTitle>
    <DialogContent>
    <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: '500px'}}>
    <TableContainer sx={{flexGrow: 1, overflow: 'auto',maxHeight:'350px'}}>
       <Table>
        <TableHead>
            <TableRow sx={{backgroundColor:'rgba(211,211,211,0.15)'}}>
                <TableCell>#</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {contract.paymentLogs?.length > 0 ? (contract.paymentLogs.map((payment,index)=>(
            <TableRow key={payment.id}>
                <TableCell>{index +1}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell sx={{color:'#4caf50'}}>{payment.amount}</TableCell>
            </TableRow>
            )) ): (<TableRow>
            <TableCell colSpan={3} sx={{ textAlign: 'center', color: 'gray'}}>No payments found</TableCell>
         </TableRow>)}
         </TableBody>
         </Table>
         </TableContainer>
         <TableContainer sx={{ maxHeight: 'none',border:'1px solid black'}}>
         <Table>
         <TableBody>
            <TableRow>
                <TableCell sx={{fontWeight:'bold'}}>Total</TableCell>
                <TableCell />
                <TableCell sx={{fontWeight:'bold'}}>{contract.totalPayments}</TableCell>
            </TableRow>
            <TableRow sx={{backgroundColor:'#FFE8C5'}}>
                <TableCell sx={{fontWeight:'bold'}}>Remaining</TableCell>
                <TableCell />
                <TableCell sx={{fontWeight:'bold'}}>{contract.remainingPayments}</TableCell>
            </TableRow>
            </TableBody>
            </Table>
        </TableContainer>
       </Box>
    </DialogContent>
   </Dialog>
  )
}

export default PaymentsLog
