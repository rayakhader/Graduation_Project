import React, { useEffect, useRef, useState } from 'react';
import { scrollToSection } from '../../Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box, Grid, Tabs, Tab, useMediaQuery, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useNavigation } from '../../../customHook/useNavigation.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar } from '@mui/material';
import MenuSec from './MenuSec.jsx';
import { useToken } from '../../../globalContext/TokenContext.jsx';
import { jwtDecode } from 'jwt-decode';
import { useAnchorElement } from './context/AnchorElement.jsx';
import getUserByIdNav from '../../../API/users/getuserByIdNav.js';
import { useRefreshAccount } from '../../../pages/settings/components/Account/context/RefreshAccount.jsx';
import NotificationIcon from './NotificationIcon.jsx';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import handleLogout from '../handleLogout.js';
import logo from '../../../images/newlogo.png'
function NavbarUser() {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({});
  const { handleClick } = useAnchorElement();
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isXsOrSmOrMd = useMediaQuery(theme.breakpoints.down('md'));
  const { clickWelcomePage, clickFavorite, clickHome,clickDashboard,clickSettings,clickNotifications } = useNavigation();
  const { token } = useToken();
  const { refresh } = useRefreshAccount();
  const [navHeight, setNavHeight] = useState(0);
  const updateNavHeight = () => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  };  const navRef = useRef(null)
  useEffect(() => {
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);

    return () => {
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenuClick = (action) => {
    action();
    handleDrawerClose();
  };
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const userId = decoded['userId'];
      getUserByIdNav(userId, { setUserInfo });
    }
  }, [refresh]);
  const isDashboard = location.pathname.includes('/dashboard');
  return (
    <>
      <AppBar ref={navRef} color="default" elevation={0} sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', backgroundColor: '#1976d2', zIndex: 1201 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isXsOrSmOrMd ? (
              <>
                <IconButton size="large" edge="start" aria-label="menu" onClick={handleDrawerOpen} sx={{ color: 'white' }}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="left" sx={{zIndex:1202,position:'relative'}} open={drawerOpen} onClose={handleDrawerClose}>
                <Box sx={{display:'flex',justifyContent:'end',alignItems:'center',p:1}}>
                <IconButton  sx={{border:'1px solid rgba(211,211,211,1)',borderRadius:0}} edge="start" color="inherit" aria-label="close" onClick={handleDrawerClose}>
                    <CloseIcon />
                </IconButton>
                </Box>
                  <Box sx={{ width: 250 }}>
                    <List>
                      <ListItem button onClick={() => handleMenuClick(clickHome)}>
                        <ListItemIcon>
                          <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItem>
                      {!isDashboard && (
                        <>
                          <ListItem button onClick={() => handleMenuClick(() => scrollToSection('footer'))}>
                            <ListItemIcon>
                              <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="About Us" />
                          </ListItem>
                          <ListItem button onClick={() => handleMenuClick(() => scrollToSection('footer'))}>
                            <ListItemIcon>
                              <ContactMailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact Us" />
                          </ListItem>
                        </>
                      )}
                      <Divider />
                      <ListItem button onClick={() => handleMenuClick(clickFavorite)}>
                        <ListItemIcon>
                          <FavoriteBorderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Favorite" />
                      </ListItem>
                      <ListItem button onClick={()=>handleMenuClick(clickNotifications)}>
                        <ListItemIcon>
                          <NotificationsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                      </ListItem>
                      <Divider />
                      <ListItem button onClick={() => handleMenuClick(clickDashboard)} >
                        <ListItemIcon>
                          <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                      </ListItem>
                      <ListItem button onClick={() => handleMenuClick(clickSettings)} >
                        <ListItemIcon>
                          <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log out" onClick={()=>{handleLogout(clickWelcomePage);handleDrawerClose()}}/>
                      </ListItem>
                    </List>
                  </Box>
                </Drawer>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={clickWelcomePage}>
                  <Avatar src={logo} alt="logo" sx={{ height: '50px', width: '150px' }} />
                </Box>
                <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', ml: 'auto' }}>
                      <Avatar src={userInfo.imagePath} sx={{ width: 40, height: 40 }} />
                </Box>
              </>
            ) : (
              <>
                <Grid container alignItems="center" justifyContent="space-between" flexWrap="nowrap">
                  <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={clickWelcomePage}>
                   <Avatar src={logo} alt="logo" sx={{ height: '50px', width: '150px' }} />
                  </Box>
                  </Grid>
                  <Grid item>
                    <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary" centered sx={{
                      '.MuiTabs-indicator': { backgroundColor: 'white' },
                      '.MuiButtonBase-root': { color: 'white' }
                    }}>
                      <Tab label="Home" onClick={clickHome} />
                      {!isDashboard && <Tab label="About Us" onClick={() => scrollToSection('footer')} />}
                      {!isDashboard && <Tab label="Contact Us" onClick={() => scrollToSection('footer')} />}
                    </Tabs>
                  </Grid>
                  <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center', '& > *': { ml: 2 }, color: 'white' }}>
                <IconButton onClick={clickFavorite} color="inherit" sx={{  backgroundColor: 'rgba(255,255,255,0.1)',mr:2 }}>
                  <FavoriteBorderIcon />
                </IconButton>
                <NotificationIcon userId={userInfo.id} />
                <Avatar src={userInfo.imagePath} sx={{ width: 40, height: 40,cursor:'pointer'}}  onClick={handleClick}  />
                <MenuSec userInfo={userInfo} />
              </Box>
            </Grid>
                </Grid>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ marginTop: `${navHeight}px` }}>
        <Outlet />
      </div>
    </>
  );
}
export default NavbarUser;
