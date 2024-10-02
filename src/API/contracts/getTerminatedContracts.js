import axios from "axios"

const getTerminatedContracts = async (token,userId,{setTerminatedContracts})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Contracts/owner/${userId}`,{
            params:{
                Filters: `IsTerminated==true`,
            },headers:{
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
            }
        })
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setTerminatedContracts(pagination.TotalCount);
        }
    }catch(error){
        console.log(error)
    }

}
export default getTerminatedContracts