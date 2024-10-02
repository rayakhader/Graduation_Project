import axios from "axios"

const deleteUserImage = async(token,{setUserImage})=>{
    try{
        const response = await axios.delete(`https://sakanat-dev.azurewebsites.net/api/users/profile-image`,{
            headers: {
                Authorization: `Bearer ${token}`,
        }
        })
        setUserImage(null)
    }catch(error){
        console.log(error.message)
    }

}
export default deleteUserImage