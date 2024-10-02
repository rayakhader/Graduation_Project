import React, { useEffect, useState } from 'react'
import { TableCell, TableRow, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useToken } from '../../../../../globalContext/TokenContext';
import { jwtDecode } from 'jwt-decode';
import getApartmentsByOwnerId from '../../../../../API/apartments/getApartmentsByOwnerId';
import { useDiscountRefresh } from './context/RefreshDiscounts';
import deleteDiscountById from '../../../../../API/discounts/deleteDiscountById';
import AddDiscountDialog from './addDiscount/AddDiscountDialog';
import EditDiscount from './EditDiscount/EditDiscount';

function DiscountItem({ discount, setSuccess }) {
  const [addDiscount, setAddDiscount] = useState(false)
  const { token } = useToken()
  const [apartmentsList, setApartmentsList] = useState([])
  const [availableApartments, setAvailableApartments] = useState([])
  const [notAvailableApartments, setNotAvailableApartments] = useState([])
  const [visibleApartments, setVisibleApartments] = useState([])
  const [notVisibleApartments, setNotVisibleApartments] = useState([])
  const [discountedApartments, setDiscountedApartments] = useState([])
  const [editDiscount, setEditDiscount] = useState(false)
  const { refresh, setRefresh } = useDiscountRefresh()

  const handleAddDiscount = () => {
    setAddDiscount(true)
  }

  const handleDeleteDiscount = (id) => {
    deleteDiscountById(token, id, refresh, { setRefresh, setSuccess })
  }

  const handleEditDiscount = () => {
    setEditDiscount(true)
  }

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const userId = decoded['userId'];
      getApartmentsByOwnerId(token, userId, { setApartmentsList, setAvailableApartments, setNotAvailableApartments, setVisibleApartments, setNotVisibleApartments, setDiscountedApartments })
    }
  }, [token])

  return (
    <TableRow>
      <TableCell><Typography sx={{ color: 'white', backgroundColor: '#d32f2f',textAlign:'center',width:'50px', px: 1.5, borderRadius: '4px' }}>{discount.percentage}%</Typography></TableCell>
      <TableCell><Typography>{discount.apartmentsCount}</Typography></TableCell>
      <TableCell><Typography variant='body2' color='textSecondary'>{discount.creationDate}</Typography></TableCell>
      <TableCell sx={{ textTransform: 'capitalize' }}>{discount.description}</TableCell>
      <TableCell>
        <IconButton onClick={handleAddDiscount}>
          <AddIcon />
        </IconButton>
        <IconButton onClick={() => handleEditDiscount()}>
          <EditIcon />
        </IconButton>
        {!discount.isAdded && (
          <IconButton disabled={discount.isAdded} sx={{ color: '#d32f2f' }} onClick={() => handleDeleteDiscount(discount.id)}>
            <DeleteIcon />
          </IconButton>
        )}
      </TableCell>
      <AddDiscountDialog addDiscount={addDiscount} setAddDiscount={setAddDiscount} id={discount.id} apartmentsList={apartmentsList} setSuccess={setSuccess} />
      <EditDiscount editDiscount={editDiscount} setEditDiscount={setEditDiscount} id={discount.id} setSuccess={setSuccess} />
    </TableRow>
  )
}

export default DiscountItem
