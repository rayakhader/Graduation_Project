import axios from "axios"

const updateAdminInfo = async(token,firstName,lastName,city,phoneNumber,refresh,{setRefresh,setChanged,setUpdated})=>{
    try{
        const response = await axios.put(`https://sakanat-dev.azurewebsites.net/api/Users`,{
            firstName,
            lastName,
            phoneNumber,
            city
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        setRefresh(!refresh)
        setChanged(false)
        setUpdated(true)

    }catch(error){
        console.log(error.message)
    }

}
export default updateAdminInfo