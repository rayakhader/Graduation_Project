import getApartmentById from "../../../../API/apartments/getApartmentById";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const fetchApartmentDetailsAndFavorites = async (id,token,{setApartmentDetails,setOwnerInfo,setFavoriteList,setAdd}) => {
    await getApartmentById(id, { setApartmentDetails, setOwnerInfo });
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
          setAdd(true);
        } else {
          setAdd(false);
        }
            setFavoriteList(favoriteList);
        
      } catch (error) {
        console.log(error);
      }
    }
  }; 
  export default fetchApartmentDetailsAndFavorites