import { Card, CardHeader, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useExpanded } from '../../../context/ExpandedSidebar'
import HomeIcon from '@mui/icons-material/Home';
import { useToken } from '../../../../../globalContext/TokenContext';
import userIdFromToken from '../../../../../customHook/userIdFromToken';
import getFollowersByUserId from '../../../../../API/followers/getFollowersByUserId';
import getFollowingByUserId from '../../../../../API/following/getFollowingByUserId';
import getApartmentsByOwnerId from '../../../../../API/apartments/getApartmentsByOwnerId';
import CardContainer from './CardContainer';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ApartmentDiscountChart from './ApartmentDiscountChart';
import DiscountDistributionChart from './DiscountDistributionChart';
import ApartmentAvailabilityChart from './ApartmentAvailabilityChart';
import getDiscountsNumForOwnerApartments from '../../../../../API/apartments/getDiscountsNumForOwnerApartments';
import ContractsStatusChart from './ContractsStatusChart';
import TenantsStatusChart from './TenantsStatusChart';
import getAddedDiscounts from '../../../../../API/discounts/getAddedADiscounts';
import getNotAddedDiscounts from '../../../../../API/discounts/getNotAddedDiscounts';
import getTerminatedContracts from '../../../../../API/contracts/getTerminatedContracts';
import getNotTerminatedContracts from '../../../../../API/contracts/getNotTerminatedContracts';
import getPercentageOfTenantsWithIncompletedPayments from '../../../../../API/tenants/getPercentageOfTenantsWithIncompletedPayments.js';
import getFavoriteApartmentsByUserId from '../../../../../API/favorite/getFavoriteApartmentsByUserId.js';
function DashOwner() {
  const{expanded} = useExpanded()
  const{token}=useToken()
  const[userId,setUserId]=useState('')
  const[followersList,setFollowersList]=useState([])
  const[followingList,setFollowingList]=useState([])
  const[favoritesList,setFavoritesList]=useState([])
  const[apartmentsList,setApartmentsList]=useState([])
  const[availableApartments,setAvailableApartments]=useState([])
  const[notAvailableApartments,setNotAvailableApartments]=useState([])
  const[visibleApartments,setVisibleApartments]=useState([])
  const[notVisibleApartments,setNotVisibleApartments]=useState([])
  const[discountedApartments,setDiscountedApartments]=useState([])
  const[terminatedContracts,setTerminatedContracts]=useState([])
  const[notTerminatedContracts,setNotTerminatedContracts]=useState([])
  const[addedDiscounts,setAddedDiscounts]=useState([])
  const[notAddedDiscounts,setNotAddedDiscounts]=useState([])
  const [tenantsWithIncompletedPayments,setTenantsWithIncompletedPayments]=useState([])
  const [apartmentData,setApartmentData]=useState([])
  useEffect(()=>{
    userIdFromToken(token,setUserId)
  },[token])
  useEffect(()=>{
if(userId){
  getApartmentsByOwnerId(token,userId,{setApartmentsList,setAvailableApartments,setNotAvailableApartments,setVisibleApartments,setNotVisibleApartments,setDiscountedApartments})
  getFollowersByUserId(userId,{setFollowersList})
  getFollowingByUserId(userId,{setFollowingList})
  getFavoriteApartmentsByUserId(token,userId,{setFavoritesList})
  getAddedDiscounts(token,userId,{setAddedDiscounts})
  getNotAddedDiscounts(token,userId,{setNotAddedDiscounts})
  getDiscountsNumForOwnerApartments(userId,{setApartmentData})
  getTerminatedContracts(token,userId,{setTerminatedContracts})
  getNotTerminatedContracts(token,userId,{setNotTerminatedContracts})
  getPercentageOfTenantsWithIncompletedPayments(token,userId,{setTenantsWithIncompletedPayments})
}
  },[userId])
  return (
    <Grid container item  xs={expanded?8:10.5} sm={expanded?8:10.9} md={expanded?9:11.3} lg={expanded?10:11.55} sx={{backgroundColor:'rgba(211, 211, 211, 0.13)',px:2,color:'black'}}>
      <Grid container item xs={12} sx={{my:2}} >
      <CardContainer icon={<HomeIcon  />} count={apartmentsList.length} label="All Apartments" />
      <CardContainer icon={<PeopleAltIcon/>} count={followingList.length} label="Following" />
      <CardContainer icon={<PersonIcon/>} count={followersList.length} label="Followers" />
      <CardContainer icon={<FavoriteIcon/>} count={favoritesList.length} label="Favorites" />
    </Grid>
    <Grid container item xs={12} sx={{my:4,display:'flex',alignItems:'center'}}>
      <Grid item xs={12} md={8} sx={{p:1.5}}>
        <Card sx={{p:1.5,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',height:'500px'}}>
        <CardHeader
            />
        <ApartmentDiscountChart apartmentData={apartmentData} />
        </Card>
      </Grid>
      <Grid item  xs={12} md={4} sx={{p:1.5}} >
        <Card  sx={{p:1.5,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',height:'500px'}}>
        <CardHeader
            />
        <ApartmentAvailabilityChart  availableApartments={availableApartments} notAvailableApartments={notAvailableApartments}/>
        </Card>
      </Grid>
     </Grid>
     <Grid container item xs={12} sx={{my:4,display:'flex',alignItems:'center'}} >
     <Grid item xs={12} md={4} sx={{p:1.5}}>
      <Card  sx={{p:1.5,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',height:'500px'}}>
      <CardHeader
            />
        <DiscountDistributionChart addedDiscounts={addedDiscounts} notAddedDiscounts={notAddedDiscounts}/>
      </Card>
      </Grid>
      <Grid item xs={12} md={4} sx={{p:1.5}}>
      <Card  sx={{p:1.5,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',height:'500px'}}>
      <CardHeader
      />
      <ContractsStatusChart terminatedContracts={terminatedContracts} notTerminatedContracts={notTerminatedContracts}  />
      </Card>
      </Grid>
      <Grid item xs={12} md={4} sx={{p:1.5}}>
      <Card sx={{p:1.5,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',height:'500px'}}>
      <CardHeader
      />
      <TenantsStatusChart tenantsWithIncompletedPayments={tenantsWithIncompletedPayments} />
      </Card>
      </Grid>
     </Grid>
    </Grid>
  )
}

export default DashOwner
