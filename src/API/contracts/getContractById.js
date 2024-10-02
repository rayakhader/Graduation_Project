import axios from "axios"

const getContractById = async(token,contractId,{setContractInfo})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Contracts/${contractId}`,{
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
        })
        const contractInfo = response.data
        setContractInfo(contractInfo)
    }
    catch(error){
        console.log(error.message)
    }


}
export default getContractById