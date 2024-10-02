import { IconButton } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

function EditApartment({id}) {
    const navigate= useNavigate()
    const handleEdit = (id)=>{
        navigate(`/dashboard/apartments/${id}`)
    }
  return (
    <IconButton onClick={()=>handleEdit(id)}  sx={{backgroundColor:'rgba(255, 255, 255, 0.15)'}}>
      <EditIcon  />
    </IconButton>
  )
}

export default EditApartment
