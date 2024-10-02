import {Box } from '@mui/material'
import React from 'react'
import ManageNotifications from '../../../../../stableLayoutComponent/navbar/navbarUser/ManageNotifications';
import Empty from '../ownerApartments/components/notEmptyState/ownerApartmentViewer/Empty';

function FollowNotifications({followNotifications}) {
  return (
    <Box sx={{maxHeight:'100vh',overflowY:'auto'}}>
    {followNotifications?.map((followNotification)=>(
       <ManageNotifications key={followNotification.id}  notification={followNotification}/>
    ))}
    {followNotifications?.length===0 && <Empty label="No new notification" />}
    </Box>

  )
}

export default FollowNotifications
