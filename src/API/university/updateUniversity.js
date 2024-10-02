import axios from "axios"

const updateUniversity = async(token,id,name,{setEditSuccess,setSnackbarOpen,setEditUniversity,setOpenViewDialog})=>{
    try{
        const response = await axios.put(`https://sakanat-dev.azurewebsites.net/api/universities/${id}`,{
            name
        },{
            headers:{
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
            }
        })
        setSnackbarOpen(true)
        setEditSuccess(true)
        setEditUniversity(false)
        setOpenViewDialog(false)
    }catch(error){
        console.log(error.message)
        setEditSuccess(false)
        setSnackbarOpen(true)
    }

}
export default updateUniversity