import { createContext, useContext, useState} from "react";

const AccountData = createContext()

export const useAccountData =()=>useContext(AccountData)
export const AccountDataProvider= ({children})=>{
    const [fullName,setFullName]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const [city,setCity]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')

    return(
        <AccountData.Provider value={{ fullName,setFullName,city,setCity,phoneNumber,setPhoneNumber,firstName,lastName,setFirstName,setLastName }}>
            {children}
        </AccountData.Provider>
    )
}