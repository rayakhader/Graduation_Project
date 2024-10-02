import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Typography } from '@mui/material'
import AddTenantDialog from './addNewTenant/AddTenantDialog';
function HeaderSec({tenantsList}) {
  const [createTenant,setCreateTenant]=useState(false)
  return (
    <>
    <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',my:2,borderRadius:'20px',p:1.5,backgroundColor:'rgba(211,211,211,0.15)'}}>
    <Box sx={{display:'flex',alignItems:'center'}}>
    <Typography variant='h6'>Tenants</Typography>
    <Typography color="textSecondary">({tenantsList.length})</Typography>
    </Box>
    <Box>
      <Button color='primary' variant='contained' startIcon={<AddIcon />} onClick={()=>setCreateTenant(true)}>Add new Tenant</Button>
    </Box>
  </Box>
  <AddTenantDialog createTenant={createTenant} setCreateTenant={setCreateTenant} />
  </>
  )
}

export default HeaderSec
