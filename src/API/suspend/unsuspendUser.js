import axios from "axios"

const unsuspendUser = async (token,userId,refresh,{setRefresh})=>{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Suspensions/${userId}`,{},{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        setRefresh(!refresh)

    }
    catch(error){

    }

}
export default unsuspendUser