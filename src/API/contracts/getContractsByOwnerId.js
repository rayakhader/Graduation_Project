import axios from "axios"

const getContractsByOwnerId = async(token,userId,page,itemsPerPage,{setContracts,setTotalCount})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Contracts/owner/${userId}`,{
            params:{
                Page:page+1,
                PageSize:itemsPerPage
            },
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
        })
        const contracts = response.data
        setContracts(contracts)
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setTotalCount(pagination.TotalCount);
        }
    }
    catch(error){
        console.log(error.message)
    }


}
export default getContractsByOwnerId