import { Box, CircularProgress, Grid, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useExpanded } from '../../../context/ExpandedSidebar'
import HeaderSec from './HeaderSec';
import TabsSec from './TabsSec';
import getDiscountByUserId from '../../../../../API/discounts/getDiscountsByUserId';
import { useDiscountRefresh } from './context/RefreshDiscounts';
import { useToken } from '../../../../../globalContext/TokenContext';
import EmptyState from './EmptyState';
import DiscountItem from './DiscountItem';
import DiscountsViewerHeader from './DiscountsViewerHeader'
import Success from './Success';
import userIdFromToken from '../../../../../customHook/userIdFromToken';

function Discounts() {
  const { expanded } = useExpanded()
  const { refresh } = useDiscountRefresh()
  const [discountsList, setDiscountsList] = useState([])
  const { token } = useToken()
  const [tabValue, setTabValue] = useState('notAdded')
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const [totalPages, setTotalPages] = useState(0)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    if (token) {
      userIdFromToken(token, setUserId)
    }
  }, [token])

  useEffect(() => {
    if (userId) {
      setLoading(true)
      setCurrentPage(1)
      fetchDiscounts(1)
    }
  }, [userId, refresh, tabValue])

  const fetchDiscounts = (page) => {
    getDiscountByUserId(token, userId, page, itemsPerPage, tabValue, { setDiscountsList, setTotalPages }).finally(() => setLoading(false))
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (userId) {
      setLoading(true)
      fetchDiscounts(currentPage)
    }
  }, [currentPage])

  return (
    <Grid container item xs={expanded ? 8 : 10.5} sm={expanded ? 8 : 10.9} md={expanded ? 9 : 11.3} lg={expanded ? 10 : 11.55} sx={{ backgroundColor: 'rgba(211, 211, 211, 0.13)', px: 2, color: 'black' }}>
      <HeaderSec discountsList={discountsList} />
      <TabsSec tabValue={tabValue} setTabValue={setTabValue} />
      <Grid item container xs={12} sx={{ p: 1.5, backgroundColor: 'white' }}>
        <Box sx={{ maxHeight: '500px', overflow: 'auto', width: '100%' }}>
          {loading ? (
            <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="discounts table">
                <TableHead>
                  <DiscountsViewerHeader />
                </TableHead>
                <TableBody>
                  {discountsList.length > 0 ? discountsList.map((discount) => (
                    <DiscountItem key={discount.id} discount={discount} setSuccess={setSuccess} />
                  )) : (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        <EmptyState />
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
        {!loading && totalPages > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', p: 1.5, width: '100%' }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            />
          </Box>
        )}
      </Grid>
      {success && <Success label='Success' success={success} setSuccess={setSuccess} />}
    </Grid>
  )
}

export default Discounts
