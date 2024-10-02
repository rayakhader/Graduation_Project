import { useNavigate } from 'react-router-dom';

export function useNavigation() {
  let navigate = useNavigate();

  const clickWelcomePage =()=>navigate('/')
  const clickSignup = () => navigate('/signup');
  const clickLogin = () => navigate('/login');
  const clickHome = () => navigate('/home');
  const clickFavorite =()=>navigate('home/favorites')
  const clickDashboard =()=>navigate('dashboard')
  const clickAddApartment =()=>navigate('add-apartment')
  const clickSettings=()=>navigate('settings')
  const clickAccount =()=>navigate('my-account')
  const clickChangePass =()=>navigate('change-password')
  const clickCity =()=>navigate('action/city')
  const clickUniversity =()=>navigate('action/university')
  const clickUsers =()=>navigate('users')
  const clickApartmentAdmin = ()=> navigate('action/apartment')
  const clickAdminDash = ()=>navigate('dashboard')
  const clickCustomers = ()=>navigate('users/customers')
  const clickSuspended = ()=>navigate('users/suspended')
  const clickOwners = ()=>navigate('users/owners')
  const clickAdminSettings = ()=>navigate('settings')
  const clickAdmin = ()=>navigate('/admin')
  const clickNotifications = ()=>navigate('/dashboard/notifications')
  const navigateByItemText = (text) => {
    switch(text) {
      case 'Dashboard':
        navigate('/dashboard');
        break;
      case 'Apartments':
        navigate('/dashboard/apartments');
        break;
      case 'Profile':
        navigate('/dashboard/profile');
        break;
      case 'Following':
        navigate('/dashboard/following');
        break;
        case 'Followers':
        navigate('/dashboard/followers');
        break;
        case 'Tenants':
        navigate('/dashboard/tenants');
        break;
        case 'Notifications':
        navigate('/dashboard/notifications');
        break;
        case 'Contracts':
        navigate('/dashboard/contracts');
        break;
        case 'Discounts':
        navigate('/dashboard/discounts');
        break;
      default:
        navigate('/'); 
    }
  }


  return { clickLogin, clickHome,clickNotifications, clickSignup,clickWelcomePage,clickFavorite,clickDashboard,clickAddApartment, navigateByItemText,clickSettings,clickAccount,clickChangePass,clickCity,clickUniversity,clickUsers,clickApartmentAdmin,clickAdminDash,clickCustomers,clickOwners
  ,clickSuspended,clickAdminSettings,clickAdmin
  };
}