import axios from "axios"

const getNumberOfApartments =async(token,userId,{setApartmentsNum})=>{
 try{
    const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments/user/${userId}`,{
      headers: {
         'Content-Type': 'application/json',
          Authorization:`Bearer ${token}`
       },
    })
    const apartments = response.data
    const apartmentsNum=apartments.length
    setApartmentsNum(apartmentsNum)
 }
 catch(error){
    console.log(error.message)
 }

}
export default getNumberOfApartments