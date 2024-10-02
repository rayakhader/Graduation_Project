import axios from "axios"

const updateDiscount = async(token,discountId,description,percentage,refresh,{setRefresh,setSuccess})=>{
    try{
        const response = await axios.put(`https://sakanat-dev.azurewebsites.net/api/discounts/${discountId}`,{
            description,
            percentage
        },{
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
        })
        setRefresh(!refresh)
        setSuccess(true)

    }catch(error){
        console.log(error.message)
    }

}
export default updateDiscount 