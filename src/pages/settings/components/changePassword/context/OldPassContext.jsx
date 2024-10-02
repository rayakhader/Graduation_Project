import { createContext, useContext, useState } from "react";

const OldPassContext = createContext()

export const useOldPass =()=>useContext(OldPassContext)
export const OldPassProvider= ({children})=>{
    const[oldPass,setOldPass]=useState('')
    const [oldError,setOldError]=useState('')

    return(
        <OldPassContext.Provider value={{ oldPass,setOldPass, oldError,setOldError }}>
            {children}
        </OldPassContext.Provider>
    )

}