import axios from "axios"

const getFollowingByUserId = async (userId,{setFollowingList})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/user-following/following/${userId}`)
        const followingList = response.data
        setFollowingList(followingList)
    }catch(error){
        console.log(error.message)
        setFollowingList([])
    }

}
export default getFollowingByUserId