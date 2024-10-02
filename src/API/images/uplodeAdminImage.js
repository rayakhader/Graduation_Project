import axios from "axios"

const uplodeAdminImage = async(token,formData,refresh,{setRefresh})=>{
    try{
        const response= await axios.post(`https://sakanat-dev.azurewebsites.net/api/users/profile-image`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              },
        })
        setRefresh(!refresh)
    }
    catch(error){
        console.log(error.message)
    }

}
export default uplodeAdminImage