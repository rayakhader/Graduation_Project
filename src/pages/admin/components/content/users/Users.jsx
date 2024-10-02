import { Box, Grid, Typography, TextField, InputAdornment, Menu, MenuItem, Pagination, CircularProgress, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ViewUser from './ViewUser';
import getAllUsers from '../../../../../API/users/getAllUsers';
import Empty from '../../../../Dashboard/owner/components/ownerApartments/components/notEmptyState/ownerApartmentViewer/Empty';
import UserItem from './UserItem';
import UsersListHeader from './UsersListHeader';

function Users() {
  const [viewUser, setViewUser] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState('')
  const [usersPerPage, setUsersPerPage] = useState([])
  const [userName, setUserName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [itemsPerPage] = useState(8)
  const [filters, setFilters] = useState({
    status: '',
    role: ''
  })

  const handleViewUser = (id) => {
    setViewUser(true)
    setSelectedUserId(id)
  }

  const fetchUsers = (page, filters, userName) => {
    getAllUsers(page, itemsPerPage, filters, userName, { setUsersPerPage, setTotalPages, setTotalUsers }).finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)
    fetchUsers(currentPage, filters, userName)
  }, [currentPage, filters])

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }
  const handleFilter = (value) => {
    const filter = { status: value, role: '' }
    setFilters(filter)
    setCurrentPage(1)
  }
  const handleSearch = () => {
    setCurrentPage(1)
    fetchUsers(1, filters, userName);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Grid item container xs={11} md={9} lg={10} sx={{ p: 2, backgroundColor: 'rgba(211,211,211,0.15)' }} >
      <Box sx={{ width: '100%', backgroundColor: 'white', p: 1.5, borderRadius: '4px' }}>
        <Box sx={{ width: '100%', backgroundColor: 'rgba(211,211,211,0.15)', p: 1.5, borderRadius: '20px', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>All users</Typography>
          <Typography color='textSecondary'>({totalUsers})</Typography>
        </Box>
        <Box sx={{ width: '100%', p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <TextField
            placeholder='Search by name'
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{ '& .MuiOutlinedInput-root': { backgroundColor: 'white', borderRadius: '4px' } }}
          />
          <Box>
            <Box
              onClick={handleClick}
              sx={{
                border: '1px solid rgba(211,211,211,1)',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '4px',
                p: 1.5,
                minHeight: '10px',
                cursor: 'pointer'
              }}
            >
              <TuneIcon />
              <Typography sx={{ p: 0.5 }}>Filters</Typography>
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem disabled>
                <Typography variant="subtitle2">Status</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleFilter('')}>All</MenuItem>
              <MenuItem onClick={() => handleFilter('active')}>Active</MenuItem>
              <MenuItem onClick={() => handleFilter('suspended')}>Suspended</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box sx={{ width: '100%', px: 1.5 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="users table">
              <TableHead sx={{backgroundColor:'rgba(211,211,211,0.15)'}}>
                <UsersListHeader />
              </TableHead>
              <TableBody>
                {!loading ? (
                  usersPerPage.length > 0 ? (
                    usersPerPage.map((user) => (
                      <UserItem key={user.id} user={user} handleViewUser={handleViewUser} />
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        <Empty label="No Users Found" />
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
          {!loading && totalUsers > 0 && (
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              sx={{ mt: 2, justifyContent: 'center', display: 'flex', alignItems: 'center' }}
            />
          )}
        </Box>
      </Box>
      <ViewUser viewUser={viewUser} setViewUser={setViewUser} selectedUserId={selectedUserId} />
    </Grid>
  )
}

export default Users
