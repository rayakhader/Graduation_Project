import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const fetchFavorite = async (id,token,{setFavoriteList,setAddToFavorite}) => {
    if (token) {
      const decoded = jwtDecode(token);
      const userId = decoded['userId'];
      try {
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Favourites/user/${userId}`,{
          headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`
          },
        });
        const favoriteList = response.data;
        const isFavorite = favoriteList.some(fav => fav.id === id);
        if (isFavorite) {
          setAddToFavorite(true);
        } else {
          setAddToFavorite(false);
        }
         setFavoriteList(favoriteList);
        
      } catch (error) {
        console.log(error);
      }
    }
  }; 
  export default fetchFavorite