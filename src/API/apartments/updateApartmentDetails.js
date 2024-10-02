import axios from "axios"

const updateApartmentDetails = async(token,apartmentId,name,region,numberOfRooms,numberOfBathrooms,
    description,price,furnishedStatus,genderAllowed,priceCurrency,refresh,callbacks)=>{
        const {setOpen,setUpdated,setRefresh}=callbacks
    try{
        const response = await axios.put(`https://sakanat-dev.azurewebsites.net/api/apartments/${apartmentId}`,{
            name,
            region,
            numberOfRooms,
            numberOfBathrooms,
            description,
            price,
            furnishedStatus,
            genderAllowed,
            priceCurrency,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
              },
        }
    )
        setOpen(false)
        setUpdated(true)
        setRefresh(!refresh)
    }
    catch(error){
        console.log(error)
    }

}
export default updateApartmentDetails