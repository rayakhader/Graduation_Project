import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ForgetProvider } from './pages/forgotPassword/context/ForgotPasswordContext';
import { ViewProvider } from './pages/home/components/filter/filterAbove/context/ViewContext';
import { DialogProvider } from './pages/home/context/DialogContext';
import Home from './pages/home/components/Home';
import Navbar from './stableLayoutComponent/navbar/Navbar';
import ForgetPassword from './pages/forgotPassword/components/ForgotPassword';
import ResetPassword from './pages/resetPassword/components/ResetPassword';
import Signup from './pages/signUp/components/Signup';
import { CopyProvider } from './pages/apartmentDetails/components/ApartmentImages/components/ShareModal/context/CopySnackbarContext';
import Apartment from './pages/apartmentDetails/components/Apartment';
import Login from './pages/login/components/Login';
import Favorite from './pages/favorites/components/Favorite';
import Tenants from './pages/Dashboard/owner/components/tenants/components/Tenants';
import AddApartment from './pages/Dashboard/owner/components/ownerApartments/components/addApartment/AddApartment';
import Following from './pages/Dashboard/owner/components/following/Following';
import Followers from './pages/Dashboard/owner/components/followers/Followers';
import Notifications from './pages/Dashboard/owner/components/notifications/Notifications';
import OwnerApartments from './pages/Dashboard/owner/components/ownerApartments/components/OwnerApartments';
import { NavigateProvider } from './pages/Dashboard/owner/components/ownerApartments/components/addApartment/context/NavigateContext';
import { DataProvider } from './pages/Dashboard/owner/components/ownerApartments/components/addApartment/context/AddApartmentDataContext';
import Settings from './pages/settings/components/Settings';
import Account from './pages/settings/components/Account/Account';
import ChangePassword from './pages/settings/components/changePassword/ChangePassword';
import { NewPassProvider } from './pages/settings/components/changePassword/context/NewPassContext';
import { OldPassProvider } from './pages/settings/components/changePassword/context/OldPassContext';
import { ConfirmPassProvider } from './pages/settings/components/changePassword/context/ConfirmNewPass';
import { SuccessProvider } from './pages/settings/components/changePassword/context/SuccessContext';
import AdminPage from './pages/admin/components/AdminPage';
import City from './pages/admin/components/content/cities/components/City';
import { SelectedCityIdProvider } from './pages/admin/components/content/cities/context/SelectedCityIdContext';
import { RefreshProvider } from './pages/admin/components/content/cities/context/RefreshContext';
import University from './pages/admin/components/content/universities/University';
import Users from './pages/admin/components/content/users/Users';
import VerifyEmailSuccess from './pages/signUp/components/VerifyEmailSuccess';
import { FilterProvider } from './pages/home/components/filter/filterSidebar/context/FilterValues';
import { FavoriteProvider } from './pages/favorites/context/FavoriteList';
import { RoomBathroomProvider } from './pages/home/components/filter/filterAbove/context/RoomBathroomValues';
import { UserImageProvider } from './pages/settings/components/Account/context/UserImage';
import { AnchorElementProvider } from './stableLayoutComponent/navbar/navbarUser/context/AnchorElement';
import { AccountDataProvider } from './pages/settings/components/Account/context/AccountData';
import { SaveChangesProvider } from './pages/settings/components/Account/context/SaveChanges';
import { SelectedTenantProvider } from './pages/Dashboard/owner/components/tenants/components/editTenant/context/SelectedTenant';
import { RefreshTenantsProvider } from './pages/Dashboard/owner/components/tenants/context/RefreshTenants';
import { SelectAllProvider } from './pages/Dashboard/owner/components/tenants/context/SelectAll';
import { FavoriteRefreshProvider } from './pages/favorites/context/FavoriteRefresh';
import { ApartmentDetailsRefreshProvider } from './pages/apartmentDetails/context/ApartmentDetailsRefresh';
import { AddTenantInfoProvider } from './pages/Dashboard/owner/components/tenants/components/addNewTenant/context/AddTenantInfo';
import { EditTenantInfoProvider } from './pages/Dashboard/owner/components/tenants/components/editTenant/context/EditTenantInfo';
import { FavoriteHomeRefreshProvider } from './pages/home/components/apartmentViewer/components/subViewer/apartmentBox/apartmentBoxContent/favoriteSec/context/FavoriteHomeRefresh';
import EditApartmentDetails from './pages/Dashboard/owner/components/ownerApartments/components/notEmptyState/editApartment/components/EditApartmentDetails';
import { SearchbarProvider } from './pages/Dashboard/owner/components/ownerApartments/components/notEmptyState/searchBar/context/SearchbarContext';
import { OwnerApartmentRefreshProvider } from './pages/Dashboard/owner/components/ownerApartments/components/notEmptyState/context/OwnerApartmentRefresh';
import SideBar from './pages/Dashboard/SideBar';
import ApartmentAdmin from './pages/admin/components/content/apartments/components/ApartmentAdmin';
import { SelectedCountryProvider } from './pages/signUp/context/SelectedCountry';
import Dashboard from './pages/Dashboard/Dashboard';
import { EditApartmentInfoProvider } from './pages/Dashboard/owner/components/ownerApartments/components/notEmptyState/editApartment/context/EditApartmentInfo';
import { RefreshApartmentDetailsProvider } from './pages/Dashboard/owner/components/ownerApartments/components/notEmptyState/editApartment/context/RefreshApartmentDetails';
import { RefreshApartmentsProvider } from './pages/admin/components/content/apartments/context/RefreshApartments';
import DashAdmin from './pages/admin/components/content/dashboard/DashAdmin';
import Customers from './pages/admin/components/content/users/Customers';
import Owners from './pages/admin/components/content/users/Owners';
import AdminSettings from './pages/admin/components/content/settings/AdminSettings';
import { AdminSettingsRefreshProvider } from './pages/admin/components/content/settings/context/RefreshAdminSettings';
import { NewPassAdminProvider } from './pages/admin/components/content/settings/changePassword/context/NewPassContext';
import { OldPassAdminProvider } from './pages/admin/components/content/settings/changePassword/context/OldPassContext';
import { ConfirmPassAdminProvider } from './pages/admin/components/content/settings/changePassword/context/ConfirmNewPass';
import { SuccessAdminProvider } from './pages/admin/components/content/settings/changePassword/context/SuccessContext';
import WelcomePage from './pages/welcome/components/WelcomePage';
import RequireAdmin, { RequireCustomerOrOwner, RequireCustomerOrOwnerOrGuest, RequireOwner } from './CheckRole';
import { CheckChangeProvider } from './pages/settings/components/Account/context/CheckChange';
import Discounts from './pages/Dashboard/owner/components/discounts/Discounts';
import { DiscountInfoProvider } from './pages/Dashboard/owner/components/discounts/createDiscount/context/DiscountInfo';
import { DiscountRefreshProvider } from './pages/Dashboard/owner/components/discounts/context/RefreshDiscounts';
import Contracts from './pages/Dashboard/owner/components/contracts/Contracts';
import { PaymentsRefreshProvider } from './pages/Dashboard/owner/components/contracts/context/RefreshPayments';
import { ContractInfoProvider } from './pages/Dashboard/owner/components/contracts/context/ContractInfo';
import { ContractsRefreshProvider } from './pages/Dashboard/owner/components/contracts/context/RefreshContracts';
import { RefreshApartmentsListProvider } from './pages/Dashboard/owner/components/ownerApartments/components/notEmptyState/ownerApartmentViewer/ManageSec/context/RefreshApartments';
import { ErrorProvider } from './pages/home/components/filter/filterSidebar/context/Error';
import { SelectedContractProvider } from './pages/Dashboard/owner/components/contracts/context/SelectedContract';
import { SelectedIndexProvider } from './pages/Dashboard/owner/components/contracts/context/SelectedIndex';
import { SelectedCountryAccountProvider } from './pages/settings/components/Account/context/SelectedCountryAccount';
import { ChangeApartmentInfoProvider } from './pages/Dashboard/owner/components/ownerApartments/components/notEmptyState/editApartment/context/Change';
import Error from './Error';
import SuspendedUsers from './pages/admin/components/content/users/SuspendedUsers';
import { SuspendedUsersRefreshProvider } from './pages/admin/components/content/users/context/refreshSuspendedUsers';
import { NotificationRefreshProvider } from './stableLayoutComponent/navbar/navbarUser/context/NotificationRefresh';
import ViewProfile from './stableLayoutComponent/navbar/navbarUser/ViewProfile';
import { FollowingRefreshProvider } from './pages/Dashboard/owner/components/following/context/FollowingRefresh';
import { RefreshTokenProvider } from './globalContext/RefreshTokenContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AnchorElementProvider>
      <UserImageProvider>
        <NotificationRefreshProvider>
      <Navbar />
      </NotificationRefreshProvider>
      </UserImageProvider>
      </AnchorElementProvider>,
    children: [
      { index:true, element:<WelcomePage />},
      { path :"home", element:<RequireCustomerOrOwnerOrGuest />,children:[
        {index:true, element:
          <ViewProvider>
            <DialogProvider>
              <FilterProvider>
                <FavoriteProvider>
                  <RoomBathroomProvider>
                    <FavoriteHomeRefreshProvider>
                      <ErrorProvider>
              <Home />
              </ErrorProvider>
              </FavoriteHomeRefreshProvider>
              </RoomBathroomProvider>
              </FavoriteProvider>
              </FilterProvider>
            </DialogProvider>
          </ViewProvider>}
    ]},
      {  path :"home/apartment/:id",element:<RequireCustomerOrOwnerOrGuest />,children:[
       { index:true,element:
      <CopyProvider>
        <FavoriteProvider>
          <ApartmentDetailsRefreshProvider>
        <Apartment />
        </ApartmentDetailsRefreshProvider>
        </FavoriteProvider>
        </CopyProvider>}]
        } 
    ,
    {path:"home/favorites", element:<RequireCustomerOrOwner />,children:[
      {index:true,element:
    <FavoriteProvider>
      <FavoriteRefreshProvider>
      <Favorite />
      </FavoriteRefreshProvider>
      </FavoriteProvider>}]},
  {path:'dashboard', element:<SearchbarProvider><SideBar /></SearchbarProvider>
  ,children:[
    {index:true,element:<Dashboard />},
    {path:'apartments',element:<RequireOwner />,children:[
    {index:true, element:<OwnerApartmentRefreshProvider><RefreshApartmentsListProvider><OwnerApartments /></RefreshApartmentsListProvider></OwnerApartmentRefreshProvider>}
  ]}
    ,
    {path:'apartments/:id',element:<RequireOwner />,children:[
    {index:true,element:<EditApartmentInfoProvider><RefreshApartmentDetailsProvider><ChangeApartmentInfoProvider><EditApartmentDetails/></ChangeApartmentInfoProvider></RefreshApartmentDetailsProvider></EditApartmentInfoProvider>}
  ]}
    ,
    {path:'apartments/add-apartment',element:<RequireOwner />,children:[
    {index:true,element:
    <NavigateProvider>
      <DataProvider>
       <AddApartment />
      </DataProvider>
    </NavigateProvider>}
    ]},
    {path:'following',element:<RequireCustomerOrOwner />,children:[
      {index:true,element:<FollowingRefreshProvider><Following /></FollowingRefreshProvider>}
    ]},
    {path:'followers',element:<RequireOwner />,children:[
    {index:true,element:<Followers />}
  ]} ,
    {path:'tenants',element:<RequireOwner />,children:[
    {index:true,element:<AddTenantInfoProvider>
      <EditTenantInfoProvider>
      <SelectedTenantProvider>
        <RefreshTenantsProvider>
          <SelectAllProvider>
      <Tenants />
      </SelectAllProvider>
      </RefreshTenantsProvider>
      </SelectedTenantProvider>
      </EditTenantInfoProvider>
      </AddTenantInfoProvider>},
      ]},
    {path:'notifications',element:<RequireCustomerOrOwner />,children:[
      {index:true,element:<Notifications />}]},
    {path:'contracts',element:<RequireOwner />,children:[
      {index:true,element:<ContractsRefreshProvider><ContractInfoProvider><PaymentsRefreshProvider><SelectedContractProvider><SelectedIndexProvider><Contracts /></SelectedIndexProvider></SelectedContractProvider></PaymentsRefreshProvider></ContractInfoProvider></ContractsRefreshProvider>}]},
    {path:'discounts',element:<RequireOwner />,children:[
    {index:true,element:<DiscountInfoProvider><DiscountRefreshProvider><Discounts /></DiscountRefreshProvider></DiscountInfoProvider>},
  ]}
  ]
},
{path:'settings',element:<Settings />,
children:[
  {path:'my-account',element:<RequireCustomerOrOwner />,children:[
   {index:true,element:<UserImageProvider>
    <AccountDataProvider>
      <SaveChangesProvider>
        <CheckChangeProvider>
          <SelectedCountryAccountProvider>
    <Account/>
    </SelectedCountryAccountProvider>
    </CheckChangeProvider>
    </SaveChangesProvider>
    </AccountDataProvider>
    </UserImageProvider>}]},
  {path:'change-password',element:<RequireCustomerOrOwner />,children:[
  {index:true,element:
  <NewPassProvider>
    <OldPassProvider>
      <ConfirmPassProvider>
        <SuccessProvider>
    <ChangePassword />
    </SuccessProvider>
    </ConfirmPassProvider>
    </OldPassProvider>
  </NewPassProvider>}]}
]
},
{path:'profile/:id',element:<RequireCustomerOrOwner />,children:[
  {index:true,element:<ViewProfile />}]},
  ]
  },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgetProvider> <ForgetPassword /></ForgetProvider> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/signup", element: <SelectedCountryProvider><Signup /></SelectedCountryProvider> },
  { path:'/verify-email',element:<VerifyEmailSuccess />},
  {path:"/admin",element:
  <RefreshTokenProvider>
  <AdminSettingsRefreshProvider>
    <AdminPage />
  </AdminSettingsRefreshProvider>
  </RefreshTokenProvider>
  ,
  children : [
    {index:true, element: <DashAdmin /> },
    {path:"action/city",element:<RequireAdmin />,children:[
     {index:true,element:<SelectedCityIdProvider><RefreshProvider><City /></RefreshProvider></SelectedCityIdProvider>}]}
    ,{path:"action/university",element:<RequireAdmin />,children:[
     {index:true,element:<University />}]},
    {path:"action/apartment",element:<RequireAdmin />,children:[
    {index:true,element:<RefreshApartmentsProvider><ApartmentAdmin /></RefreshApartmentsProvider>}]},
    {path:"users",element:<RequireAdmin />,children:[
    {index:true,element:<Users />}]},
    {path:"users/customers",element:<RequireAdmin />,children:[
    {index:true,element:<Customers />}]},
    {path:"users/owners",element:<RequireAdmin />,children:[
    {index:true,element:<Owners />}]},
    {path:"users/suspended",element:<RequireAdmin />,children:[
      {index:true,element:<SuspendedUsersRefreshProvider><SuspendedUsers /></SuspendedUsersRefreshProvider>}]},
    {path:"dashboard",element:<RequireAdmin />,children:[
    {index:true,element:<DashAdmin />}]},
    {path:"settings",element:<RequireAdmin />,children:[
    {index:true,element:
       <NewPassAdminProvider>
         <OldPassAdminProvider>
          <ConfirmPassAdminProvider>
           <SuccessAdminProvider>
      <AdminSettings />
      </SuccessAdminProvider>
      </ConfirmPassAdminProvider>
     </OldPassAdminProvider>
     </NewPassAdminProvider>}]}
]},
{ path: "*", element: <Error /> }
]);
function App() {
  return (
     <RouterProvider router={router}   />
  );
}

export default App;
