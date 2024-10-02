import axios from "axios"

const getApartmentImagesById = async(id,callbacks)=>{
    const {setImages}=callbacks
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments/${id}/images`)
        const images = response.data
        setImages(images)
    }
    catch(error){
        console.log(error.message)
    }

}
export default getApartmentImagesById