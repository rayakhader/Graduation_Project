import axios from "axios"

const getDiscountsByApartmentId= async (token,apartmentId,{setApartmentDiscounts})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Discounts/apartment/${apartmentId}`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        const apartmentDiscounts = response.data
        setApartmentDiscounts(apartmentDiscounts)
    }
    catch(error){
        console.log(error)
    }

}
export default getDiscountsByApartmentId