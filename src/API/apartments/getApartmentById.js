import axios from "axios"

const getApartmentById =async(id,callbacks)=>{
    const {setApartmentDetails,setOwnerInfo}=callbacks
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments/${id}`)
        const apartmentDetails=response.data
        setApartmentDetails(apartmentDetails)
        setOwnerInfo(response.data.user)
    }
    catch(error){
        console.log(error)
    }
}
export default getApartmentById