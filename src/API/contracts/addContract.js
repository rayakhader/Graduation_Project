import axios from "axios"
import resetFields from "../../pages/Dashboard/owner/components/contracts/resetFields"

const addContract = async(token,tenantId,apartmentId,type,startDate,endDate,rentPrice,currency,refreshContracts,{setRefreshContracts,setAddContractSuccess,setError,setSelectedTenant,setSelectedApartment,setStartDate,setEndDate,setContractPeriod,setPrice,setCurrency})=>{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Tenants/${tenantId}/apartments/${apartmentId}/contracts`,{
            startDate,
            endDate,
            rentPrice,
            type,
            currency
        },{
                headers: {
                    'Content-Type': 'application/json',
                     Authorization:`Bearer ${token}`
                  },
        })
        setRefreshContracts(!refreshContracts)
        setAddContractSuccess(true)
        resetFields(setSelectedTenant,setSelectedApartment,setStartDate,setEndDate,setContractPeriod,setPrice,setCurrency)
    }
    catch(error){
        console.log(error.message)
        setError(error.response.data.title)
    }
}
export default addContract