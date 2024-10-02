import axios from "axios"

const checkAvailabilityAndVisibility = async(id,{setIsAvailable,setIsVisible})=>{
  try{
    const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Apartments/${id}`)
    const isAvailable = response.data.isAvailable
    const isVisible= response.data.isVisible
    setIsAvailable(isAvailable)
    setIsVisible(isVisible)
  }catch(error){
    console.log(error.message)
  }

}
export default checkAvailabilityAndVisibility