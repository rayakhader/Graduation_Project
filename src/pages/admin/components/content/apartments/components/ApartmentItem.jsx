import React, { useEffect, useState } from 'react'
import { TableCell, TableRow, Avatar, IconButton, Tooltip, Typography, Box, Badge } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import BlockIcon from '@mui/icons-material/Block';
import getApartmentImagesById from '../../../../../../API/apartments/getApartmentImagesById'
import ViewApartment from './ViewApartment';
import SuspendReasons from './SuspendReasons';

function ApartmentItem({ apartment }) {
  const [images, setImages] = useState([])
  const [isDelete, setIsDelete] = useState(false)
  const [viewApartment, setViewApartment] = useState(false)
  const [selectedApartmentId, setSelectedApartmentId] = useState('')

  useEffect(() => {
    getApartmentImagesById(apartment.id, { setImages })
  }, [apartment])

  const handleSuspend = (apartmentId) => {
    setSelectedApartmentId(apartmentId)
    setIsDelete(true)
  }

  const handleViewApartment = (apartmentId) => {
    setViewApartment(true)
    setSelectedApartmentId(apartmentId)
  }

  return (
    <TableRow>
      <TableCell>
        <Avatar src={images.length > 0 && images[0].imagePath ? images[0].imagePath : undefined} sx={{ width: 80, height: 80, borderRadius: 0 }} />
      </TableCell>
      <TableCell>{apartment.cityName}</TableCell>
      <TableCell>{apartment.universityName}</TableCell>
      <TableCell>{apartment.price} {apartment.priceCurrency}</TableCell>
      <TableCell>
        <Typography sx={{ color: apartment.isAvailable ? '#4caf50' : 'error.main' }}>{apartment.isAvailable ? 'Available' : 'Not Available'}</Typography>
        <Typography sx={{ color: apartment.isVisible ? '#4caf50' : 'error.main' }}>{apartment.isVisible ? 'Visible' : 'Not Visible'}</Typography>
      </TableCell>
      <TableCell>
        <IconButton onClick={() => handleViewApartment(apartment.id)}>
          <VisibilityIcon sx={{ color: '#3498db' }} />
        </IconButton>
        <IconButton onClick={() => handleSuspend(apartment.id)}>
          <Tooltip title="Suspend Owner">
            <Badge
              badgeContent={<BlockIcon style={{ fontSize: 20, color: 'red' }} />}
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <PersonIcon style={{ fontSize: 30 }} />
            </Badge>
          </Tooltip>
        </IconButton>
      </TableCell>
      <SuspendReasons isDelete={isDelete} setIsDelete={setIsDelete} selectedApartmentId={selectedApartmentId} />
      <ViewApartment viewApartment={viewApartment} setViewApartment={setViewApartment} selectedApartmentId={selectedApartmentId} />
    </TableRow>
  )
}

export default ApartmentItem
