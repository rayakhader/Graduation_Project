import { Card, CardHeader, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useExpanded } from '../../../context/ExpandedSidebar'
import { useToken } from '../../../../../globalContext/TokenContext'
import userIdFromToken from '../../../../../customHook/userIdFromToken'
import getFavoriteApartmentsByUserId from '../../../../../API/favorite/getFavoriteApartmentsByUserId'
import getFollowingByUserId from '../../../../../API/following/getFollowingByUserId'
import CardContainer from '../../../owner/components/dashboard/CardContainer'
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FavoritePercentageChart from './FavoritePercentageChart'
import getUserByIdProfile from '../../../../../API/users/getUserByIdProfile'
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import getAllApartments from '../../../../../API/apartments/getAllApartments'
import getUnreadNotifications from '../../../../../API/notifications/getUnreadNotifications'
import getReadNotifications from '../../../../../API/notifications/getReadNotifications'
import NotificationsPieChart from './NotificationsPieChart'
import NotificationsBarChart from './NotificationsBarChart'

function DashCustom() {
  const{expanded}=useExpanded()
  const{token}=useToken()
  const[userId,setUserId]=useState('')
  const[favoritesList,setFavoritesList]=useState([])
  const[followingList,setFollowingList]=useState([])
  const[totalApartments,setTotalApartments]=useState([])
  const[userInfo,setUserInfo]=useState({})
  const[numOfApartmentsInCustomCity,setNumOfApartmentsInCustomCity]=useState()
  const[numOfApartmentsWithDiscounts,setNumOfApartmentsWithDiscounts]=useState(0)
  const [readNotifications,setReadNotifications]=useState(0)
  const [unreadNotifications,setUnreadNotifications]=useState(0)
  useEffect(()=>{
    userIdFromToken(token,setUserId)
  },[token])
  useEffect(()=>{
    if(userId){
      getFavoriteApartmentsByUserId(token,userId,{setFavoritesList})
      getFollowingByUserId(userId,{setFollowingList})
      getAllApartments('',{setApartments : setTotalApartments})
      getAllApartments('ApartmentDiscounts.Count>0',{setApartments:setNumOfApartmentsWithDiscounts})
      getUserByIdProfile(userId,{setUserInfo})
      getUnreadNotifications(userId,{setNotificationsCount:setUnreadNotifications})
      getReadNotifications(userId,{setNotificationsCount:setReadNotifications})
    }
  },[userId])
  useEffect(()=>{
    if(Object.keys(userInfo).length > 0){
      const filter = `city.name@=${userInfo.cityName}`
      getAllApartments(filter,{setApartments : setNumOfApartmentsInCustomCity})
    }
  },[userInfo])
  return (
    <Grid container item  xs={expanded?8:10.5} sm={expanded?8:10.9} md={expanded?9:11.3} lg={expanded?10:11.55} sx={{backgroundColor:'rgba(211, 211, 211, 0.13)',px:2,color:'black'}}>
      <Grid container item xs={12} sx={{my:2}} >
      <CardContainer icon={<FavoriteIcon  />} count={favoritesList.length} label="Favorites" />
      <CardContainer icon={<PeopleAltIcon/>} count={followingList.length} label="Following" />
      <CardContainer icon={<HomeIcon/>} count={numOfApartmentsInCustomCity} label="Nearby Apartments" />
      <CardContainer icon={<LocalOfferIcon/>} count={numOfApartmentsWithDiscounts} label="Apartments with Discounts" />
      </Grid>
      <Grid container item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Grid item xs={12} sm={6} md={4}  sx={{p:1.5}}>
        <Card sx={{p:1.5,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',height:'500px'}} >
          <NotificationsPieChart readNotifications={readNotifications} unreadNotifications={unreadNotifications} />
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}  sx={{p:1.5}}>
        <Card sx={{p:1.5,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',height:'500px'}} >
          <NotificationsBarChart readNotifications={readNotifications} unreadNotifications={unreadNotifications} />
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{p:1.5}}>
          <Card sx={{p:1.5,display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',height:'500px'}}>
          <FavoritePercentageChart apartments={totalApartments} favoritesList={favoritesList.length}/>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DashCustom
