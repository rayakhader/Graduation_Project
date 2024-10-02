import axios from "axios"

const getUniversityById = async(universityId,{setUniversityName})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Universities/${universityId}`)
        const universityName = response.data.name
        setUniversityName(universityName)
    }catch(error){
        console.log(error.message)
    }

}
export default getUniversityById