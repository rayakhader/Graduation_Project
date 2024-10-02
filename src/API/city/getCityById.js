import axios from "axios"

const getCityById = async(id,callbacks)=>{
    const {setCity,setCreationDate}=callbacks
    try{
        const response= await axios.get(`https://sakanat-dev.azurewebsites.net/api/cities/${id}`,{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const city = response.data
        setCity(city.name)
        setCreationDate(city.creationDate)
    }
    catch(error){
        console.log(error.message)

    }
}
export default getCityById