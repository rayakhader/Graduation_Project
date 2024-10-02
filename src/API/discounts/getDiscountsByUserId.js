import axios from "axios"

const getDiscountsByUserId = async (token,userId,page,itemsPerPage,tabValue,{setDiscountsList,setTotalPages})=>{
 
  let filterString =''
  if(tabValue==='notAdded'){
    filterString += `ApartmentDiscounts.Count==0`;
  }else if(tabValue==='added'){
    filterString += `ApartmentDiscounts.Count!=0`;
  }
  try{
    const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Discounts/user/${userId}`,{
      params:{
        Page:page,
        PageSize:itemsPerPage,
        Filters: filterString 
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization:`Bearer ${token}`
      },
    })
    const xPagination = response.headers['x-pagination'];
    if (xPagination) {
      const pagination = JSON.parse(xPagination);
      setTotalPages(pagination.TotalPages);
    }
    const discountsList = response.data
    setDiscountsList(discountsList)
  }
  catch(error){
    console.log(error.message)
  }
}
export default getDiscountsByUserId