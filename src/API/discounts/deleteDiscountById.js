import axios from "axios"

const deleteDiscountById = async(token,discountId,refresh,{setRefresh,setSuccess})=>{
    try{
        const response = await axios.delete(`https://sakanat-dev.azurewebsites.net/api/Discounts/${discountId}`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        setRefresh(!refresh)
        setSuccess(true)
    }
    catch(error){
     console.log(error.message)
    }
}
export default deleteDiscountById