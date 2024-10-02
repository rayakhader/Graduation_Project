import { createContext, useContext, useState} from "react";

const SaveChanges = createContext()

export const useSaveChanges =()=>useContext(SaveChanges)
export const SaveChangesProvider= ({children})=>{
    const [saveChanges,setSaveChanges]=useState(false)
    const[confirm,setConfirm]=useState(false)
    return(
        <SaveChanges.Provider value={{ saveChanges,setSaveChanges, confirm,setConfirm}}>
            {children}
        </SaveChanges.Provider>
    )
}