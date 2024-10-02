import React, { useEffect, useState } from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button, IconButton } from '@mui/material';
import PaymentsLog from './PaymentsLog';
import getPaymnetsByContractId from '../../../../../../../API/payments/getPaymentsByContractId';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import Check from '@mui/icons-material/Check';
import { styled, keyframes } from '@mui/system';
import { useToken } from '../../../../../../../globalContext/TokenContext';

function ContractItem({contract,index}) {
    const[viewPayments,setViewPayments]=useState(false)
    const[payments,setPayments]=useState([])
    const{token}=useToken()
    useEffect(()=>{
      if(contract){
        getPaymnetsByContractId(token,contract.id,{setPayments})
      }
    },[contract])
    const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
    const AnimatedHourglass = styled(HourglassEmptyIcon)(({ theme }) => ({
      animation: `${spin} 2s linear infinite`,
      color: 'red',
    }));
  return (
    <>
    <TableRow key={contract.id}>
    <TableCell>
      {contract.isTerminated? <IconButton  sx={{
  cursor: 'default !important',
  '&:hover': {
    backgroundColor: 'transparent'
  }
}}><Check sx={{color:'green'}} /></IconButton>: <AnimatedHourglass /> }
    </TableCell>
    <TableCell component="th" scope="row">
      {index+1}
    </TableCell>
    <TableCell>
      <IconButton component={Link} to={`/home/apartment/${contract.apartmentId}`}>
        <ArrowForwardIcon />
      </IconButton>
    </TableCell>
    <TableCell>{contract.type}</TableCell>
    <TableCell>{contract.startDate}</TableCell>
    <TableCell>{contract.endDate}</TableCell>
    <TableCell>{contract.rentPrice} {contract.currency?.name}</TableCell>
    <TableCell sx={{color:contract.isTerminated?'#4caf50':'error.main'}}>{contract.isTerminated ? "All Payments Received" :'Pending Payments'}</TableCell>
    <TableCell>
      <Button onClick={()=>setViewPayments(true)} variant='contained' sx={{textTransform:'none'}}>View</Button>
    </TableCell>
  </TableRow>
  {viewPayments&& <PaymentsLog viewPayments={viewPayments} setViewPayments={setViewPayments} contract={contract}/>}
  </>
  )
}

export default ContractItem
