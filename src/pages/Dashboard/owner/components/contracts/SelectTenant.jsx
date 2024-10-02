import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Radio from '@mui/material/Radio';
import getTenantsByOwnerId from '../../../../../API/tenants/getTenantsByOwnerId';
import { useToken } from '../../../../../globalContext/TokenContext';
import userIdFromToken from '../../../../../customHook/userIdFromToken';
import { useContractInfo } from './context/ContractInfo';
import { CircularProgress } from '@mui/material';

export default function StickyHeadTable({setValidation}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { token } = useToken();
  const [userId, setUserId] = React.useState('');
  const [tenantsList, setTenantsList] = React.useState([]);
  const {selectedTenant, setSelectedTenant} = useContractInfo()
  const[loading,setLoading]=React.useState(true)
  const [totalCount,setTotalCount]=React.useState(0)
  React.useEffect(() => {
    if(userId){
      setLoading(true)
      setPage(0)
      fetchTenants(0)
    }
  }, [userId]);

  React.useEffect(() => {
    if(token){
    userIdFromToken(token, setUserId);
    }
  }, [token]);
  React.useEffect(()=>{
    setValidation(selectedTenant!=='')
  },[selectedTenant])
  const fetchTenants =(page)=>{
    getTenantsByOwnerId(token, userId,page,rowsPerPage,'',{ setTenantsList,setTotalCount }).finally(()=>setLoading(false));
  }
  React.useEffect(()=>{
    if(userId){
      setLoading(true)
      fetchTenants(page)
    }
  },[page,rowsPerPage])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRadioChange = (tenantId) => {
    setSelectedTenant(tenantId);
  };

  return (
    <Paper sx={{ width: {xs:'100%',md:'60%'}, margin: 'auto', overflow: 'hidden', backgroundColor: 'rgba(211,211,211,0.13)' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>#</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? (tenantsList.length>0 ? tenantsList.map((tenant, index) => (
                <TableRow hover role="radio" tabIndex={-1} key={tenant.id}>
                  <TableCell >
                    <Radio
                      checked={selectedTenant === tenant.id}
                      onChange={() => handleRadioChange(tenant.id)}
                    />
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{tenant.firstName}</TableCell>
                  <TableCell>{tenant.lastName}</TableCell>
                  <TableCell>{tenant.phoneNumber}</TableCell>
                  <TableCell>{tenant.city?.name}</TableCell>
                  <TableCell>{tenant.note}</TableCell>
                </TableRow>
              )):(
                <TableRow>
                    <TableCell colSpan={7} sx={{ textAlign: 'center', color: 'gray'}}>
                        No tenants found
                    </TableCell>
                </TableRow>
            )) :( <TableRow>
              <TableCell colSpan={7} sx={{ textAlign: 'center' }}>
                <CircularProgress />
              </TableCell>
            </TableRow>)}
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
