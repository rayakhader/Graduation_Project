import axios from "axios"

const getNumberOfUsersForAdmin = async ({setTotalUsers})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Users`)
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setTotalUsers(pagination.TotalCount)
        }

    }catch(error){
        console.log(error.message)

    }

}
export default getNumberOfUsersForAdmin