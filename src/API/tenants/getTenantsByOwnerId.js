import axios from "axios"

const getTenantsByOwnerId = async(token,ownerId,page,rowsPerPage,tenantName,{setTenantsList,setTotalCount})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Tenants/owner/${ownerId}`,
            {params:
                {
                Page:page+1,
                PageSize:rowsPerPage,
                FullName:tenantName
            },
                headers: {
                    'Content-Type': 'application/json',
                     Authorization:`Bearer ${token}`
                  },
            }
        )
        const tenantsList =response.data
        setTenantsList(tenantsList)
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setTotalCount(pagination.TotalCount);
        }
    }
    catch(error){
        setTenantsList([])
        console.log(error.message)
    }

}
export default getTenantsByOwnerId