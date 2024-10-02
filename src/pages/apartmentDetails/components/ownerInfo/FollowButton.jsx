import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { useToken } from '../../../../globalContext/TokenContext';
import followOwner from '../../../../API/follow/followOwner';
import unfollowOwner from '../../../../API/follow/unfollowOwner';

function FollowButton({ ownerId, senderId }) {
    const [isFollowing,setIsFollowing]=useState(false)
    const {token}=useToken()
    useEffect(() => {
        const checkFollowStatus = async () => {
            try {
                const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/user-following/following/${senderId}`,{
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:`Bearer ${token}`
                      },
                });
                const followingList = response.data
                setIsFollowing(followingList.some(user => user.id === ownerId.toLowerCase()))
            } catch (error) {
                console.error('Failed to fetch follow status', error);
                setIsFollowing(false);
            }
        };
        if(ownerId && senderId){
        checkFollowStatus();}
    }, [ownerId, senderId]);
    const handleFollowClick = async () => {
        if(ownerId){
        if (isFollowing) {
            unfollowOwner(token,ownerId)
        } else {
            console.log('follow')
            followOwner(token,ownerId)
        }
        setIsFollowing(!isFollowing);
    }
    };
    return  <Button onClick={handleFollowClick} sx={{backgroundColor:'white',color:'#1976d2',p:1,fontSize:10,fontWeight:'bold', '&:hover': {
        backgroundColor: 'white', 
        color: '#1976d2', 
      },}}> {isFollowing ? 'Unfollow' : 'Follow'}</Button>;
}

export default FollowButton;
