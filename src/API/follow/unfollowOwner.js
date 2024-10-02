import axios from "axios"

const unfollowOwner= async(token,ownerId)=>{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/user-following/unfollow/${ownerId}`,{},{
            headers:{
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
            }
        })
    }catch(error){
        console.log(error.message)

    }

}
export default unfollowOwner