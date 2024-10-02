import { createContext, useContext, useState } from "react";

const AddTenantInfo = createContext()

export const useAddTenantInfo =()=>useContext(AddTenantInfo)
export const AddTenantInfoProvider= ({children})=>{
    const[firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const[phone,setPhone]=useState('')
    const[city,setCity]=useState('')
    const [notes,setNotes]=useState('')   
    return(
        <AddTenantInfo.Provider value={{firstName,setFirstName,lastName,setLastName,phone,setPhone,city,setCity,notes,setNotes}}>
            {children}
        </AddTenantInfo.Provider>
    )

}