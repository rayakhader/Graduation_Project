import { Box } from '@mui/material'
import React from 'react'
import ManageNotifications from '../../../../../stableLayoutComponent/navbar/navbarUser/ManageNotifications';
import Empty from '../ownerApartments/components/notEmptyState/ownerApartmentViewer/Empty';

function ApartmentNotifications({addApartmentNotifications}) {
  return (
    <Box sx={{maxHeight:'100vh',overflowY:'auto'}}>
    {addApartmentNotifications?.map((addApartmentNotification)=>(
        <ManageNotifications key={addApartmentNotification.id} notification={addApartmentNotification}/>
    ))}
     {addApartmentNotifications?.length===0 && <Empty label="No new notification" />}
    </Box>
  )
}

export default ApartmentNotifications
