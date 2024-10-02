import axios from "axios"

const getApartmentsByOwnerIdForContracts = async(ownerId,{setApartments})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments/user/${ownerId}`)
        const allApartments = response.data
        setApartments(allApartments)
    }catch(error){
        console.log(error)

    }

}
export default getApartmentsByOwnerIdForContracts