import axios from "axios"

const getNotificationById = async(token,id,{setNotificationType,setApartmentId,setSenderId,setStatus})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/notifications/${id}`,{
            headers:{
                 'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
            }
        })
        const notificationData = response.data
        setNotificationType(notificationData.type?.name)
        setApartmentId(notificationData.apartmentId)
        setSenderId(notificationData.senderId)
        setStatus(notificationData.status?.name)
    }catch(error){

    }

}
export default getNotificationById 