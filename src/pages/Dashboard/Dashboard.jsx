import React from 'react'
import { useRole } from '../../globalContext/RoleContext'
import DashCustom from './customer/components/dashboard/DashCustom'
import DashOwner from './owner/components/dashboard/DashOwner'

function Dashboard() {
    const {userRole}=useRole()
  return (
    userRole==='Customer' ? <DashCustom /> : <DashOwner />

  )
}

export default Dashboard
