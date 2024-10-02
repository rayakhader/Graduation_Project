import { createContext, useContext, useState } from "react";

const NewPassContext = createContext()

export const useNewPass =()=>useContext(NewPassContext)
export const NewPassAdminProvider= ({children})=>{
    const[newPass,setNewPass]=useState('')

    return(
        <NewPassContext.Provider value={{ newPass,setNewPass }}>
            {children}
        </NewPassContext.Provider>
    )

}