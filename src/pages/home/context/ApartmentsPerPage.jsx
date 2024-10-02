import React, { createContext, useState, useContext } from 'react';

const ApartmentsPerPage = createContext();

export const useApartmentsPerPage = () => useContext(ApartmentsPerPage);

export const ApartmentsPerPageProvider = ({ children }) => {
    const[apartmentsPerPage,setApartmentsPerPage]=useState([])
    return (
        <ApartmentsPerPage.Provider value={{ apartmentsPerPage, setApartmentsPerPage}}>
            {children}
        </ApartmentsPerPage.Provider>
    );
};
