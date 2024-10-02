import axios from "axios"
import getUnreadNotifications from "./getUnreadNotifications"

const getAllNotifications= async(token,ownerId,selectedTab,userRole,{setNotifications,setNotificationsCount})=>{
    let filterString= ''
    if(selectedTab===0){
        filterString += ''
    }else if(selectedTab===1){
        filterString += 'Type==Newapartment'
    }else if (selectedTab===2 && userRole==='Owner'){
        filterString += 'Type==Newfollower'
    }
    else if(selectedTab===2 && userRole==='Customer'){
         filterString += 'Type==newdiscount'
    }
    else if (selectedTab===3 && userRole==='Owner') {
        filterString += 'Type==newdiscount'
    }
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/notifications/user/${ownerId}`,{
            params:{
                Sorts:'-CreationDate',
                Filters: filterString
            },
            headers: {
               'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
        })
        const notifications = response.data
        setNotifications(notifications)
        getUnreadNotifications(ownerId,{setNotificationsCount})
    }catch(error){
        console.log(error)
    }
}
export default getAllNotifications