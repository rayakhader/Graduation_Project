import { Box } from '@mui/material'
import React from 'react'
import Empty from '../ownerApartments/components/notEmptyState/ownerApartmentViewer/Empty';
import ManageNotifications from '../../../../../stableLayoutComponent/navbar/navbarUser/ManageNotifications';

function AllNotifications({notificationsList}) {
  return (
    <Box sx={{maxHeight:'100vh',overflowY:'auto'}}>
    {notificationsList?.map((notification)=>(
         <ManageNotifications key={notification.id} notification={notification} />
    ))}
    {notificationsList?.length===0 && <Empty label="No new notification" />}
    </Box>
  )
}

export default AllNotifications
