import axios from "axios"

const editTenantById =async(token,tenantId,firstName,lastName,phoneNumber,cityId,note,refresh,{setRefresh,setSuccess,setChanged})=>{
    try{
        const response = await axios.put(`https://sakanat-dev.azurewebsites.net/api/Tenants/${tenantId}`,
        {
            firstName,
            lastName,
            phoneNumber,
            cityId,
            note,
        },
        {
            headers: {
              'Content-Type': 'application/json',
               Authorization:`Bearer ${token}`
            },
          }
        )
        // setEditTenant(false)
        // setUpdated(true)
        setSuccess(true)
        setChanged(false)
        setRefresh(!refresh)
    }
    catch(error){
        console.log(error.message)
    }
}
export default editTenantById