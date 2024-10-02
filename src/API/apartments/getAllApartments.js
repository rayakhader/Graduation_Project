import axios from "axios"

const getAllApartments = async(filter ='',callbacks)=>{
    const {setApartments} =callbacks
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments?Filters=${filter}`,
        {
            headers: {
                'Content-Type': 'application/json',
              },
        })
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setApartments(pagination.TotalCount);
        }
    }
    catch(error){
        setApartments(0)
    }
}
export default getAllApartments