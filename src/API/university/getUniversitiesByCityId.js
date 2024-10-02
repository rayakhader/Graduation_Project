import axios from "axios"

const getUniversitiesByCityId = async(CityId,callbacks)=>{
const{setUniversitiesList}=callbacks
    try{
        const response= await axios.get(`https://sakanat-dev.azurewebsites.net/api/Universities/city/${CityId}`,
            {
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const universitiesList= response.data
        setUniversitiesList(universitiesList)
    }
    catch(error){
        console.log(error.message)
        setUniversitiesList([])

    }
}
export default getUniversitiesByCityId