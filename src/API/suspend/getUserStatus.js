import axios from "axios"

const getUserStatus = async (token,userId,{setUserStatus})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Suspensions/${userId}`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        const suspensionInfo= response.data
        if(Object.keys(suspensionInfo).length!==0){
            setUserStatus("Suspended")
        }
    }catch(error){
        console.log(error.message)
        setUserStatus("Active")
    }

}
export default getUserStatus