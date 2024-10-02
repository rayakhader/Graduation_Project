import axios from "axios"

const createDiscount = async(token,description,percentage,refresh,{setRefresh,setCreate,setCreateNewDiscount,setCreated})=>
{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Discounts`,
        {description,
         percentage
        }, {
            headers: {
              'Content-Type': 'application/json',
               Authorization:`Bearer ${token}`
            },
          })
        setRefresh(!refresh)
        setCreate(false)
        setCreateNewDiscount(false)
        setCreated(true)
    }
    catch(error){
        console.log(error.message)
    }

}
export default createDiscount