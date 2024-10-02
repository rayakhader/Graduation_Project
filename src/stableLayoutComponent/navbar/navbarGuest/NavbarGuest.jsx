import React, { useEffect, useRef, useState } from 'react';
import { scrollToSection } from '../../Footer.jsx';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box, Grid, Tabs, Tab, Avatar, useMediaQuery, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Container, Button } from '@mui/material';
import { useNavigation } from '../../../customHook/useNavigation.js';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import KeyIcon from '@mui/icons-material/Key';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import logo from '../../../images/newlogo.png'

function NavbarGuest() {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isXsOrSmOrMd = useMediaQuery(theme.breakpoints.down('md'));
  const { clickLogin, clickSignup, clickWelcomePage, clickHome } = useNavigation();
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null)

  const updateNavHeight = () => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }; 
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

  const drawerContent = (
    <>
      <ListItem button onClick={() => handleMenuClick(clickHome)}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
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
      <Divider />
      <ListItem button onClick={clickSignup}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText  primary="Sign Up" />
      </ListItem>
      <ListItem button onClick={clickLogin}>
        <ListItemIcon>
          <KeyIcon />
        </ListItemIcon>
        <ListItemText  primary="Login" />
      </ListItem>
    </>
  );

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
                <Drawer anchor="left" sx={{ zIndex: 1202,position:'relative'}} open={drawerOpen} onClose={handleDrawerClose}>
                <Box sx={{display:'flex',justifyContent:'end',alignItems:'center',p:1}}>
                  <IconButton sx={{border:'1px solid rgba(211,211,211,1)',borderRadius:0}}  edge="start" color="inherit" aria-label="close" onClick={handleDrawerClose}>
                            <CloseIcon />
                          </IconButton>
                  </Box>
                  <Box sx={{ width: 250}}>
                    <List>
                      {drawerContent}
                    </List>
                  </Box>
                </Drawer>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={clickWelcomePage}>
                  <Avatar src={logo} alt="logo" sx={{ height: '50px', width: '150px' }} />
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
                      <Tab label="About Us" onClick={() => scrollToSection('footer')} />
                      <Tab label="Contact Us" onClick={() => scrollToSection('footer')} />
                    </Tabs>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, ml: 'auto' }}>
                      <Button variant="outlined" sx={{ borderColor: 'rgba(255, 255, 255, 0.5)', color: 'white', ':hover': { borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' } }} onClick={clickSignup}>
                        Sign Up
                      </Button>
                      <Button variant="contained" sx={{ backgroundColor: 'white', color: '#1976d2', ':hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' } }} onClick={clickLogin}>
                        Login
                      </Button>
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
export default NavbarGuest;
