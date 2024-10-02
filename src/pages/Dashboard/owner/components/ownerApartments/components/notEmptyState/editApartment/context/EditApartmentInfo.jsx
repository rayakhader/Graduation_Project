import { createContext, useContext, useState } from "react";

const EditApartmentInfo = createContext()

export const useEditApartmentInfo =()=>useContext(EditApartmentInfo)
export const EditApartmentInfoProvider= ({children})=>{
    const [name,setName]=useState('')
    const [building,setBuilding]=useState('')
    const [city,setCity]=useState('')
    const [university,setUniversity]=useState('')
    const [region,setRegion]=useState('')
    const [floorNum,setFloorNum]=useState('')
    const [apartmentNum,setApartmentNum]=useState('')
    const [numOfRooms,setNumOfRooms]=useState('')
    const [numOfBathrooms,setNumOfBathrooms]=useState('')
    const [price,setPrice]=useState('')
    const [currency,setCurrency]=useState({})
    const [furnishedStatus,setFurnishedStatus]=useState({})
    const [gender,setGender]=useState({})
    const [description,setDescription]=useState('')
    return(
        <EditApartmentInfo.Provider value={{name,setName,building,setBuilding,city,setCity,university,setUniversity,
            region,setRegion,floorNum,setFloorNum,apartmentNum,setApartmentNum,numOfRooms,setNumOfRooms,numOfBathrooms,
            setNumOfBathrooms,price,setPrice,currency,setCurrency,furnishedStatus,setFurnishedStatus,
            gender,setGender,description,setDescription
        
        }}>
            {children}
        </EditApartmentInfo.Provider>
    )

}