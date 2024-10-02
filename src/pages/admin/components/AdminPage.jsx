import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminDash from '../components/adminDash/components/AdminDash';
import { Outlet, useNavigate } from 'react-router-dom';
import { useToken } from '../../../globalContext/TokenContext';
import { useNavigation } from '../../../customHook/useNavigation';
import { useRole } from '../../../globalContext/RoleContext';
import SessionEnd from './SessionEnd';
import Cookies from 'js-cookie';
import { useRefreshToken } from '../../../globalContext/RefreshTokenContext';

function AdminPage() {
  const { token } = useToken();
  const { refreshToken } = useRefreshToken();
  const { clickLogin } = useNavigation();
  const { userRole } = useRole();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [wasRefreshed, setWasRefreshed] = useState(false);  

  const handleRemoveRefresh = async () => {
    Cookies.remove('refreshToken');
  };

  const handleCloseDialog = (event, reason) => {
    if (reason !== 'backdropClick') {
      setIsDialogOpen(false);
    }
  };

  const handleLogin = () => {
    setIsDialogOpen(false);
    handleRemoveRefresh();
  };

  useEffect(() => {
    if (!isRefreshing && !wasRefreshed) {
      if (!token && refreshToken) {
        setIsDialogOpen(true);
      } else if (token) {
        if (userRole === 'Owner' || userRole === 'Customer') {
          navigate('/', { replace: true });
        }
      } else if (!refreshToken && !token && !userRole) {
        clickLogin();
      }
    }
  }, [token, userRole, refreshToken, clickLogin, navigate, isRefreshing, wasRefreshed]);

  const handleRefreshComplete = () => {
    setIsRefreshing(false);
    setWasRefreshed(true);
    setIsDialogOpen(false);
  };

  return (
    <Grid container sx={{ color: 'black' }}>
      <AdminDash setWasRefreshed={setWasRefreshed} />
      <Outlet />
      <SessionEnd
        open={isDialogOpen}
        handleClose={handleCloseDialog}
        handleLogin={handleLogin}
        onRefreshComplete={handleRefreshComplete}
        setIsRefreshing={setIsRefreshing}
      />
    </Grid>
  );
}

export default AdminPage;
