import axios from "axios"
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const refreshToken = async (refresh)=>{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/identity/refresh-token`,{},{
            params: {
                refreshToken : refresh
            },
        })
        const {
            accessToken,
            accessTokenExpiryDate,
            refreshToken: newRefreshToken,
            refreshTokenExpiryDate,
          } = response.data;
          console.log(accessToken, accessTokenExpiryDate,newRefreshToken,refreshTokenExpiryDate)
          const token= accessToken
          const expiryTokenDate =accessTokenExpiryDate
          const expiryDateToken = new Date(expiryTokenDate);
          Cookies.set('token', token, { expires: expiryDateToken, path: '/' }); 
          const decoded = jwtDecode(token);
          const role = decoded['RoleName'];
          Cookies.set('role', role, { expires: expiryDateToken, path: '/' }); 
          const refreshToken = newRefreshToken
          const expiryRefreshToken = refreshTokenExpiryDate
          const expiryDateRefreshToken = new Date(expiryRefreshToken)
          Cookies.set('refreshToken',refreshToken,{expires: expiryDateRefreshToken,path:'/' })
    }catch(error){
        console.log(error.message)
    }

}
export default refreshToken