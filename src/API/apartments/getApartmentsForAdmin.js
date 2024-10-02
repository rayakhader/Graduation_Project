import axios from "axios"

const getApartmentsForAdmin = async(page,itemsPerPage,{setApartmentsPerPage,setTotalPages,setTotalApartments})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments`,{params: {
            Page: page,
            PageSize: itemsPerPage,
          }})
          const apartmentsList = response.data
          setApartmentsPerPage(apartmentsList)
          const xPagination = response.headers['x-pagination'];
          if (xPagination) {
            const pagination = JSON.parse(xPagination);
            setTotalPages(pagination.TotalPages);
            setTotalApartments(pagination.TotalCount)
          }

    }catch(error){
        console.log(error.message)
    }

}
export default getApartmentsForAdmin