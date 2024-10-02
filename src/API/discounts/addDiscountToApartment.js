import axios from "axios"

const addDiscountToApartment =async (token,apartmentId,discountId,expireDate,refresh,{setAddDiscount,setAdd,setAdded,setError,setRefresh,setSuccess})=>{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Discounts/${discountId}/${apartmentId}?ExpiresAt=${expireDate}`,{},{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        setRefresh(!refresh)
        setAdd(false)
        setSuccess(true)
    }
    catch(error){
        console.log(error.message)
        setAdd(false)
        setAddDiscount(false)
        setError(error.response.data.title)
    }

}
export default addDiscountToApartment