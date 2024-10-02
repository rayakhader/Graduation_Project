import axios from "axios"

const getPercentageOfTenantsWithIncompletedPayments = async (token,userId,{setTenantsWithIncompletedPayments})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/tenants/percentage-of-tenants-have-terminated-contracts/${userId}`,{
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
        })
        const tenantsWithCompletedPayments = response.data
        setTenantsWithIncompletedPayments(tenantsWithCompletedPayments);
    }catch(error){
        console.log(error.message)
    }
}
export default getPercentageOfTenantsWithIncompletedPayments