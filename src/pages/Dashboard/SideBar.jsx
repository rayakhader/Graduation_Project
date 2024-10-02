import React, { useEffect } from 'react'
import { useRole } from '../../globalContext/RoleContext'
import SideBarOwner from './owner/components/SideBarOwner'
import SideBarCustomer from './customer/components/SideBarCustomer'
import { useToken } from '../../globalContext/TokenContext'
import { useNavigation } from '../../customHook/useNavigation'
import useResetFiltersOnNavigation from '../home/customHook/useResetFiltersOnNavigation'

function SideBar() {
    const {userRole}=useRole()
    const {token}=useToken()
    const{clickAdmin,clickWelcomePage}=useNavigation()
    useEffect(()=>{
      if(!token){
        clickWelcomePage()
      }else{
        if(userRole==='Admin'){
          clickAdmin()
        }
      }
    },[token,userRole])
    useResetFiltersOnNavigation()
  return (
       userRole==='Customer' ? <SideBarCustomer /> : <SideBarOwner />
  )
}

export default SideBar
