import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditDialog from './EditDialog';
import {  useParams } from 'react-router-dom'
import Information from './Information';
import DescriptionCard from './DescriptionCard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import getApartmentById from '../../../../../../../../../API/apartments/getApartmentById';
import { useExpanded } from '../../../../../../../context/ExpandedSidebar';
import ApartmentImages from '../../../../../../../../apartmentDetails/components/ApartmentImages/components/ApartmentImages';
import { useRefreshApartmentDetails } from '../context/RefreshApartmentDetails';
import ChangeImages from './ChangeImages';
import { useToken } from '../../../../../../../../../globalContext/TokenContext';
import getDiscountsByApartmentId from '../../../../../../../../../API/discounts/getDiscountsByApartmentId';

function EditApartmentDetails() {
    const {id}=useParams()
    const[open,setOpen]=useState(false)
    const {expanded}=useExpanded()
    const[apartmentDetails,setApartmentDetails]=useState({})
    const[apartmentDiscounts,setApartmentDiscounts]=useState([])
    const [ownerInfo,setOwnerInfo]=useState({})
    const{refresh}=useRefreshApartmentDetails()
    const{token}=useToken()
    useEffect(()=>{
      getApartmentById(id,{setApartmentDetails,setOwnerInfo})
      getDiscountsByApartmentId(token,id,{setApartmentDiscounts})
    },[id,refresh])
    const discountText = apartmentDiscounts.length === 1 ? 'Discount' : 'Discounts';
  return (
    <Grid container item xs={expanded?8:10.5} sm={expanded?8:10.9} md={expanded?9:11.3} lg={expanded?10:11.55} sx={{color:'black',px:5, py:2,backgroundColor:'rgba(211,211,211,0.15)'}}>
        <Grid item xs={12} md={6} sx={{backgroundColor:'white',mt:2, borderRadius:'4px',p:3,border:'1px solid rgba(211,211,211,1)'}}>
         <ApartmentImages apartmentDetails={apartmentDetails} id={id} />
         <ChangeImages apartmentDetails={apartmentDetails} id={id}/>
         <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <Button sx={{borderRadius:10,backgroundColor:'#1976d2',color:'white',
    '&:hover':{
      backgroundColor:'#1976d2',
      color:'white'
    }
    }}><LocalOfferIcon  />{apartmentDiscounts.length} {discountText}</Button>
      <Typography sx={{color:'black',fontSize:20,fontWeight:'bold'}}>{apartmentDetails.price} {apartmentDetails.priceCurrency?.name}</Typography>
      </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex',flexDirection:'column',mt:2,px:{md:2,xs:0}}}>
           <Information apartmentDetails={apartmentDetails} setOpen={setOpen} />
           <DescriptionCard apartmentDetails={apartmentDetails} setOpen={setOpen} />
        </Grid>
   <EditDialog open={open} setOpen={setOpen} apartmentDetails={apartmentDetails}/>
   </Grid>
  )
}
export default EditApartmentDetails
