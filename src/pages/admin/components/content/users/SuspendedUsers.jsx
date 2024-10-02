import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, Pagination, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import SuspendedUserItem from './SuspendedUserItem';
import ViewUser from './ViewUser';
import Empty from '../../../../Dashboard/owner/components/ownerApartments/components/notEmptyState/ownerApartmentViewer/Empty';
import getAllSuspendedUsers from '../../../../../API/suspend/getAllSuspendedUsers';
import { useToken } from '../../../../../globalContext/TokenContext';
import { useSuspendedUsers } from './context/refreshSuspendedUsers';

function SuspendedUsers() {
  const [usersPerPage, setUsersPerPage] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [itemsPerPage] = useState(8)
  const [viewUser, setViewUser] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState('')
  const { token } = useToken()
  const { refresh } = useSuspendedUsers()

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }
  const handleViewUser = (id) => {
    setViewUser(true)
    setSelectedUserId(id)
  }
  const fetchUsers = (page) => {
    getAllSuspendedUsers(token, page, itemsPerPage, { setUsersPerPage, setTotalPages, setTotalUsers }).finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)
    fetchUsers(currentPage)
  }, [currentPage, refresh])

  return (
    <Grid item container xs={11} md={9} lg={10} sx={{ p: 2, backgroundColor: 'rgba(211,211,211,0.15)' }} >
      <Box sx={{ width: '100%', backgroundColor: 'white', p: 1.5, borderRadius: '4px' }}>
        <Box sx={{ width: '100%', backgroundColor: 'rgba(211,211,211,0.15)', p: 1.5, borderRadius: '20px', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Suspended users</Typography>
          <Typography color='textSecondary'>({totalUsers})</Typography>
        </Box>
        <Box sx={{ width: '100%', p: 1.5 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="suspended users table">
              <TableHead sx={{backgroundColor:'rgba(211,211,211,0.15)'}}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Apartment</TableCell>
                  <TableCell>Start date</TableCell>
                  <TableCell>End date</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!loading ? (
                  usersPerPage.length > 0 ? (
                    usersPerPage.map((item) => (
                      <SuspendedUserItem key={item.userId} item={item} handleViewUser={handleViewUser} />
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} align="center">
                        <Empty label="No Users Found" />
                      </TableCell>
                    </TableRow>
                  )
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {!loading && totalUsers > 0 && (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ mt: 2, justifyContent: 'center', display: 'flex', alignItems: 'center' }}
          />
        )}
      </Box>
      <ViewUser viewUser={viewUser} setViewUser={setViewUser} selectedUserId={selectedUserId} />
    </Grid>
  )
}

export default SuspendedUsers
