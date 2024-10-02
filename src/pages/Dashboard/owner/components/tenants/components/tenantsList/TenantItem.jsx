import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ContractsList from './ContractsList';
import { Button } from '@mui/material';
import EditTenantDetailsDialog from '../editTenant/EditTenantDetailsDialog';
import { useSelectedTenant } from '../editTenant/context/SelectedTenant';
function Row(props) {
  const { success,setSuccess,tenant } = props;
  const [open, setOpen] = React.useState(false);
  const [editTenant, setEditTenant] = React.useState(false);
  const {setSelectedTenant}=useSelectedTenant()
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {tenant.firstName}
        </TableCell>
        <TableCell component="th" scope="row">
          {tenant.lastName}
        </TableCell>
        <TableCell >{tenant.phoneNumber}</TableCell>
        <TableCell >{tenant.city?.name}</TableCell>
        <TableCell >{tenant.note}</TableCell>
        <TableCell>
          <Button onClick={()=>{setSelectedTenant(tenant);setEditTenant(true)}} variant='contained' sx={{textTransform:'none'}}>Edit</Button>
        </TableCell>
      </TableRow>
      <TableRow sx={{}}>
        <ContractsList contracts= {tenant.contracts} open={open} />
      </TableRow>
      <EditTenantDetailsDialog success={success} setSuccess={setSuccess} editTenant={editTenant} setEditTenant={setEditTenant}/>
    </React.Fragment>
  );
}
export default Row