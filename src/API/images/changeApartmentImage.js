import axios from "axios"

const changeApartmentImage = async (token,apartmentId,imageId,formData,refresh,{setRefresh})=>{
    try{
        const response = await axios.put(`https://sakanat-dev.azurewebsites.net/api/Apartments/${apartmentId}/image/${imageId}`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              },
        })
        setRefresh(!refresh)
    }
    catch(error){
        console.log(error.message)
    }

}
export default changeApartmentImage