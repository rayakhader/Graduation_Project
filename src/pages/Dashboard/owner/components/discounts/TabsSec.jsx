import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

function TabsSec({tabValue,setTabValue}) {
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue); };
  return (
    <Box sx={{backgroundColor:'white',borderRadius:'10px'}}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label='Not Added' value='notAdded' />
          <Tab label='Added' value='added' />
        </Tabs>
      </Box>
  )
}

export default TabsSec
