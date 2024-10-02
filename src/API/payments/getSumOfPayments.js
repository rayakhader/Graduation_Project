import axios from "axios"

const getSumOfPayments = async(token,contractId,{setTotal})=>{
    try{
        const response =await axios.get(`https://sakanat-dev.azurewebsites.net/api/Contracts/payments/sum/${contractId}`,{
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
    })
        const total = response.data
        setTotal(total)

    }
    catch(error){
        console.log(error.message)
    }

}
export default getSumOfPayments