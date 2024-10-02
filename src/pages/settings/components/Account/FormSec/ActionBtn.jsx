import React from 'react'
import {  Box, Button} from '@mui/material'
import { useSaveChanges } from '../context/SaveChanges'
import SaveChanges from './SaveChanges'
import { useCheckChange } from '../context/CheckChange'

function ActionBtn({userInfo,phoneNumberError}) {
  const {saveChanges,setSaveChanges}=useSaveChanges()
  const{change}=useCheckChange()
  return (
    <>
    <Box sx={{width:'100%',display:'flex',alignItems:'center',p:2,justifyContent:'space-between'}}>
    <Box sx={{display:'flex',alignItems:'center',p:1,textTransform:'none'}}>
    <Button variant='contained' color='primary' disabled={!change || phoneNumberError} sx={{textTransform:'none'}} onClick={()=>setSaveChanges(true)}>Save changes</Button>
    </Box>
</Box>
<SaveChanges saveChanges={saveChanges} />
</>
  )
}

export default ActionBtn
