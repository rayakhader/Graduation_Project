import { Box, CircularProgress, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useExpanded } from '../../../context/ExpandedSidebar'
import FollowerItem from './FollowerItem';
import FollowersListHeader from './FollowersListHeader';
import getFollowersByUserId from '../../../../../API/followers/getFollowersByUserId';
import userIdFromToken from '../../../../../customHook/userIdFromToken';
import { useToken } from '../../../../../globalContext/TokenContext';

function Followers() {
  const { expanded } = useExpanded()
  const [followersList, setFollowersList] = useState([])
  const [userId, setUserId] = useState('')
  const [loading, setLoading] = useState(true)
  const { token } = useToken()

  useEffect(() => {
    if(token){
    userIdFromToken(token, setUserId)
    }
  }, [token])

  useEffect(() => {
    if (userId) {
      setLoading(true)
      getFollowersByUserId(userId, { setFollowersList }).finally(() => setLoading(false))
    }
  }, [userId])

  return (
    <Grid container item xs={expanded ? 8 : 10.5} sm={expanded ? 8 : 10.9} md={expanded ? 9 : 11.3} lg={expanded ? 10 : 11.55} sx={{ backgroundColor: 'rgba(211, 211, 211, 0.13)', px: 2, color: 'black' }}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', my: 2, borderRadius: '20px', p: 1.5, backgroundColor: 'rgba(211,211,211,0.15)' }}>
        <Typography variant='h6'>Followers</Typography>
        <Typography color="textSecondary">({followersList.length})</Typography>
      </Box>
      <Grid item container xs={12} sx={{ px: 1.5, borderRadius: '4px' }}>
        <Grid item container xs={12} sx={{ backgroundColor: 'white' }}>
          <TableContainer component={Paper} sx={{ maxHeight: 500, overflow: 'auto' }}>
            <Table sx={{ minWidth: 650 }} aria-label="followers table">
              <TableHead>
                <FollowersListHeader />
              </TableHead>
              <TableBody>
                {!loading ? (
                  followersList.length > 0 ? (
                    followersList.map((follower) => (
                      <FollowerItem key={follower.id} follower={follower} />
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        <Typography variant='body2' color='textSecondary'>No followers found</Typography>
                      </TableCell>
                    </TableRow>
                  )
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Followers
