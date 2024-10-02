import React, { useEffect, useState } from 'react'
import { useToken } from '../../../../../../../../../globalContext/TokenContext'
import getDiscountsByApartmentId from '../../../../../../../../../API/discounts/getDiscountsByApartmentId'
import {  Button, CircularProgress, Dialog, DialogContent, DialogTitle, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import deleteDiscountFromApartment from '../../../../../../../../../API/discounts/deleteDiscountFromApartment'
import { useRefreshApartments } from './context/RefreshApartments'

function DeleteDiscount({id,deleteDiscount,setDeleteDiscount,setSuccess}) {
    const {token}=useToken()
    const [apartmentDiscounts,setApartmentDiscounts]=useState([])
    const {refreshDeleteDiscount,setRefreshDeleteDiscount}=useRefreshApartments()
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        if(id && deleteDiscount){
            setLoading(true)
            getDiscountsByApartmentId(token,id,{setApartmentDiscounts}).finally(()=>setLoading(false))
        }
    },[id,deleteDiscount])

    const handleDeleteDiscount =(discountId)=>{
       deleteDiscountFromApartment(token,discountId,id,refreshDeleteDiscount,{setRefreshDeleteDiscount,setSuccess})
    }
  return (
    <Dialog open={deleteDiscount} onClose={()=>setDeleteDiscount(false)}>
  <DialogTitle sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:0.5}}>
            <DeleteIcon />
            <Typography variant='Body2'>Delete discount</Typography>
            </DialogTitle>
        <DialogContent>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Amount (%)</TableCell>
                        <TableCell>Expires at</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {!loading ? (apartmentDiscounts.length >0 ?apartmentDiscounts.map((discount)=>(
                 <TableRow key={discount.id}>
                    <TableCell sx={{color:'red',fontWeight:'bold'}}>{discount.percentage}%</TableCell>
                    <TableCell>{discount.expiryDate}</TableCell>
                    <TableCell>{discount.description}</TableCell>
                    <TableCell>
                        <Button variant='contained' color='error' onClick={()=>handleDeleteDiscount(discount.id)}>
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>
            )): (
                <TableRow>
                    <TableCell colSpan={4} sx={{ textAlign: 'center', color: 'gray'}}>
                        No discounts found
                    </TableCell>
                </TableRow>
            )): <TableRow>
            <TableCell colSpan={4} sx={{ textAlign: 'center' }}>
              <CircularProgress />
            </TableCell>
          </TableRow>}
            </TableBody>
            </Table>
        </DialogContent>
    </Dialog>
  )
}

export default DeleteDiscount
