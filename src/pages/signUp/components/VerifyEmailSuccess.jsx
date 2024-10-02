import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import { useNavigate } from 'react-router-dom';
import confirmEmailAPI from '../../../API/Identity/confirmEmailAPI';
import ErrorPage from './ErrorPage';
import useResetFiltersOnNavigation from '../../home/customHook/useResetFiltersOnNavigation';

function VerifyEmailSuccess() {
  const searchParams = new URLSearchParams(window.location.search);
  const token= searchParams.get('token')
  const email=searchParams.get('Email')
  const navigate = useNavigate()
  const [error,setError]=useState('')
  const[loading,setLoading]=useState(true)
  useEffect(() => {
    setLoading(true)
    if(email && token ){
    confirmEmailAPI(email, token,navigate,{setError}).finally(()=>setLoading(false))
    }
  else{
    setLoading(false)
    setError('Not Found')
  }
  }, [email, token, navigate]);
  useResetFiltersOnNavigation()
  return (
    <>
         {!loading && (!error?(<Grid item container xs={12} sx={{backgroundColor:'rgba(211,211,211,0.15)',height:'100vh'}}>
           <Box sx={{width:{xs:'80%',md:'60%',lg:'30%'},boxShadow:5,border:'1px solid rgba(211,211,211,1)',p:1.5,margin:'auto',backgroundColor:'white',borderRadius:'4px'}}>
               <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',p:1.5}}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{rotate:'-10deg'}}>
                       <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="#1976D2"/>
                     </svg>
                        <Typography variant='h6'>Verification Email</Typography>
                    </Box>
                    </Box>
                    <Divider sx={{border:'1px solid rgba(211,211,211,1)',width:'100%'}} />
                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',p:1.5}}>
                        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',p:1.5}}>
                        <CheckCircleIcon sx={{color:'#1976d2',height:50,width:50}} />
                        <Typography variant='h6' color='text.main'>Verified</Typography>
                        </Box>
                    </Box>
                    <Box sx={{width:'100%',p:1.5}}>
                        <Typography variant='body2' color='textSecondary' sx={{textAlign:'center'}}>You have successfully verified email</Typography>
                    </Box>
                </Box>
        </Grid>):<ErrorPage error={error} />)}
        </>
  )
}
export default VerifyEmailSuccess
