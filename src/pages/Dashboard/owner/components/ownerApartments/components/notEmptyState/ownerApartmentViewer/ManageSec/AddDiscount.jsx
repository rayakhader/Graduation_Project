import {Button, CircularProgress, Dialog, DialogContent, DialogTitle, Pagination, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import getDiscountsByUserId from '../../../../../../../../../API/discounts/getDiscountsByUserId'
import { useToken } from '../../../../../../../../../globalContext/TokenContext'
import userIdFromToken from '../../../../../../../../../customHook/userIdFromToken'
import LocalOffer from '@mui/icons-material/LocalOffer';
import AddExpireDate from './AddExpireDate'
import getDiscountsByApartmentId from '../../../../../../../../../API/discounts/getDiscountsByApartmentId'

function AddDiscount({id,addDiscount,setAddDiscount,setSuccess}) {
    const{token}=useToken()
    const[userId,setUserId]=useState('')
    const[discountsList,setDiscountsList]=useState([])
    const[totalPages,setTotalPages]=useState(0)
    const[currentPage,setCurrentPage]=useState(1)
    const itemsPerPage = 5
    const [apartmentDiscounts,setApartmentDiscounts]=useState([])
    const[addExpireDate,setAddExpireDate]=useState(false)
    const[selectedDiscount,setSelectedDiscount]=useState('')
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        userIdFromToken(token,setUserId)
    },[token])
    useEffect(()=>{
        if(id&& userId){
            setLoading(true)
            getDiscountsByUserId(token,userId,currentPage,itemsPerPage,'',{setDiscountsList,setTotalPages})
            getDiscountsByApartmentId(token,id,{setApartmentDiscounts}).finally(()=>setLoading(false))
        }
    },[id,userId,currentPage])

    const isDiscountAdded =(discountId)=>{
        return apartmentDiscounts.some(apartmentDiscount=>apartmentDiscount.id===discountId)
    }
    const handleAddDiscount =(discountId)=>{
        setSelectedDiscount(discountId)
        setAddExpireDate(true)
    }
    const handlePageChange = (event,value)=>{
        setCurrentPage(value)
    }
  return (
    <>
    <Dialog open={addDiscount} onClose={()=>setAddDiscount(false)}>
        <DialogTitle sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:0.5}}>
            <LocalOffer />
            <Typography variant='Body2'>Add discount</Typography>
            </DialogTitle>
        <DialogContent>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Amount (%)</TableCell>
                        <TableCell>Created at</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {!loading ? (discountsList.length >0 ? discountsList.map((discount)=>(
                 <TableRow key={discount.id}>
                    <TableCell sx={{color:'red',fontWeight:'bold'}}>{discount.percentage}%</TableCell>
                    <TableCell>{discount.creationDate}</TableCell>
                    <TableCell>{discount.description}</TableCell>
                    <TableCell>
                        <Button variant='contained' disabled={isDiscountAdded(discount.id)} onClick={()=>handleAddDiscount(discount.id)}>
                            Add
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
            {!loading && totalPages>0 && <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            sx={{alignItems:'center',display:'flex',justifyContent:'center',p:1.5}}
          />}
        </DialogContent>
    </Dialog>
    <AddExpireDate addExpireDate={addExpireDate} setAddExpireDate={setAddExpireDate} selectedDiscount={selectedDiscount} id={id} setSuccess={setSuccess}/>
    </>
  )
}

export default AddDiscount
