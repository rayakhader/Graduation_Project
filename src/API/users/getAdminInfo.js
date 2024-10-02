import axios from "axios"

const getAdminInfo = async (userId,{setAdminInfo})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Users/${userId}`)
        const adminInfo = response.data
        setAdminInfo(adminInfo)
    }catch(error){
        console.log(error.message)
    }

}
export default getAdminInfo