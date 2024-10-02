import axios from "axios"

const updateUserInfo =async(token,firstName,lastName,phoneNumber,city,refresh,callbacks)=>{
    const {setConfirm,setUpdated,setSaveChanges,setRefresh,setChange}=callbacks
    try{
        const response = await axios.put('https://sakanat-dev.azurewebsites.net/api/Users',{
        firstName,
        lastName,
        phoneNumber,
        city
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        setConfirm(false)
        setUpdated(true)
        setSaveChanges(false)
        setRefresh(!refresh)
        setChange(false)
    }catch(error){
    console.log(error)
    }

}
export default updateUserInfo