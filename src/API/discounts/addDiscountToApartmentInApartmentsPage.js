import axios from "axios"

const addDiscountToApartmentsInApartmentsPage = async (token,id,selectedDiscount,expireDate,refreshAddDiscount,{setRefreshAddDiscount,setSuccess})=>{
  try{
    const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Discounts/${selectedDiscount}/${id}?ExpiresAt=${expireDate}`,{},{
        headers: {
            'Content-Type': 'application/json',
             Authorization:`Bearer ${token}`
          },
    })
    setRefreshAddDiscount(!refreshAddDiscount)
    setSuccess(true)
  }
  catch(error){
    console.log(error.message)
  }
}
export default addDiscountToApartmentsInApartmentsPage