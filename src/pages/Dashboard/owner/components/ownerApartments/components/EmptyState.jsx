import { Box, Typography,Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '../../../../../../customHook/useNavigation'
import handleAddApartment from './notEmptyState/handleAddApartment'
import { useToken } from '../../../../../../globalContext/TokenContext'
import userIdFromToken from '../../../../../../customHook/userIdFromToken'
import SuspensionDialog from './notEmptyState/SuspensionDialog'
import addapartment from '../../../../../../images/addapartment.png'

function EmptyState() {
  const {clickAddApartment}=useNavigation()
  const {token}=useToken()
  const[ownerId,setOwnerId]=useState('')
  const[suspensionDialog,setSuspensionDialog]=useState(false)
  const[suspensionInfo,setSuspensionInfo]=useState({})
  useEffect(()=>{
    userIdFromToken(token,setOwnerId)
  },[token])
  return (
    <>
    <Grid item sx={{width:'50%', margin:'auto',mt:{xs:'30%',sm:'15%'}}}>
          <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <Box>
        <img src={addapartment} style={{height:200,width:200,color:'#1976d2'}} alt='addApartment'/>
      </Box>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        Add your first apartment here.
      </Typography>
      <Button variant="contained" onClick={() => handleAddApartment(token, clickAddApartment, ownerId, setSuspensionInfo, setSuspensionDialog)}>Add Apartment</Button>
    </Box>
    </Grid>
    {suspensionDialog && <SuspensionDialog suspensionDialog={suspensionDialog} setSuspensionDialog={setSuspensionDialog} suspensionInfo={suspensionInfo} />}
    </>
  )
}

export default EmptyState
