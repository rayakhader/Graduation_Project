import axios from "axios"

const getDiscountById = async(discountId,{setAmount,setDescription,setChanged})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Discounts/${discountId}`)
        const discountInfo = response.data
        setAmount(discountInfo.percentage)
        setDescription(discountInfo.description)
        setChanged(false)

    }catch(error){
        console.log(error.message)
    }
}
export default getDiscountById 