import { Avatar, Box } from '@mui/material'
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useDialog } from '../../../../../context/DialogContext'
import OwnerModal from '../../../../OwnerModal'

function OwnerCard({apartment}) {
    const [selectedApartmentId,setSelectedApartmentId]=useState('')
    const [open, setOpen] = useState(false);
    const{setOpenDialog}=useDialog()
    const handleOpen=(event,id)=>{
      event.stopPropagation()
        if(Cookies.get('token')){
          setSelectedApartmentId(id)
          setOpen(true)
        }else{
          setOpenDialog(true);
        }
      }
  return (
    <>
    <Box sx={{
        position: 'absolute',
        bottom: 10,
        left: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'white',
        width: 50,
        height: 50,
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)', 
        borderLeft: '5px solid #1976d2',

      }}>
          <Avatar
alt="owner's name"
src={apartment.user.imagePath}
sx={{ width: 40, height: 40, cursor:'pointer'}}
onClick={(event)=>handleOpen(event,apartment.id)}
/>
</Box>
<OwnerModal  selectedApartmentId={selectedApartmentId} open={open} setOpen={setOpen}/>
</>
  )
}

export default OwnerCard
