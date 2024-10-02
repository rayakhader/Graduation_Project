import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EventIcon from '@mui/icons-material/Event';
import EditIcon from '@mui/icons-material/Edit';
import EditUniversity from './EditUniversity';

function ViewDialog({openViewDialog,setOpenViewDialog,universitiesList,setUniversitiesList,city,creationDate,cityId}) {
  const[editUniversity,setEditUniversity]=useState(false)
  const[selectedUniversityId,setSelectedUniversityId]=useState('')
  const handleEdit = (universityId)=>{
    setEditUniversity(true)
    setSelectedUniversityId(universityId)
  }
  return (
    <>
    <Dialog open={openViewDialog} onClose={()=>{setOpenViewDialog(false)
    setUniversitiesList([])}} 
      >
            <DialogTitle sx={{letterSpacing:1,display:'flex',alignItems:'center',justifyContent:'center'}}>View Universities</DialogTitle>
            <DialogContent>
            <Box sx={{width:'100%',borderRadius:'4px',backgroundColor:'rgba(211,211,211,0.15)',border:'1px solid rgba(211,211,211,1)',display:'flex',justifyContent:'space-between',p:1.5,alignItems:'center'}}>
                <Box sx={{minWidth:120,display:'flex',alignItems:'center',gap:0.5}}><LocationCityIcon /><Typography sx={{fontWeight:'bold'}}>City Name</Typography></Box>
                <Box sx={{minWidth:170,display:'flex',alignItems:'center',gap:0.5}}><EventIcon /><Typography sx={{fontWeight:'bold'}}>Added on</Typography></Box>
            </Box>
            <Box sx={{width:'100%',borderRadius:'4px',display:'flex',borderLeft:'1px solid rgba(211,211,211,1)',borderRight:'1px solid rgba(211,211,211,1)',borderBottom:'1px solid rgba(211,211,211,1)',justifyContent:'space-between',p:1.5,alignItems:'center'}}>
                <Box sx={{minWidth:120,display:'flex',alignItems:'center'}}><Typography>{city}</Typography></Box>
                <Box sx={{minWidth:170,display:'flex',alignItems:'center'}}><Typography>{creationDate}</Typography></Box>
            </Box>
            <Box sx={{width:'100%',display:'flex',my:2,alignItems:'center',backgroundColor:'rgba(211,211,211,0.15)',p:1.5,borderRadius:'20px'}}>
            <Typography variant='h6' sx={{textAlign:'start'}}>Universities</Typography>
            <Typography variant='body2' color='textSecondary'>({universitiesList.length})</Typography>
             </Box>
            <Box sx={{width:'100%',borderRadius:'4px',backgroundColor:'rgba(211,211,211,0.15)',border:'1px solid rgba(211,211,211,1)',display:'flex',justifyContent:'space-between',p:1.5,alignItems:'center'}}>
                <Box sx={{minWidth:120,display:'flex',alignItems:'center',gap:0.5}}><AccountBalanceIcon /><Typography sx={{fontWeight:'bold'}}>University Name</Typography></Box>
                <Box sx={{minWidth:170,display:'flex',alignItems:'center',gap:0.5}}><EventIcon /><Typography sx={{fontWeight:'bold'}}>Added on</Typography></Box>
            </Box>
            {universitiesList.length===0 &&
            <Box sx={{width:'100%',borderRadius:'4px',display:'flex',borderLeft:'1px solid rgba(211,211,211,1)',borderRight:'1px solid rgba(211,211,211,1)',borderBottom:'1px solid rgba(211,211,211,1)',justifyContent:'center',p:1.5,alignItems:'center'}}>
             <Typography variant='body2' color='textSecondary'>No universities found</Typography>
            </Box>
            }
            <Box sx={{maxHeight:'200px',overflow:'auto',width:'100%'}}  >
            {universitiesList.length!==0 && universitiesList.map((university)=>(
                <Box key={university.id} sx={{width:'100%',borderRadius:'4px',display:'flex',borderLeft:'1px solid rgba(211,211,211,1)',borderRight:'1px solid rgba(211,211,211,1)',borderBottom:'1px solid rgba(211,211,211,1)',justifyContent:'space-between',p:1.5,alignItems:'center'}}>
                  <Box sx={{minWidth:120,display:'flex',alignItems:'center'}}><Typography>{university.name}</Typography></Box>
                  <Box sx={{minWidth:170,display:'flex',justifyContent:'space-between',alignItems:'center'}}><Typography>{university.creationDate}</Typography> 
                  <IconButton onClick={()=>handleEdit(university.id)}>
                    <EditIcon />
                  </IconButton>
                  </Box>
                </Box>
            ))}
            </Box>
            </DialogContent>
            <DialogActions>
                <Box sx={{width:'100%',display:'flex',justifyContent:'center',p:1.5}}>
                    <Button variant='contained' color='primary' sx={{width:'50%'}} onClick={()=>{setOpenViewDialog(false)
                    setUniversitiesList([])}}>Cancel</Button>
                </Box>
            </DialogActions>
        </Dialog>
        <EditUniversity editUniversity={editUniversity} setEditUniversity={setEditUniversity} selectedUniversityId={selectedUniversityId} cityId={cityId} setOpenViewDialog={setOpenViewDialog}/>
        </>
  )
}
export default ViewDialog
