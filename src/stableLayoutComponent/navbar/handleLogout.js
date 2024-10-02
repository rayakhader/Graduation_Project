import Cookies from 'js-cookie';

const handleLogout = async () => {
    try {
      Cookies.remove('token');
      Cookies.remove('role');
    } catch (error) {
      console.error('Failed to disconnect SignalR connection:', error);
    }
  };
   export default handleLogout