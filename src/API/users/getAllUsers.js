import axios from "axios"

const getAllUsers = async (page,itemsPerPage,filters,userName,{setUsersPerPage,setTotalPages,setTotalUsers})=>{
   const {status,role} =filters
   let filterString = ''
   if(status==='suspended'){
    filterString += `Suspension!=null`
   }else if (status==='active'){
    filterString += `Suspension==null`
   }
   if(role==='Owner'){
    filterString += `${filterString ? ',' : ''}role.name@=owner`
   }
   if(role==='Customer'){
    filterString += `${filterString ? ',' : ''}role.name@=customer`
   }
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Users`,{
            params:{
                Page: page,
                PageSize: itemsPerPage,
                Filters : filterString,
                FullName : userName || '' 
            }
        })
        const allUsers = response.data
        // const usersList = allUsers.filter(user => user.roleName!=='Admin')
        setUsersPerPage(allUsers)
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setTotalPages(pagination.TotalPages);
          setTotalUsers(pagination.TotalCount)
        }
    }catch(error){
        console.log(error.message)
    }

}
export default getAllUsers