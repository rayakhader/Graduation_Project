import axios from "axios"

const getPaymnetsByContractId = async(token,contractId,{setPayments})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Contracts/${contractId}/payments`,{
                headers: {
                    'Content-Type': 'application/json',
                     Authorization:`Bearer ${token}`
                  },
        })
        const payments = response.data
        setPayments(payments)
    }
    catch(error){
        console.log(error.message)
    }
}
export default getPaymnetsByContractId