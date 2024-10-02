import axios from "axios"

const getFavoriteApartmentsByUserId =async(token,userId,callbacks)=>{
    const {setFavoritesList}=callbacks
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Favourites/user/${userId}`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        const favoriteList =response.data
        setFavoritesList(favoriteList)
    }
    catch(error){
        console.log(error)
    }
}
export default getFavoriteApartmentsByUserId