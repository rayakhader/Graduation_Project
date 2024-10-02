import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getUserByIdProfile from '../../../API/users/getUserByIdProfile'
import OwnerProfile from './OwnerProfile'
import CustomerProfile from './CustomerProfile'
import { useToken } from '../../../globalContext/TokenContext'
import { useNavigation } from '../../../customHook/useNavigation'

function ViewProfile() {
  const {id}= useParams()
  const[userInfo,setUserInfo]=useState({})
  const {token}=useToken()
  const {clickWelcomePage}=useNavigation()
  useEffect(()=>{
    if(id){
    getUserByIdProfile(id,{setUserInfo})
    }
  },[id])
  useEffect(()=>{
    if(!token){
      clickWelcomePage()
    }
  },[token])
  return (
    <div>
     {userInfo.roleName==='Owner' ? <OwnerProfile userInfo={userInfo} /> :<CustomerProfile userInfo={userInfo} /> } 
    </div>
  )
}

export default ViewProfile
