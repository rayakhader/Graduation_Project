import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

function TabsSec({tabValue,setTabValue,setPage}) {
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        setPage(1)};
  return (
    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={handleTabChange}  variant="scrollable"
                     scrollButtons="auto" allowScrollButtonsMobile sx={{textTransform:'none'}} >
                    <Tab label="All" value="all" sx={{textTransform:'none'}} />
                    <Tab label="Available" value="available" sx={{textTransform:'none'}} />
                    <Tab label="Unavailable" value="unavailable" sx={{textTransform:'none'}}  />
                    <Tab label="Visible" value="visible" sx={{textTransform:'none'}}  />
                    <Tab label="Invisible" value="invisible" sx={{textTransform:'none'}}  />
                    <Tab label="Discounted" value="discounted" sx={{textTransform:'none'}}  />
                </Tabs>
            </Box>
  )
}

export default TabsSec
