import axios from "axios"

const getDiscountsNumForOwnerApartments = async (userId,{setApartmentData})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments/discounts/${userId}`)
        const apartmentData = response.data
        setApartmentData(apartmentData)
    }catch(error){
        console.log(error)
    }

}
export default getDiscountsNumForOwnerApartments