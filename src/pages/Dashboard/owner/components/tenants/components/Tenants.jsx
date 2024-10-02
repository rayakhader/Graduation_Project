import React, { useEffect, useState } from 'react'
import {Box, Grid, Typography, CircularProgress } from '@mui/material'
import {useExpanded} from '../../../../context/ExpandedSidebar'
import HeaderSec from './HeaderSec';
import HeaderOfTenantsList from './HeaderOfTenantsList';
import { useToken } from '../../../../../../globalContext/TokenContext';
import getTenantsByOwnerId from '../../../../../../API/tenants/getTenantsByOwnerId';
import userIdFromToken from '../../../../../../customHook/userIdFromToken';
import { useRefreshTenants } from '../context/RefreshTenants';
import CollapsibleTable from './tenantsList/TenantsList';
import Success from './Success';

function Tenants() {
  const {expanded}=useExpanded()
  const [tenantsList,setTenantsList] =useState([]) 
  const {token}=useToken()
  const [userId,setUserId]=useState('')
  const [loading,setLoading]=useState(true)
  const {refresh}=useRefreshTenants()
  const[success,setSuccess]=useState(false)
  const[rowsPerPage,setRowsPerPage]=useState(10)
  const [page, setPage] = React.useState(0);
  const[totalCount,setTotalCount]=useState(0)
  const[tenantName,setTenantName]=useState('')

  useEffect(()=>{
    if(token){
      userIdFromToken(token,setUserId)
    }
  },[token])
  useEffect(()=>{
      if(userId){
      setLoading(true)
      setPage(0)
      fetchTenants(0)
      }
  },[userId,refresh])
  const fetchTenants = (page)=>{
    getTenantsByOwnerId(token,userId,page,rowsPerPage,tenantName,{setTenantsList,setTotalCount}).finally(()=>setLoading(false))
  }
  useEffect(()=>{
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
  const handleSearch = () => {
    setPage(0)
    fetchTenants(0);
  };

  return (
    <Grid container item  xs={expanded?8:10.5} sm={expanded?8:10.9} md={expanded?9:11.3} lg={expanded?10:11.55} sx={{px:2,color:'black'}}>
    <Grid item container xs={12}>
     <HeaderSec tenantsList={tenantsList}  />
      <Grid item container sx={{backgroundColor:'rgba(211,211,211,0.15)',borderRadius:'20px',p:1.5}} xs={12}>
       <HeaderOfTenantsList tenantName={tenantName} setTenantName={setTenantName} handleSearch={handleSearch}/>
       {loading ? (
          <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        ) : (
          tenantsList.length === 0 ? (
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',p:10}}>
            <Typography variant="h6" sx={{ width: '100%', textAlign: 'center', mt: 2 }}>No Tenants found</Typography>
        </Box>
          ) : (
            <CollapsibleTable success={success} setSuccess={setSuccess} filteredTenants={tenantsList} tenantsList={tenantsList} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} totalCount={totalCount}/>
          )
        )}
      </Grid>
    </Grid>
    <Success label='Successfully Updated!' success={success} setSuccess={setSuccess}  />
  </Grid>
  )
}

export default Tenants
