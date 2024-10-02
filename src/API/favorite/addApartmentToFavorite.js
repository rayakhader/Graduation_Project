import axios from "axios"

const addApartmentToFavorite = async(token,apartmentId,userId)=>{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Favourites/AddTofavourites?userId=${userId}&apartmentId=${apartmentId}`,{},{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })

    }
    catch(error){
        console.log(error.message)

    }

}
export default addApartmentToFavorite