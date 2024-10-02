import axios from "axios"

const deleteApartmentImage = async (token,apartmentId,imageId,refresh,{setRefresh})=>{
    try{
        const response = await axios.delete(`https://sakanat-dev.azurewebsites.net/api/Apartments/${apartmentId}/image/${imageId}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
            }
        })
        setRefresh(!refresh)
    }catch(error){
        console.log(error.message)

    }

}
export default deleteApartmentImage