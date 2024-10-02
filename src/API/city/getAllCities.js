import axios from "axios"

const getAllCities = async(callbacks)=>{
const{setCitiesList}=callbacks
    try{
        const response= await axios.get('https://sakanat-dev.azurewebsites.net/api/cities',{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const citiesList= response.data
        setCitiesList(citiesList)
    }
    catch(error){
        console.log(error.message)

    }
}
export default getAllCities