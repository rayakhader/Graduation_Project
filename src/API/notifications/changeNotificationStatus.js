import axios from "axios"

const changeNotificationStatus = async(token,id,refresh,{setRefresh})=>{
    try{
        const response = await axios.put(`https://sakanat-dev.azurewebsites.net/api/notifications/status/${id}`,{},{
            headers:{
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
            }
        })
        setRefresh(!refresh)
    }catch(error){

    }

}
export default changeNotificationStatus