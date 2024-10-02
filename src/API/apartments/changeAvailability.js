import axios from "axios"

const changeAvailability = async(token,id,refresh,{setRefresh})=>{
    try{
        const response = await axios.put(`https://sakanat-dev.azurewebsites.net/api/apartments/${id}/availability`,{},{
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
        })
        setRefresh(!refresh)

    }catch(error){
        console.log(error.message)
    }


}
export default changeAvailability