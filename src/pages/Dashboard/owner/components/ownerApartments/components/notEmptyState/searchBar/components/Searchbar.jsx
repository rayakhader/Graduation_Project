import React, { useState, useEffect } from 'react';
import { Box, ClickAwayListener, InputAdornment, Paper, Tab, Tabs, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HandleCityUniversitySearch from './HandleCityUniversitySearch';
import { clearAllSuggestions } from './ClearAllSuggestions';
import tabsStyle from '../style/tabsStyle';
import { useSearchbar } from '../context/SearchbarContext';
import axios from 'axios';
import { useToken } from '../../../../../../../../../globalContext/TokenContext';

function Searchbar({ currentDisplayedApartments, setFilteredApartments, tabValue,ownerId }) {
  const { selectedTab, setSelectedTab, query, setQuery } = useSearchbar();
  const [citiesList, setCitiesList] = useState([]);
  const [universitiesList, setUniversitiesList] = useState([]);
  const categories = ['City', 'University'];
  const [paper, setPaper] = useState(false);
  const {token}=useToken()

  useEffect(() => {
    handleFilter(query, selectedTab,tabValue);
  }, [query, selectedTab,currentDisplayedApartments,tabValue]);

  const handleSearch = () => {
    setPaper(true);
  };

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleChangeSearch = (e) => {
    setQuery(e.target.value);
  };

  const clearSuggestions = (selectedTab, setUniversitiesList, setCitiesList) => {
    clearAllSuggestions(selectedTab, setUniversitiesList, setCitiesList);
  };

  const handleFilter = async (query, selectedTab,tabValue) => {
    if (query === '') {
      setFilteredApartments(currentDisplayedApartments);
      return;
    }
    let url = '';
    if (selectedTab === 0) {
      if(tabValue==='all'){
      url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=city.name%40%3D${query}`}
      else if(tabValue==='available'){
        url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=city.name%40%3D${query}`
      }else if (tabValue==='unavailable'){
        url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=city.name%40%3D${query}`
      }else if (tabValue==='visible'){
        url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=city.name%40%3D${query}`
      }else if (tabValue==='invisible'){
        url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=city.name%40%3D${query}`
      }else {
        url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=city.name%40%3D${query}`
      }
    } else if (selectedTab === 1) {
      if(tabValue==='all'){
        url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=nearbyUniversity.name%40%3D${query}`}
        else if(tabValue==='available'){
          url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=nearbyUniversity.name%40%3D${query}`
        }else if (tabValue==='unavailable'){
          url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=nearbyUniversity.name%40%3D${query}`
        }else if (tabValue==='visible'){
          url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=nearbyUniversity.name%40%3D${query}`
        }else if (tabValue==='invisible'){
          url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=nearbyUniversity.name%40%3D${query}`
        }else {
          url = `https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}?Filters=nearbyUniversity.name%40%3D${query}`
        }
    }
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const allApartments = response.data
      const availableApartments= allApartments.filter(apartment=>apartment.isAvailable===true)
      const notAvailableApartments =allApartments.filter(apartment=>apartment.isAvailable===false)
      const visibleApartments = allApartments.filter(apartment=>apartment.isVisible===true)
      const notVisibleApartments = allApartments.filter(apartment=>apartment.isVisible===false)
      const discountedApartments = allApartments.filter(apartment=>apartment.isDiscounted===true)
      if(tabValue==='all'){
        setFilteredApartments(allApartments);
      }
      else if(tabValue==='available'){
        setFilteredApartments(availableApartments)
      }else if(tabValue==='unavailable'){
        setFilteredApartments(notAvailableApartments)
      }else if (tabValue==='visible'){
        setFilteredApartments(visibleApartments)
      }else if (tabValue==='invisible'){
        setFilteredApartments(notVisibleApartments)
      }else{
        setFilteredApartments(discountedApartments)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <TextField
        value={query}
        onChange={handleChangeSearch}
        onClick={handleSearch}
        variant="outlined"
        placeholder="Search"
        margin="normal"
        InputProps={{
          endAdornment: (
            <Box>
              <InputAdornment position="end">
                {query && <CloseIcon onClick={() => setQuery('')} sx={{ cursor: 'pointer' }} />}
                <SearchIcon onClick={() => handleFilter(query, selectedTab)} sx={{ color: 'white', borderRadius: '20px', backgroundColor: '#1976d2', fontSize: '40px', p: 1, cursor: 'pointer', ml: 1 }} />
              </InputAdornment>
            </Box>
          ),
        }}
        sx={{
          '.MuiOutlinedInput-root': {
            borderRadius: '50px',
            backgroundColor: 'white',
          },
        }}
      />
      {paper && (
        <ClickAwayListener onClickAway={() => setPaper(false)}>
          <Paper sx={{ position: 'absolute', top: 160, left: 10, zIndex: 1 }}>
            <Typography color="textSecondary" sx={{ p: 2, textTransform: 'uppercase' }}>
              Search by
            </Typography>
            <Tabs
              value={selectedTab}
              onChange={handleChangeTab}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="search categories"
              TabIndicatorProps={{ style: { height: 0 } }}
              sx={tabsStyle}
            >
              <Tab label="City" key="City" icon={<LocationCityIcon sx={{ mr: 1 }} />} />
              <Tab label="University" key="University" icon={<AccountBalanceIcon sx={{ mr: 1 }} />} />
            </Tabs>
            <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-around', p: 2 }}>
              <Typography color="textSecondary" sx={{ fontSize: '12px' }}>
                Suggestions based on "{categories[selectedTab]}" category
              </Typography>
              <Typography onClick={() => { clearSuggestions(selectedTab, setUniversitiesList, setCitiesList); }} color="error" sx={{ textDecoration: 'underline', fontSize: '12px', ml: 1.5, cursor: 'pointer' }}>
                Clear all
              </Typography>
            </Box>
            <HandleCityUniversitySearch citiesList={citiesList} setCitiesList={setCitiesList} universitiesList={universitiesList} setUniversitiesList={setUniversitiesList} />
          </Paper>
        </ClickAwayListener>
      )}
    </>
  );
}

export default Searchbar;
