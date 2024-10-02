import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Check from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ViewContract from './ViewContract';
import AddPayment from './AddPayment';

function Contract({setSuccess,contract,index,selectedContract,setSelectedContract,selectedIndex,setSelectedIndex}) {
    const [openAddPayment ,setOpenAddPayment]=useState(false)
    const [viewContract, setViewContract] = React.useState(false);
    const handleOpenAddPayment = (id,event) => {
        event.stopPropagation();
        setSelectedContract(id);
        setOpenAddPayment(true);
      };
      const handleViewContract = (id,index) => {
        setSelectedContract(id);
        setSelectedIndex(index)
        setViewContract(true);
      };
  return (
    <>
    <TableRow hover role="checkbox" sx={{backgroundColor:contract.isTerminated?'#E0FBE2':'white'}} tabIndex={-1} key={contract.id} onClick={()=>handleViewContract(contract.id,index)}>
    <TableCell>
      {contract.isTerminated?<IconButton  sx={{
cursor: 'default !important',
'&:hover': {
backgroundColor: 'transparent'
}
}}><Check sx={{color:'green'}} /></IconButton>
      :<IconButton sx={{backgroundColor:'#1976d2'}}  onClick={(event) => handleOpenAddPayment(contract.id,event)}>
        <AddIcon sx={{color:'white'}} />
      </IconButton>}
    </TableCell>
    <TableCell>{index+1}</TableCell>
    <TableCell>{contract.tenantName}</TableCell>
    <TableCell>
      <IconButton component={Link} to={`/home/apartment/${contract.apartmentId}`}>
        <ArrowForwardIcon />
      </IconButton>
    </TableCell>
    <TableCell>{contract.type}</TableCell>
    <TableCell>{contract.startDate}</TableCell>
    <TableCell>{contract.endDate}</TableCell>
    <TableCell>{contract.rentPrice} {contract.currency?.name}</TableCell>
  </TableRow>
  <ViewContract viewContract={viewContract} setViewContract={setViewContract} selectedContract={selectedContract} selectedIndex={selectedIndex} />
  <AddPayment setSuccess={setSuccess} openAddPayment={openAddPayment} setOpenAddPayment={setOpenAddPayment} selectedContract={selectedContract}/>
  </>
  )
}

export default Contract
