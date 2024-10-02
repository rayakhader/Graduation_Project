import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography, Box } from '@mui/material';
import Cookies from 'js-cookie';
import refreshToken from '../../../API/Identity/refreshToken';
import StayActiveIcon from '@mui/icons-material/CheckCircle';
import ExitIcon from '@mui/icons-material/ExitToApp';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

function SessionEnd({ open, handleClose, handleLogin,onRefreshComplete,setIsRefreshing }) {
  const handleRefreshToken = async () => {
    const refresh = Cookies.get('refreshToken');
    setIsRefreshing(true)
    try {
       refreshToken(refresh,onRefreshComplete).finally(()=>{onRefreshComplete()})
    } catch (error) {
      console.error('Failed to refresh token', error);
      setIsRefreshing(false)
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '16px',
          padding: '16px',
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NotificationImportantIcon sx={{ color: '#f44336', marginRight: '8px' }} />
          <Typography variant="h6" component="div">
            Session Expired
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{ color: '#333', fontSize: '16px' }}>
          Your session has expired. Would you like to stay logged in?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', paddingBottom: '16px' }}>
        <Button
          onClick={handleRefreshToken}
          variant="contained"
          color="primary"
          startIcon={<StayActiveIcon />}
          sx={{
            textTransform: 'none',
            backgroundColor: '#4caf50',
            '&:hover': {
              backgroundColor: '#388e3c',
            },
          }}
        >
          Stay Active
        </Button>
        <Button
          onClick={handleLogin}
          variant="outlined"
          color="secondary"
          startIcon={<ExitIcon />}
          sx={{
            textTransform: 'none',
            color: '#f44336',
            borderColor: '#f44336',
            '&:hover': {
              borderColor: '#d32f2f',
              backgroundColor: '#fce4ec',
            },
          }}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SessionEnd;
