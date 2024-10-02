import axios from "axios"

const changeVisibility = async(token,id,refresh,{setRefresh})=>{
    try{
        const response = await axios.put(`https://sakanat-dev.azurewebsites.net/api/apartments/${id}/visibility`,{},{
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
export default changeVisibility