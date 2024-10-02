import axios from "axios"

const getAllUniversities = async(callbacks)=>{
const{setUniversitiesList}=callbacks
    try{
        const response= await axios.get('https://sakanat-dev.azurewebsites.net/api/universities',{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const universitiesList= response.data
        setUniversitiesList(universitiesList)
    }
    catch(error){
        console.log(error.message)

    }
}
export default getAllUniversities