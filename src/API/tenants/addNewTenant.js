import axios from "axios"
import resetField from "../../pages/Dashboard/owner/components/tenants/components/addNewTenant/resetField"

const addNewTenant =async(token,firstName,lastName,phoneNumber,cityId,note,refresh,callbacks)=>{
    const {setAdded,setCreateTenant,setRefresh,setFirstName,setLastName,setPhone,setCity,setNotes}=callbacks
    try{
        const response =await axios.post(`https://sakanat-dev.azurewebsites.net/api/Tenants`,{
            firstName,
            lastName,
            phoneNumber,
            cityId,
            note
        },
        {
            headers: {
              'Content-Type': 'application/json',
               Authorization:`Bearer ${token}`
            },
          }
        )
        setCreateTenant(false)
        setAdded(true)
        setRefresh(!refresh)
        resetField(setFirstName,setLastName,setPhone,setCity,setNotes)
    }
    catch(error){
       console.log(error.message)
       setAdded(false)
    }

}
export default addNewTenant