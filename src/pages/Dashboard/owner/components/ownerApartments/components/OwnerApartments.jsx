import React, { useEffect, useState } from 'react'
import EmptyState from './EmptyState'
import NotEmptyState from './notEmptyState/NotEmptyState'
import { Box, Grid,CircularProgress } from '@mui/material'
import { useExpanded } from '../../../../context/ExpandedSidebar'
import { useToken } from '../../../../../../globalContext/TokenContext'
import userIdFromToken from '../../../../../../customHook/userIdFromToken'
import getNumberOfApartments from '../../../../../../API/apartments/getNumberOfApartments'


function OwnerApartments() {
  const [apartmentsNum,setApartmentsNum]=useState(0)
  const {token}=useToken()
  const[userId,setUserId]=useState('')
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    userIdFromToken(token,setUserId)
  },[token])
  useEffect(()=>{
    if(userId){
    setLoading(true)
    getNumberOfApartments(token,userId,{setApartmentsNum}).finally(()=>setLoading(false))
    }
  },[userId])
  const {expanded}=useExpanded()
  return (
    <Grid container item  xs={expanded?8:10.5} sm={expanded?8:10.9} md={expanded?9:11.3} lg={expanded?10:11.55} sx={{px:2}}>
      {loading ? (
          <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        ) : ( apartmentsNum === 0 ? <EmptyState /> : <NotEmptyState />)
}
    </Grid>
  )
}

export default OwnerApartments
