import axios from "axios"

const removeFavoriteApartmentByUserId = async(token,userId,apartmentId,refresh,{setRefresh})=>{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Favourites/Removefavourites?userId=${userId}&apartmentId=${apartmentId}`,{},{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
         setRefresh(!refresh)
    }
    catch(error){
        console.log(error.message)
    }

}
export default removeFavoriteApartmentByUserId