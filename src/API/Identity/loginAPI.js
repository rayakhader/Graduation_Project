import axios from "axios";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const loginAPI= async(email,password,callbacks)=>{
  
const { setShowAlert, setLoginError, clickHome,clickAdmin, toast, setIsLoggedin } = callbacks;
        
        try {
          const response = await axios.post('https://sakanat-dev.azurewebsites.net/api/identity/login', {
            email,
            password
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.status !== 200) throw new Error('Login failed');
          const token= response.data.accessToken
          const expiryTokenDate =response.data.accessTokenExpiryDate
          const expiryDate = new Date(expiryTokenDate);
          Cookies.set('token', token, { expires: expiryDate, path: '/' }); 
          setIsLoggedin(true)
          const decoded = jwtDecode(token);
          const role = decoded['RoleName'];
          Cookies.set('role', role, { expires: expiryDate, path: '/' }); 
          if(role==='Admin'){
            const refreshToken = response.data.refreshToken
            const expiryRefreshToken = response.data.refreshTokenExpiryDate
            const expiryDate = new Date(expiryRefreshToken)
            Cookies.set('refreshToken',refreshToken,{expires: expiryDate,path:'/' })
          }
          setShowAlert(true);
          setLoginError('');
          toast.success('Login Successfully', {
            hideProgressBar: true,
        });
          setTimeout(() => setShowAlert(false), 5000); 
        } catch (error) {
          setLoginError(error.message);
        }
      };
export default loginAPI