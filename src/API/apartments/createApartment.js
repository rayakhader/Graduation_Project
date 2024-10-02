import axios from "axios"
import uplodeApartmentImages from "../images/uplodeApartmentImagesAPI"


const createApartment = async(name,region,building,floorNumber,apartmentNumber,numberOfRooms,numberOfBathrooms,
    description,price,furnishedStatus,genderAllowed,priceCurrency,cityName,universityName,allImages,token,clear,callbacks)=>{
   const {setShowSuccess,setError,setApartmentId}=callbacks
        try{
        const response = await axios.post('https://sakanat-dev.azurewebsites.net/api/apartments',{
            name,
            region,
            building,
            floorNumber,
            apartmentNumber,
            numberOfRooms,
            numberOfBathrooms,
            description,
            price,
            furnishedStatus,
            genderAllowed,
            priceCurrency,
            cityName,
            universityName,
        },{
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
        }
        )
        const id = response.data.id
        uplodeApartmentImages(id,allImages,token,{setShowSuccess}) 
        setApartmentId(id)
        clear()
       }
    catch(error){
        setError(error.response.data.title)
    }
}
export default createApartment