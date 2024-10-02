import { Box } from '@mui/material'
import React from 'react'
import ManageNotifications from '../../../../../stableLayoutComponent/navbar/navbarUser/ManageNotifications'
import Empty from '../ownerApartments/components/notEmptyState/ownerApartmentViewer/Empty'

function DiscountsNotifications({addDiscountNotifications}) {
  return (
    <Box sx={{maxHeight:'100vh',overflowY:'auto'}}>
    {addDiscountNotifications?.map((addDiscountNotifications)=>(
       <ManageNotifications   key={addDiscountNotifications.id}  notification={addDiscountNotifications}/>
    ))}
    {addDiscountNotifications?.length===0 && <Empty label="No new notification" />}
    </Box>
  )
}

export default DiscountsNotifications
