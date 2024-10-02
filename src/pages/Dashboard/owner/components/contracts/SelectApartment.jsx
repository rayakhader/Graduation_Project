import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useToken } from '../../../../../globalContext/TokenContext';
import userIdFromToken from '../../../../../customHook/userIdFromToken';
import getApartmentsByOwnerIdForContracts from '../../../../../API/apartments/getApartmentsByOwnerIdForContracts';
import Apartment from './Apartment'
import { useContractInfo } from './context/ContractInfo';
import Empty from '../ownerApartments/components/notEmptyState/ownerApartmentViewer/Empty';
import { Box, CircularProgress } from '@mui/material';
export default function StickyHeadTable({setValidation}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [apartments,setApartments]=React.useState([])
  const[loading,setLoading]=React.useState(true)
  const {selectedApartment,setSelectedApartment}=useContractInfo()
  const {token}=useToken()
  const [userId,setUserId]=React.useState('')
  React.useEffect(()=>{
    setLoading(true)
    userIdFromToken(token,setUserId)
  },[token])
  React.useEffect(()=>{
    setLoading(true)
    if(userId){
    getApartmentsByOwnerIdForContracts(userId,{setApartments}).finally(()=>setLoading(false))
    }
  },[userId])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    setValidation(selectedApartment !== '');
  }, [selectedApartment]);

  return (
    <Paper sx={{width:{xs:'100%',md:'60%'},margin:'auto', overflow: 'hidden',backgroundColor:'rgba(211,211,211,0.13)' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>#</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>University</TableCell>
              <TableCell>Building</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? (apartments.length>0 ?apartments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((apartment,index) => (
                <Apartment key={apartment.id} apartment={apartment} index={index} selectedApartment={selectedApartment} setSelectedApartment={setSelectedApartment} />
                )
              ):(
                <TableRow>
                    <TableCell colSpan={8} sx={{ textAlign: 'center', color: 'gray'}}>
                        No apartments found
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={apartments.length}
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
