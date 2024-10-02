import { Box, CircularProgress, Grid, Pagination, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ApartmentListHeader from './ApartmentListHeader';
import ApartmentItem from './ApartmentItem';
import getApartmentsForAdmin from '../../../../../../API/apartments/getApartmentsForAdmin';

function ApartmentAdmin() {
  const [apartmentsPerPage, setApartmentsPerPage] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(4)
  const [totalApartments, setTotalApartments] = useState(0)
  const [loading, setLoading] = useState(true)

  const fetchApartments = (page) => {
    getApartmentsForAdmin(page, itemsPerPage, { setApartmentsPerPage, setTotalPages, setTotalApartments }).finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)
    fetchApartments(currentPage)
  }, [currentPage])

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }

  return (
    <Grid item xs={11} md={9} lg={10} sx={{ p: 2, backgroundColor: 'rgba(211,211,211,0.15)' }}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', mb: 2, borderRadius: '20px', p: 1.5, backgroundColor: 'rgba(211,211,211,0.15)' }}>
        <Typography variant='h6'>All Apartments</Typography>
        <Typography color="textSecondary">({totalApartments})</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="apartments table">
          <TableHead sx={{backgroundColor:'rgba(211,211,211,0.15)'}}>
            <ApartmentListHeader />
          </TableHead>
          <TableBody>
            {!loading ? (
              totalApartments > 0 ? (
                apartmentsPerPage.map((apartment, index) => (
                  <ApartmentItem apartment={apartment} key={index} />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <Typography color='textSecondary'>No apartment exists</Typography>
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
      {!loading && totalApartments > 0 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ mt: 2, justifyContent: 'center', display: 'flex', alignItems: 'center' }}
        />
      )}
    </Grid>
  )
}

export default ApartmentAdmin
