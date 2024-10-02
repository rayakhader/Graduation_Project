import axios from "axios"

const addUniversity = async(token,CityId,name,callbacks)=>{
    const {setAddUniversitySuccess,setAddUniversityError}=callbacks
    try{
        const response= await axios.post(`https://sakanat-dev.azurewebsites.net/api/universities/${CityId}`,{
            name
        },
            {
            headers:{
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
            }
        })
        setAddUniversitySuccess(true)
        setAddUniversityError('')
    }
    catch(error){
        console.log(error.message)
        setAddUniversitySuccess(false)
        setAddUniversityError(error.response.data.title)
    }
}
export default addUniversity