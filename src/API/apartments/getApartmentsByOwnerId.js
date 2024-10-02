import axios from "axios"

const getApartmentsByOwnerId= async(token,userId,callbacks)=>{
    const {setApartmentsList,setAvailableApartments,setNotAvailableApartments,setVisibleApartments,setNotVisibleApartments,setDiscountedApartments}=callbacks
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/apartments/user/${userId}`,{
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
              },
        })
        const allApartments = response.data
        setApartmentsList(allApartments)
        const availableApartments= allApartments.filter(apartment=>apartment.isAvailable===true)
        setAvailableApartments(availableApartments)
        const notAvailableApartments =allApartments.filter(apartment=>apartment.isAvailable===false)
        setNotAvailableApartments(notAvailableApartments)
        const visibleApartments = allApartments.filter(apartment=>apartment.isVisible===true)
        setVisibleApartments(visibleApartments)
        const notVisibleApartments = allApartments.filter(apartment=>apartment.isVisible===false)
        setNotVisibleApartments(notVisibleApartments)
        const discountedApartments = allApartments.filter(apartment=>apartment.isDiscounted===true)
        setDiscountedApartments(discountedApartments)
    }

    catch(error){
        console.log(error.message)
        setApartmentsList([])
    }
}
export default getApartmentsByOwnerId