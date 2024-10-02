import React, { useEffect, useState } from 'react';
import { Badge, IconButton, Popover, List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useToken } from '../../../globalContext/TokenContext';
import getAllNotifications from '../../../API/notifications/getAllNotifications';
import ManageNotifications from './ManageNotifications';
import { useNotificationRefresh } from './context/NotificationRefresh';

function NotificationIcon({userId}) {
    const [notificationsCount, setNotificationsCount] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const {token}=useToken
    const{refresh}=useNotificationRefresh()
    useEffect(() => {
        let interval;
        if (userId) {
            getAllNotifications(token, userId, '','', { setNotifications, setNotificationsCount });
            interval = setInterval(() => {
                getAllNotifications(token, userId, '','', { setNotifications, setNotificationsCount });
            }, 1000); 
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [userId, refresh, token]);
    const handleIconClick = (event) => {
        if (anchorEl) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <IconButton onClick={handleIconClick} color="inherit" sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <Badge badgeContent={notificationsCount} color="error" anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                 <Box sx={{ minWidth: 400}}>
                    <Box sx={{ p: 1.5, borderBottom: '1px solid rgba(211,211,211,1)'}}>
                        <Typography fontWeight='bold' textAlign='start'>Notifications</Typography>
                    </Box>
                    <Box sx={{ maxHeight: 300, overflowY: 'auto'}}>
                        <List sx={{ bgcolor: 'background.paper',py:0 }}>
                            {notifications.length > 0 ? (
                                notifications.map((notification, index) => (
                                    <ManageNotifications key={index} notification={notification} />
                                ))
                            ) : (
                                <ListItem>
                                    <ListItemText primary="No new notifications" />
                                </ListItem>
                            )}
                        </List>
                    </Box>
                </Box>
            </Popover>
        </>
    );
}

export default NotificationIcon;
