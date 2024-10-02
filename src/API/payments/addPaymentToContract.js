import axios from "axios"

const addPaymentToContract = async(token,contractId,amount,refreshPayments,{setRefreshPayments,setOpenAddPayment,setAddSuccess,setPaymentAmount,setSuccess,setError})=>{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Contracts/${contractId}/payments`,{
            amount
        },{
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
    }) 
   
        // setOpenAddPayment(false)
        // setAddSuccess(true)
        setSuccess(true)
        setRefreshPayments(!refreshPayments)
        setPaymentAmount('')
    }
    catch(error){
        // console.log(error.message)
        setOpenAddPayment(false)
        setError(error.response.data.title)
    }


}
export default addPaymentToContract