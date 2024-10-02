import axios from "axios"

const getNotTerminatedContracts = async (token,userId,{setNotTerminatedContracts})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Contracts/owner/${userId}`,{
            params:{
                Filters: `IsTerminated==false`,
            },headers:{
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
            }
        })
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setNotTerminatedContracts(pagination.TotalCount);
        }
    }catch(error){
        console.log(error)
    }

}
export default getNotTerminatedContracts