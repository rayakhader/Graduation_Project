import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useOwnerApartmentRefresh } from '../../context/OwnerApartmentRefresh';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'; 
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import checkAvailabilityAndVisibility from './checkAvailabilityAndVisibility';
import changeAvailability from '../../../../../../../../../API/apartments/changeAvailability';
import changeVisibility from '../../../../../../../../../API/apartments/changeVisibility';
import { useToken } from '../../../../../../../../../globalContext/TokenContext';
import AddDiscount from './AddDiscount';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteDiscount from './DeleteDiscount';

function ManageApartment({id,setSuccess}) {
    const{refresh,setRefresh}=useOwnerApartmentRefresh()
    const [anchorEl, setAnchorEl] = useState(null);
    const[isAvailable,setIsAvailable]=useState()
    const[isVisible,setIsVisible]=useState()
    const[addDiscount,setAddDiscount]=useState(false)
    const[deleteDiscount,setDeleteDiscount]=useState(false)
    const{token}=useToken()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id1 = open ? 'simple-popover' : undefined;
    useEffect(()=>{
      if(id){
      checkAvailabilityAndVisibility(id,{setIsAvailable,setIsVisible})
      }
    },[id,refresh])
    const handleVisibility =(id)=>{
      if(id){
        changeVisibility(token,id,refresh,{setRefresh})
      }
    }
    const handleAvailability=(id)=>{
       changeAvailability(token,id,refresh,{setRefresh})
    }
    const handleAddDiscount = (id)=>{
      setAddDiscount(true)
    }
    const handleDeleteDiscount =(id)=>{
      setDeleteDiscount(true)
    }
  return (
    <div>
    <IconButton  onClick={handleClick}  sx={{backgroundColor:'rgba(255, 255, 255, 0.15)',rotate:'90deg'}}>
        <MoreVertIcon />
    </IconButton>
        <Menu
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
  }}
  transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
  }}
    >
      <MenuItem onClick={()=>handleVisibility(id)} sx={{py:1,borderBottom:'1px solid rgba(211,211,211,1)'}}>
      <ListItemIcon>{isVisible?<LockIcon color='primary'/>:<LockOpenIcon color='success' />}</ListItemIcon>
      <ListItemText primary={isVisible?'Make Invisible':'Make Visible'}/>
      </MenuItem>
      <MenuItem onClick={()=>handleAvailability(id)} sx={{py:1,borderBottom:'1px solid rgba(211,211,211,1)'}}>
      <ListItemIcon fontSize="small">{isAvailable?<RemoveCircleIcon color='error' />:<CheckCircleIcon color='success' />}</ListItemIcon>
      <ListItemText primary={isAvailable?'Make Unavailable':'Make Available'}/>
      </MenuItem>
      <MenuItem onClick={()=>handleAddDiscount(id)} sx={{py:1,borderBottom:'1px solid rgba(211,211,211,1)'}}>
      <ListItemIcon fontSize="small"><LocalOfferIcon color='error'  /></ListItemIcon>
      <ListItemText primary='Add Discount'/>
      </MenuItem>
      <MenuItem onClick={()=>handleDeleteDiscount(id)} sx={{py:1}}>
      <ListItemIcon fontSize="small"><DeleteIcon color='error'  /></ListItemIcon>
      <ListItemText primary='Delete Discount'/>
      </MenuItem>
    </Menu>
    {addDiscount&& <AddDiscount id={id} addDiscount={addDiscount} setAddDiscount={setAddDiscount} setSuccess={setSuccess} />}
    {deleteDiscount && <DeleteDiscount  id={id} deleteDiscount={deleteDiscount} setDeleteDiscount={setDeleteDiscount} setSuccess={setSuccess} />}
    </div>
  )
}

export default ManageApartment
