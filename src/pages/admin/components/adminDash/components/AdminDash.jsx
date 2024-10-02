import { Box, Divider, Drawer, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import LogoSec from '../components/LogoSec'
import DashContentSec from '../components/DashContentSec'
import MenuIcon from '@mui/icons-material/Menu';
function AdminDash({setWasRefreshed}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
    {isSmallScreen ?<Grid xs={1} item>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <IconButton size="large" edge="center" aria-label="menu" onClick={handleDrawerOpen} sx={{ color: '#1976d2' }}>
              <MenuIcon />
            </IconButton>
    </Box>
                <Drawer anchor="left" sx={{ zIndex: 1202,position:'relative'}} open={drawerOpen} onClose={handleDrawerClose}>
                  <Box sx={{ width: 250}}>
                  <LogoSec />
    <Divider sx={{border:'1px solid rgba(211,211,211,1)'}} />
    <DashContentSec setWasRefreshed={setWasRefreshed}/>
                  </Box>
                </Drawer>
              </Grid>  :
   <Grid item  md={3} lg={2} sx={{borderRight:'1px solid rgba(211,211,211,1)',borderBottom:'1px solid rgba(211,211,211,1)',borderRadius:'4px'}}>
    <LogoSec />
    <Divider sx={{border:'1px solid rgba(211,211,211,1)'}} />
    <DashContentSec setWasRefreshed={setWasRefreshed}/>
   </Grid>}
   </>
  )
}

export default AdminDash
