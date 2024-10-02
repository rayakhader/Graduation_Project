export const clearAllSuggestions = (selectedTab,setUniversitiesList,setCitiesList) => {
    if (selectedTab === 0) {
      setCitiesList([]);
    } else {
      setUniversitiesList([]);
    }
  };