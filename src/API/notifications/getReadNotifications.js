import axios from "axios"

const getReadNotifications = async(ownerId,{setNotificationsCount})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/notifications/user/${ownerId}`,{
            params:{
                Filters : 'status==read'
            }
        })
        const readNotifications = response.data
        setNotificationsCount(readNotifications.length)
    }catch(error){

    }

}
export default getReadNotifications