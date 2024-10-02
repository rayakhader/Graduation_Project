import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TokenProvider } from './globalContext/TokenContext';
import { RoleProvider } from './globalContext/RoleContext';
import { ExpandedProvider } from './pages/Dashboard/context/ExpandedSidebar';
import { SelectedItemProvider } from './pages/Dashboard/context/SelectedItemContext';
import { RefreshAccountProvider } from './pages/settings/components/Account/context/RefreshAccount';
import { SearchProvider } from './pages/welcome/context/SearchContext';
import { FiltersProvider } from './pages/home/context/Filters';
import { SortsProvider } from './pages/home/context/Sorts';
import { ApartmentsPerPageProvider } from './pages/home/context/ApartmentsPerPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TokenProvider>
      <RoleProvider>
        <ExpandedProvider>
          <SelectedItemProvider>
            <RefreshAccountProvider>
                <SearchProvider>
                    <FiltersProvider>
                      <SortsProvider>
                          <ApartmentsPerPageProvider>
                            
    <App />
    </ApartmentsPerPageProvider>
    </SortsProvider>
    </FiltersProvider>
    </SearchProvider>
    </RefreshAccountProvider>
    </SelectedItemProvider>
    </ExpandedProvider>
    </RoleProvider>
    </TokenProvider>
  </React.StrictMode>
);
