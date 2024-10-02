import axios from "axios"

const getAddedDiscounts = async(token,userId,{setAddedDiscounts})=>{    
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Discounts/user/${userId}`,{
            params:{
                Filters: 'ApartmentDiscounts.Count!=0' 
            },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${token}`
                  },
        })
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setAddedDiscounts(pagination.TotalCount);
        }
    }catch(error){
        console.log(error.message)
    }

}
export default getAddedDiscounts