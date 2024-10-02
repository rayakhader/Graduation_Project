import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import getPaymnetsByContractId from '../../../../../API/payments/getPaymentsByContractId';
import getContractById from '../../../../../API/contracts/getContractById';
import { useToken } from '../../../../../globalContext/TokenContext';
import { useRefreshPayments } from './context/RefreshPayments';
import getSumOfPayments from '../../../../../API/payments/getSumOfPayments';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewContract({viewContract,setViewContract,selectedContract,selectedIndex}) {
  const[payments,setPayments]=React.useState([])
  const[contractInfo,setContractInfo]=React.useState({})
  const[total,setTotal]=React.useState('')
  const {token}=useToken()
  const{refreshPayments}=useRefreshPayments()
  React.useEffect(()=>{
    if(selectedContract){
      getContractById(token,selectedContract,{setContractInfo})
      getPaymnetsByContractId(token,selectedContract,{setPayments})
      getSumOfPayments(token,selectedContract,{setTotal})
    }
  },[selectedContract,refreshPayments])

  const handleClose = () => {
    setViewContract(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={viewContract}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ flex: 1 }} variant="h6" component="div">
              Contract #{selectedIndex+1}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{p:3}}>
            <Typography variant='h6' textAlign='start'>Contract #{selectedIndex+1}</Typography>
            <Box sx={{display:'flex',gap:0.5,alignItems:'center'}}>
            <Typography variant='body2' color='textSecondary'>Tenant name:</Typography>
            <Typography variant='body2' color='textSecondary'>{contractInfo.tenantName}</Typography>
            </Box>
            <Box sx={{display:'flex',gap:0.5,alignItems:'center'}}>
            <Typography variant='body2' color='textSecondary'>Price:</Typography>
            <Typography variant='body2' color='textSecondary'>{contractInfo.rentPrice} {contractInfo.currency?.name}</Typography>
            </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: '500px', px: 3 }}>
          <TableContainer sx={{ flexGrow: 1, overflow: 'auto',maxHeight:'350px' }}>
            <Table>
              <TableBody>
                {payments.length > 0 ? payments.map((payment, index) => (
                  <TableRow key={payment.id}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Payment #{index + 1}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell sx={{ color: '#4caf50' }}>{payment.amount}</TableCell>
                  </TableRow>
                )) : (
                  <TableRow sx={{ p: 3 }}>
                    <TableCell colSpan={3} sx={{ textAlign: 'center', color: 'gray' }}>No payments found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer sx={{ maxHeight: 'none' }}>
            <Table>
              <TableBody>
                <TableRow sx={{ backgroundColor: 'rgba(211,211,211,0.15)', boxShadow: 2 }}>
                  <TableCell sx={{ fontSize: '20px', fontWeight: 'bold' }}>Total</TableCell>
                  <TableCell />
                  <TableCell sx={{ fontSize: '20px', fontWeight: 'bold' }}>{total}</TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: '#FFE8C5', boxShadow: 2 }}>
                  <TableCell sx={{ fontSize: '20px', fontWeight: 'bold' }}>Remaining</TableCell>
                  <TableCell />
                  <TableCell sx={{ fontSize: '20px', fontWeight: 'bold' }}>{contractInfo.remainingPayments}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
