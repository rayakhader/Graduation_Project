import axios from "axios"

const discountSortByPercentageAsc = async(apartmentId,{setApartmentDiscounts})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Discounts/apartment/${apartmentId}?Sorts=percentage`)
        const apartmentDiscounts = response.data
        setApartmentDiscounts(apartmentDiscounts)
    }catch(error){
        console.log(error.message)
    }

}
export default discountSortByPercentageAsc