import { createContext, useContext, useState } from "react";

const EditTenantInfo = createContext()

export const useEditTenantInfo =()=>useContext(EditTenantInfo)
export const EditTenantInfoProvider= ({children})=>{
    const[firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const[phone,setPhone]=useState('')
    const[cityId,setCityId]=useState('')
    const [notes,setNotes]=useState('') 
    return(
        <EditTenantInfo.Provider value={{firstName,setFirstName,lastName,setLastName,phone,setPhone,cityId,setCityId,notes,setNotes}}>
            {children}
        </EditTenantInfo.Provider>
    )

}