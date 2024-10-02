import axios from "axios"

const getFollowersByUserId = async (userId,{setFollowersList})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/user-following/followers/${userId}`)
        const followersList = response.data
        setFollowersList(followersList)
    }catch(error){
        console.log(error.message)
        setFollowersList([])
    }

}
export default getFollowersByUserId