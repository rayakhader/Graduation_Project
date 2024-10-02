import axios from "axios"

const addNewCity = async(token,name,refresh,callbacks)=>{
    const {setAddSuccess,setSnackbarOpen,setAddCity,setRefresh}=callbacks
    try{
        const response= await axios.post('https://sakanat-dev.azurewebsites.net/api/cities',{
            name
        },{
            headers:{
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
            }
        })
        setAddSuccess(true)
        setSnackbarOpen(true)
        setRefresh(!refresh)
        setAddCity(false)
    }
    catch(error){
        setSnackbarOpen(true)
        setAddSuccess(false)
        console.log(error.message)
    }
}
export default addNewCity