import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchParams, setSearchParams] = useState({});
    const [searchResults, setSearchResults] = useState([]);

    return (
        <SearchContext.Provider value={{ searchParams, setSearchParams, searchResults, setSearchResults }}>
            {children}
        </SearchContext.Provider>
    );
};
