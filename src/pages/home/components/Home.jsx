import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress, Stack, Pagination, PaginationItem, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilterAbove from './filter/filterAbove/components/FilterAbove';
import FilterSidebar from './filter/filterSidebar/components/FilterSidebar';
import ApartmentViewer from './apartmentViewer/components/mainViewer/ApartmentViewer';
import GuestDialog from './GuestDialog';
import Footer from '../../../stableLayoutComponent/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import getApartmentsPerPage from '../../../API/apartments/getApartmentsPerPage';
import { useFilters } from '../context/Filters';
import { useSorts } from '../context/Sorts';
import { useApartmentsPerPage } from '../context/ApartmentsPerPage';
import '../style/home.css';
import useResetFiltersOnNavigation from '../customHook/useResetFiltersOnNavigation';

function Home() {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const { apartmentsPerPage, setApartmentsPerPage } = useApartmentsPerPage();
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { filters, setFilters } = useFilters();
  const { sort, setSort } = useSorts('');
   useResetFiltersOnNavigation()
  const fetchApartments = (page, filters, sort, itemsPerPage) => {
    getApartmentsPerPage(page, itemsPerPage, filters, sort, { setApartmentsPerPage, setTotalPages }).finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    fetchApartments(currentPage, filters, sort, itemsPerPage);
  }, [currentPage, filters, sort, itemsPerPage]);
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };
  const handleSortChange = (newSort) => {
    setSort(newSort);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1); 
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: 'white',mb:40}}>
        <FilterAbove sort={sort} onSortChange={handleSortChange} />
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', mb: 10, px: { xs: 2, lg: 0 } }}>
          <FilterSidebar onFilterChange={handleFilterChange} />
          {loading ? (
            <Grid item container sx={{ px: { lg: 2 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }} xs={12} sm={6} md={10} >
              <CircularProgress />
            </Grid>
          ) : (
            <ApartmentViewer apartments={apartmentsPerPage} />
          )}
        </Grid>
        {!loading && totalPages !== 0 && (
          <Stack sx={{display: 'flex',flexDirection:'row',gap:2, alignItems: 'center', justifyContent: 'center', p: 1.5 }}>
            <FormControl variant="outlined" sx={{ maxWidth: 120}}>
              <Select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={24}>24</MenuItem>
              </Select>
            </FormControl>
            <Pagination
              sx={{ border: '1px solid rgba(211,211,211,1)', borderRadius: '4px', p: 1.5 }}
              count={totalPages}
              page={currentPage}
              onChange={(e, value) => setCurrentPage(value)}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        )}
      </Container>
      <GuestDialog />
      <Footer />
    </>
  );
}

export default Home;
