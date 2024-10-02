import axios from "axios";

const getUserByIdProfile = async(userId,{setUserInfo})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Users/${userId}`)
        const userInfo = response.data;
        setUserInfo(userInfo)

    }catch(error){
        console.log(error.message)
    }

}
export default getUserByIdProfile;