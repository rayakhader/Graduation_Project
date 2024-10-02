import axios from "axios"

const getApartmentsPerPage = async(page,itemsPerPage,filters,sort,{setApartmentsPerPage,setTotalPages})=>{
    const { city, university,price, minPrice, maxPrice, bathrooms, bedrooms,gender,visible} = filters
    let filterString =''
    if(city){
        filterString += `city.name@=${city}`
    }
    if (university) {
        filterString += `${filterString ? ',' : ''}nearbyUniversity.name@=${university}`;
    }
    if(price){
        filterString += `${filterString ? ',' : ''}price==${price}`;
    }
    if (minPrice) {
        filterString += `${filterString ? ',' : ''}price>=${minPrice}`;
    }
    if (maxPrice) {
        filterString += `${filterString ? ',' : ''}price<=${maxPrice}`;
    }
    if (bathrooms) {
        filterString += `${filterString ? ',' : ''}numberofbathrooms==${bathrooms}`;
    }
    if (bedrooms) {
        filterString += `${filterString ? ',' : ''}numberofrooms==${bedrooms}`;
    }
    if(visible){
        filterString += `${filterString ? ',' : ''}${visible}`;
    }
    if(gender){
        filterString += `${filterString ? ',' : ''}Genderallowed==${gender}`;
    }
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments`,
        {params: {
            Page: page,
            PageSize: itemsPerPage,
            Filters: filterString || '',
            Sorts : sort || ''
          }},)
        const apartmentsList = response.data
        setApartmentsPerPage(apartmentsList)
        const xPagination = response.headers['x-pagination'];
        if (xPagination) {
          const pagination = JSON.parse(xPagination);
          setTotalPages(pagination.TotalPages);
        }
    }catch(error){
        console.log(error.message)
    }

}
export default getApartmentsPerPage