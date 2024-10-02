import axios from "axios"

const getTenantById = async (token,tenantId,{setTenantInfo,setFirstName,setLastName,setCityId,setPhone,setNotes,setChanged})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Tenants/${tenantId}`, {
            headers: {
              'Content-Type': 'application/json',
               Authorization:`Bearer ${token}`
            },
          })
        const tenantInfo =response.data
        setTenantInfo(tenantInfo)
        setFirstName(tenantInfo.firstName)
        setLastName(tenantInfo.lastName)
        setPhone(tenantInfo.phoneNumber)
        setCityId(tenantInfo.city.id)
        setNotes(tenantInfo.note)
        setChanged(false)
    }
    catch(error){
        console.log(error.message)

    }

}
export default getTenantById