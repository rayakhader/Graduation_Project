import axios from "axios"

const getApartmentsWelcomePage = async (sort,{setNewelyAddedApartments})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments`,{
            params:{
                Sorts : sort,
                Filters:'isVisible==true'
            }
        })
        const newelyAddedApartments = response.data
        setNewelyAddedApartments(newelyAddedApartments)
      
    }catch(error){
        console.log(error.message)
    }

}
export default getApartmentsWelcomePage