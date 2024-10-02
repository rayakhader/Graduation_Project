import axios from "axios"

const deleteDiscountFromApartment = async (token,discountId,apartmentId,refreshDeleteDiscount,{setRefreshDeleteDiscount,setSuccess})=>{
    try{
        const response = await axios.delete(`https://sakanat-dev.azurewebsites.net/api/discounts/${discountId}/${apartmentId}`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        setRefreshDeleteDiscount(!refreshDeleteDiscount)
        setSuccess(true)
    }
    catch(error){
        console.log(error.message)
    }

}
export default deleteDiscountFromApartment