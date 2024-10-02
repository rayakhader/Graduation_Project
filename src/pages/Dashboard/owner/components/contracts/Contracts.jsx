import { Box, Button, Grid, Typography, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useExpanded } from '../../../context/ExpandedSidebar'
import AddIcon from '@mui/icons-material/Add';
import StickyHeadTable from './CotractsTable';
import AddContract from './AddContract';
import getContractsByOwnerId from '../../../../../API/contracts/getContractsByOwnerId';
import { useToken } from '../../../../../globalContext/TokenContext';
import userIdFromToken from '../../../../../customHook/userIdFromToken';
import { useRefreshContracts } from './context/RefreshContracts';
import { useRefreshPayments } from './context/RefreshPayments';
import Success from './Success';

function Contracts() {
    const {expanded}=useExpanded()
    const [contracts,setContracts]=useState([])
    const [addContract,setAddContract]=useState(false)
    const [userId,setUserId]=useState('')
    const {token}=useToken()
    const [loading,setLoading]=useState(true)
    const {refreshContracts}=useRefreshContracts()
    const {refreshPayments}=useRefreshPayments()
    const[success,setSuccess]=useState(false)
    const[page,setPage]=useState(0)
    const[rowsPerPage,setRowsPerPage]=useState(10)
    const[totalCount,setTotalCount]=useState(0)
    useEffect(()=>{
      if(userId){
      setLoading(true)
      setPage(0)
      fetchContracts(0)
      }
    },[userId,refreshContracts,refreshPayments])
    useEffect(()=>{
      if(token){
        userIdFromToken(token,setUserId)
      }
    },[token])
    const fetchContracts = (page)=>{
      getContractsByOwnerId(token,userId,page,rowsPerPage,{setContracts,setTotalCount}).finally(()=>setLoading(false))
    }
    useEffect(()=>{
      if(userId){
      setLoading(true)
      fetchContracts(page)
      }
    },[page,rowsPerPage])
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  return (
    <Grid container item  xs={expanded?8:10.5} sm={expanded?8:10.9} md={expanded?9:11.3} lg={expanded?10:11.55} sx={{px:2,color:'black'}}>
      <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',my:2,borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
    <Box sx={{display:'flex',alignItems:'center'}}>
    <Typography variant='h6'>Contracts</Typography>
    <Typography color="textSecondary">({contracts.length})</Typography>
    </Box>
    <Box>
      <Button color='primary' variant='contained' onClick={()=>setAddContract(true)} startIcon={<AddIcon />}>Add Contract</Button>
    </Box>
    </Box>
    <Grid item container sx={{backgroundColor:'rgba(211,211,211,0.15)',borderRadius:'20px',px:1.5,py:3}} xs={12}>
    {loading ? (
          <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        ) : (
          contracts.length === 0 ? (
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',p:10}}>
            <Typography variant="h6" sx={{ width: '100%', textAlign: 'center', mt: 2 }}>No contracts found</Typography>
        </Box>
          ) : (
            <StickyHeadTable contracts={contracts} success={success} setSuccess={setSuccess} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} totalCount={totalCount} />
          )
        )}
    </Grid>
    {addContract&& <AddContract addContract={addContract} setAddContract={setAddContract} />}
    {success && <Success label='Successfully added!' success={success} setSuccess={setSuccess}/>}  {/* // for payments */}
    </Grid>
  )
}

export default Contracts
