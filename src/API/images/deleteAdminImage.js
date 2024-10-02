import axios from "axios"

const deleteAdminImage = async(token,refresh,{setRefresh})=>{
    try{
        const response = await axios.delete(`https://sakanat-dev.azurewebsites.net/api/users/profile-image`,{
            headers: {
                Authorization: `Bearer ${token}`,
        }
        })
        setRefresh(!refresh)
    }catch(error){
        console.log(error.message)
    }

}
export default deleteAdminImage