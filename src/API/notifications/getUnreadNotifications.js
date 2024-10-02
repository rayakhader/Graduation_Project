import axios from "axios"

const getUnreadNotifications = async(ownerId,{setNotificationsCount})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/notifications/user/${ownerId}`,{
            params:{
                Filters : 'status==unread'
            }
        })
        const unreadNotifications = response.data
        setNotificationsCount(unreadNotifications.length)
    }catch(error){

    }

}
export default getUnreadNotifications