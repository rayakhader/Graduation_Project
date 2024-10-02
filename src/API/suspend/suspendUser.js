import axios from "axios"

const suspendUser = async (token,userId,apartmentId,endDate,reason,{setSuspended,setSuspend,setError})=>{
    try{
        const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Suspensions`,{
            userId,
            apartmentId,
            endDate,
            reason
        },{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        setSuspended(true)
        setSuspend(false)
        setError('')
    }catch(error){
        console.log(error.message)
        setSuspend(false)
        setError(error.response.data.title)
    }

}
export default suspendUser