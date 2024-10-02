import axios from "axios"

const updateCity = async(token,id,name,refresh,callbacks)=>{
    const {setEditSuccess,setEditCity,setSnackbarOpen,setRefresh}= callbacks
    try{
        const response= await axios.put(`https://sakanat-dev.azurewebsites.net/api/cities/${id}`,{
            name
        },{
            headers:{
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
            }
        })
        setEditSuccess(true)
        setSnackbarOpen(true)
        setRefresh(!refresh)
        setEditCity(false)
    }
    catch(error){
        console.log(error.message)
        setEditSuccess(false)
        setSnackbarOpen(true)
    }
}
export default updateCity