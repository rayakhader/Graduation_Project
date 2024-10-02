import { createContext, useContext, useState } from "react";
const AddApartmentDataContext = createContext()
export const useData =()=>useContext(AddApartmentDataContext)
export const DataProvider= ({children})=>{
    const [apartmentId,setApartmentId]=useState('')
    const[name,setName]=useState('')
    const[building,setBuilding]=useState('')
    const[cityName,setCityName]=useState('')
    const [universityName,setUniversityName]=useState('')
    const[region,setRegion]=useState('')
    const [floorNumber,setFloorNumber]=useState('')
    const[numberOfRooms,setNumberOfRooms]=useState('')
    const[numberOfBathrooms,setNumberOfBathrooms]=useState('')
    const [apartmentNumber,setApartmentNumber]=useState('')
    const[furnishedStatus,setFurnishedStatus]=useState('')
    const[genderAllowed,setGenderAllowed]=useState('')
    const[price,setPrice]=useState('')
    const[priceCurrency,setPriceCurrency]=useState('')
    const[description,setDescription]=useState('')
    const [coverImage, setCoverImage] = useState(null);
    const [images, setImages] = useState(Array(6).fill(null)); 
    const allImages = [coverImage].concat(images).filter(image => image !== null);
    const [universitiesList,setUniversitiesList]=useState([])
    const [citiesList,setCitiesList]=useState([])
    const [errors,setErrors]=useState({
        second:'',
        third:'',
        fourth:''
      })
    return(
        <AddApartmentDataContext.Provider 
        value={{
        apartmentId,setApartmentId,
        name,setName,building,setBuilding,
        cityName,setCityName,universityName,setUniversityName,
        region,setRegion,floorNumber,setFloorNumber,
        numberOfRooms,setNumberOfRooms,
        numberOfBathrooms,setNumberOfBathrooms,
        apartmentNumber,setApartmentNumber,
        furnishedStatus,setFurnishedStatus,
        genderAllowed,setGenderAllowed,
        price,setPrice,
        priceCurrency,setPriceCurrency,
        description,setDescription,
        coverImage, setCoverImage,
        images, setImages,
        universitiesList,setUniversitiesList,
        citiesList,setCitiesList,
        errors,setErrors
        ,allImages
        }}>
            {children}
        </AddApartmentDataContext.Provider>
    )

}