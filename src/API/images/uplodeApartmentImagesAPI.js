import axios from "axios"

const uplodeApartmentImages =async (id,images,token,callbacks)=>{
    const {setShowSuccess}=callbacks
    const formData = new FormData();
    images.forEach(image => {
        formData.append('images', image);
    });
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Apartments/${id}/images`,
            formData
        ,{
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              },
        })
        setShowSuccess(true)
    }
    catch(error){
        console.log(error.response)
    }
}
export default uplodeApartmentImages