import React, { useEffect, useState } from 'react';
import { Box, Grid, Button, Typography, Pagination,CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useExpanded } from '../../../../../context/ExpandedSidebar';
import { useNavigation } from '../../../../../../../customHook/useNavigation';
import paginationStyle from '../../style/paginationStyle';
import { useToken } from '../../../../../../../globalContext/TokenContext';
import getApartmentsByOwnerId from '../../../../../../../API/apartments/getApartmentsByOwnerId';
import HeaderSec from './HeaderSec';
import TabsSec from './TabsSec';
import OwnerApartmentViewer from './ownerApartmentViewer/OwnerApartmentViewer';
import Empty from './ownerApartmentViewer/Empty';
import Searchbar from './searchBar/components/Searchbar';
import { useOwnerApartmentRefresh } from './context/OwnerApartmentRefresh';
import handleAddApartment from './handleAddApartment';
import userIdFromToken from '../../../../../../../customHook/userIdFromToken';
import SuspensionDialog from './SuspensionDialog';
import { useRefreshApartments } from './ownerApartmentViewer/ManageSec/context/RefreshApartments';
import Success from '../Success';

function NotEmptyState() {
  const { token } = useToken();
  const [tabValue, setTabValue] = useState('all');
  const [apartmentsList, setApartmentsList] = useState([]);
  const [availableApartments, setAvailableApartments] = useState([]);
  const [notAvailableApartments, setNotAvailableApartments] = useState([]);
  const [visibleApartments, setVisibleApartments] = useState([]);
  const [notVisibleApartments, setNotVisibleApartments] = useState([]);
  const [discountedApartments, setDiscountedApartments] = useState([]);
  const { refresh } = useOwnerApartmentRefresh();
  const { refreshAddDiscount,refreshDeleteDiscount } = useRefreshApartments();
  const [ownerId, setOwnerId] = useState('');
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [suspensionDialog, setSuspensionDialog] = useState(false);
  const [suspensionInfo, setSuspensionInfo] = useState({});
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    userIdFromToken(token, setOwnerId);
  }, [token]);

  useEffect(() => {
    if (ownerId) {
      setLoading(true)
      getApartmentsByOwnerId(token, ownerId, { setApartmentsList, setAvailableApartments, setNotAvailableApartments, setVisibleApartments, setNotVisibleApartments, setDiscountedApartments }).finally(()=>setLoading(false))
    }
  }, [ownerId, refresh, refreshAddDiscount,refreshDeleteDiscount]);
  
  const currentDisplayedApartments = 
                                     tabValue === 'all' ? apartmentsList :
                                     tabValue === 'available' ? availableApartments :
                                     tabValue === 'unavailable' ? notAvailableApartments :
                                     tabValue === 'visible' ? visibleApartments :
                                     tabValue === 'invisible' ? notVisibleApartments :
                                     discountedApartments;
  const DisplayedApartments= filteredApartments 
  const [page, setPage] = useState(1);
  const apartmentPerPage = 8;
  const startIndex = (page - 1) * apartmentPerPage;
  const selectedApartment = DisplayedApartments.slice(startIndex, startIndex + apartmentPerPage);
  const { expanded } = useExpanded();
  const { clickAddApartment } = useNavigation();
  const [success,setSuccess]=useState(false)

  return (
    <>
      <Grid item container xs={12} sx={{ position: 'relative', color: '#000'}}>
        <HeaderSec apartmentList={apartmentsList} />
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', borderRadius: '150px', p: 1.5, py: 0, backgroundColor: 'rgba(211,211,211,0.15)', mb: 2 }}>
          <Searchbar currentDisplayedApartments={currentDisplayedApartments} setFilteredApartments={setFilteredApartments} tabValue={tabValue} ownerId={ownerId} />
          <Button onClick={() => handleAddApartment(token, clickAddApartment, ownerId, setSuspensionInfo, setSuspensionDialog)} variant="contained"  startIcon={<AddIcon />} sx={{ borderRadius: '20px', color: 'white', ':hover': { backgroundColor: 'darkBlue' } }}>
            <Typography variant="button" sx={{ textTransform: 'none' }}>Add Apartment</Typography>
          </Button>
        </Box>
        <Grid item container sx={{ backgroundColor: 'rgba(211,211,211,0.15)', position: 'relative', borderRadius: '20px', p: 1.5 }} xs={12}>
          <TabsSec tabValue={tabValue} setTabValue={setTabValue} setPage={setPage} />
          { loading ? (
          <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        ) : (selectedApartment.length > 0 ? selectedApartment.map((apartment) => (
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ p: expanded ? 1.5 : 3.5 }} key={apartment.id}>
              <OwnerApartmentViewer apartment={apartment} setSuccess={setSuccess} />
            </Grid>
          )): <Empty label="No Apartments found" /> )}
        </Grid>
        {selectedApartment.length > 0 && <Box sx={{ display: 'flex',width:'100%',p:1.5, justifyContent: 'center',alignItems:'center'}}>
            <Pagination shape='rounded'
              sx={paginationStyle}
              count={Math.ceil(DisplayedApartments.length / apartmentPerPage)} page={page} onChange={(e, value) => setPage(value)} />
          </Box>}
      </Grid>
      {suspensionDialog && <SuspensionDialog suspensionDialog={suspensionDialog} setSuspensionDialog={setSuspensionDialog} suspensionInfo={suspensionInfo} />}
      {success && <Success label='Success' success={success} setSuccess={setSuccess} />}

    </>
  );
}

export default NotEmptyState;
