import axios from "axios"

const checkSuspension = async (token,ownerId,clickAddApartment,{setSuspensionInfo,setSuspensionDialog})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/suspensions/${ownerId}`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        })
        const suspensionInfo= response.data
        if (Object.keys(suspensionInfo).length !== 0) {
        setSuspensionInfo(suspensionInfo)
        setSuspensionDialog(true)
        }else{
            clickAddApartment()
        }
    }
    catch(error){
        clickAddApartment()
        console.log(error.message)
    }

}
export default checkSuspension