import axios from "axios"

const uplodeUserImage = async(token,userId,userImage,callbacks)=>{
    const formData = new FormData();
    formData.append('file', userImage);
    const {setUserImage,setUplodeImage}=callbacks
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/users/profile-image`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              },
        })
        const image =response.data
        setUserImage(image)
        setUplodeImage(false)
    }
    catch(error){
        console.log(error.message)
    }


}
export default uplodeUserImage