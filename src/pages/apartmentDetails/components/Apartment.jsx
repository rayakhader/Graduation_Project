import {  Box, Divider, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';
import Footer from '../../../stableLayoutComponent/Footer';
import TopInfo from './TopInfo';
import ShareModal from './ApartmentImages/components/ShareModal/components/ShareModal';
import OwnerInfo from './ownerInfo/OwnerInfo';
import ApartmentInfo from './ApartmentInfo/ApartmentInfo';
import CopySnackbar from './ApartmentImages/components/ShareModal/components/CopySnackbar';
import ApartmentImages from './ApartmentImages/components/ApartmentImages';
import { useToken } from '../../../globalContext/TokenContext';
import UnderImages from './ApartmentImages/components/UnderImages';
import ApartmentDesc from './ApartmentInfo/ApartmentDesc';
import { useFavorite } from '../../favorites/context/FavoriteList';
import fetchApartmentDetailsAndFavorites from './favoriteSec/fetchApartmentDetailsAndFavorite';
import { useApartmentDetailsRefresh } from '../context/ApartmentDetailsRefresh';
import ToggleFavorite from './favoriteSec/ToggleFavorite';
import DiscountsViewer from './ApartmentDiscounts/DiscountsViewer';
import getDiscountsByApartmentId from '../../../API/discounts/getDiscountsByApartmentId';
import FavoriteDialog from '../../home/components/FavoriteDialog';
import '../style/apartment.css'
import useResetFiltersOnNavigation from '../../home/customHook/useResetFiltersOnNavigation';
import Map from './Map';
function Apartment() {
  const {token} =useToken()
  const [apartmentDetails,setApartmentDetails]=useState({})
  const [ownerInfo,setOwnerInfo]=useState({})
  const[apartmentDiscounts,setApartmentDiscounts]=useState([])
  const [add,setAdd]=useState(false)
  const {id}=useParams()
  const{setFavoriteList}=useFavorite()
  const{refresh}=useApartmentDetailsRefresh()
  const[open,setOpen]=useState(false)
    useEffect(()=>{
      fetchApartmentDetailsAndFavorites(id,token,{setApartmentDetails,setOwnerInfo,setFavoriteList,setAdd});
      getDiscountsByApartmentId(token,id,{setApartmentDiscounts})
    },[add,id,refresh])
    useResetFiltersOnNavigation()
    const tooltipTitle = token ? '' : 'Please log in or sign up to view owner information.';
  return (
  <>
     <Grid container sx={{mb:50,p:2,color:'black',overflowX:'hidden'}}>
    <TopInfo apartmentDetails={apartmentDetails} />
      <Grid item xs={12} md={8} sx={{p:3,position:'relative'}}>
       <Box sx={{position:'absolute',top:25,right:25,zIndex:1}}>
        <ToggleFavorite add={add} setAdd={setAdd} id={id} setOpen={setOpen}/>
     <ShareModal apartmentDetails={apartmentDetails} id={id}/>
       </Box>
      <ApartmentImages apartmentDetails={apartmentDetails} id={id} />
      <UnderImages apartmentDetails={apartmentDetails} apartmentDiscounts={apartmentDiscounts} />
      </Grid>
      <Grid item xs={12} md={4}sx={{p:3}}>
        <Tooltip title={tooltipTitle} placement='bottom' arrow >
          <div>
          <OwnerInfo ownerInfo={ownerInfo} />
          </div>
       </Tooltip>
      </Grid>
      <Divider sx={{border:'1px solid rgba(211,211,211,5)',width:{xs:'100%',md:'64%'},ml:3}} />
      <Grid item xs={12} md={8} sx={{p:3}}>
      <ApartmentInfo  apartmentDetails={apartmentDetails} />
      </Grid>
      <Grid item xs={12} md={4} sx={{p:3,mt:1}}>
        <Map city={apartmentDetails.cityName}  />
      </Grid>
     {apartmentDiscounts.length>0 && <Grid item xs={12} md={8} sx={{py:1,px:3}}>
      <DiscountsViewer  apartmentDiscounts={apartmentDiscounts} setApartmentDiscounts={setApartmentDiscounts} id={id} />
      </Grid>}
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          px: 3,
          py: apartmentDiscounts.length > 0 ? 3 : 1,
        }}
      >
        <ApartmentDesc apartmentDetails={apartmentDetails} />
      </Grid>
      <CopySnackbar />
    </Grid>
   <Footer/>
   <FavoriteDialog open={open} setOpen={setOpen} />
   </>
  )
}
export default Apartment
