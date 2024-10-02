import { Box, CircularProgress, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useExpanded } from '../../../context/ExpandedSidebar'
import FollowingItem from './FollowingItem';
import FollowingListHeader from './FollowingListHeader';
import getFollowingByUserId from '../../../../../API/following/getFollowingByUserId';
import { useToken } from '../../../../../globalContext/TokenContext';
import userIdFromToken from '../../../../../customHook/userIdFromToken';
import { useFollowingRefresh } from './context/FollowingRefresh';

function Following() {
  const { expanded } = useExpanded()
  const [followingList, setFollowingList] = useState([])
  const [userId, setUserId] = useState('')
  const [loading, setLoading] = useState(true)
  const { token } = useToken()
  const { refresh } = useFollowingRefresh()

  useEffect(() => {
    userIdFromToken(token, setUserId)
  }, [token])

  useEffect(() => {
    if (userId) {
      setLoading(true)
      getFollowingByUserId(userId, { setFollowingList }).finally(() => setLoading(false))
    }
  }, [userId, refresh])

  return (
    <Grid container item xs={expanded ? 8 : 10.5} sm={expanded ? 8 : 10.9} md={expanded ? 9 : 11.3} lg={expanded ? 10 : 11.55} sx={{ backgroundColor: 'rgba(211, 211, 211, 0.13)', px: 2, color: 'black' }}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', my: 2, borderRadius: '20px', p: 1.5, backgroundColor: 'rgba(211,211,211,0.15)' }}>
        <Typography variant='h6'>Following</Typography>
        <Typography color="textSecondary">({followingList.length})</Typography>
      </Box>
      <Grid item container xs={12} sx={{ px: 1.5, borderRadius: '4px' }}>
        <Grid item container xs={12} sx={{ backgroundColor: 'white' }}>
          {!loading ? (followingList.length > 0 ? (
            <TableContainer component={Paper} sx={{ maxHeight: 500, overflow: 'auto' }}>
              <Table sx={{ minWidth: 650 }} aria-label="following table">
                <TableHead>
                  <FollowingListHeader />
                </TableHead>
                <TableBody>
                  {followingList.map((following) => (
                    <FollowingItem key={following.id} following={following} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(211,211,211,1)', justifyContent: 'center', width: '100%', p: 10 }}>
              <Typography variant='body2' color='textSecondary' sx={{ textAlign: 'center' }}>No following found</Typography>
            </Box>
          )) : (
            <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Following
