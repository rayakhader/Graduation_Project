import { Card, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardContainer from '../../../../Dashboard/owner/components/dashboard/CardContainer'
import getAllCities from '../../../../../API/city/getAllCities'
import getAllUniversities from '../../../../../API/university/getAllUniversities'
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PeopleIcon from '@mui/icons-material/People';
import CitiesGrowthChart from './CitiesGrowthChart'
import UniversitiesGrowthChart from './UniversitiesGrowthChart'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ApartmentsCitiesChart from './ApartmentsCitiesChart'
import ApartmentsUniversitiesChart from './ApartmentsUniversitiesChart'
import getAllApartments from '../../../../../API/apartments/getAllApartments'
import getNumberOfUsersForAdmin from '../../../../../API/users/getNumberOfUsersForAdmin'

function DashAdmin() {
    const[citiesList,setCitiesList]=useState([])
    const[apartments,setApartments]=useState([])
    const[universitiesList,setUniversitiesList]=useState([])
    const[totalUsers,setTotalUsers]=useState(0)
    useEffect(()=>{
        getAllApartments('',{setApartments})
        getAllCities({setCitiesList})
        getNumberOfUsersForAdmin({setTotalUsers})
        getAllUniversities({setUniversitiesList})
    },[])
  return (
    <Grid item container xs={11} md={9} lg={10} sx={{p:2,backgroundColor:'rgba(211,211,211,0.15)'}} >
        <Grid item container xs={12}>
            <CardContainer  icon={<PeopleIcon  />} count={totalUsers} label="All Users"/>
            <CardContainer  icon={<HomeIcon  />} count={apartments} label="All Apartments"/>
            <CardContainer  icon={<LocationCityIcon  />} count={citiesList ? citiesList.length :0} label="All Cities"/>
            <CardContainer  icon={<AccountBalanceIcon  />} count={universitiesList ? universitiesList.length :0} label="All Universities"/>   
        </Grid>
        <Grid item container xs={12} sx={{display:'flex',alignItems:'center'}}>
            <Grid item xs={12} lg={6} sx={{p:1.5}}>
                <Card sx={{p:1.5,display:'flex',alignItems:'center',justifyContent:'center',height:'400px'}}> 
                    <ApartmentsCitiesChart citiesList={citiesList} />
                </Card>
            </Grid>
            <Grid item xs={12}  lg={6} sx={{p:1.5}}>
                <Card sx={{p:1.5,display:'flex',alignItems:'center',justifyContent:'center',height:'400px'}}>
                <CitiesGrowthChart citiesList={citiesList}/>
                </Card>
            </Grid>
        </Grid>
        <Grid item container xs={12}>
        <Grid item xs={12} lg={6} sx={{p:1.5}}>
                <Card sx={{p:1.5,display:'flex',alignItems:'center',justifyContent:'center',height:'400px'}}>
                <UniversitiesGrowthChart universitiesList={universitiesList} />
                </Card>
            </Grid>
        <Grid item xs={12} lg={6} sx={{p:1.5}}>
                <Card sx={{p:1.5,display:'flex',alignItems:'center',justifyContent:'center',height:'400px'}}> 
                    <ApartmentsUniversitiesChart universitiesList={universitiesList}  />
                </Card>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default DashAdmin
