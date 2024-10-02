import axios from "axios"

const getAllSuspendedUsers = async (token,page,itemsPerPage,{setUsersPerPage,setTotalPages,setTotalUsers})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/suspensions`,{
            params:{
                Page :page,
                PageSize : itemsPerPage
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              }
            })
        const suspendedUsers = response.data
        setUsersPerPage(suspendedUsers)
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setTotalPages(pagination.TotalPages);
          setTotalUsers(pagination.TotalCount)
        }

    }catch(error){

    }

}
export default getAllSuspendedUsers