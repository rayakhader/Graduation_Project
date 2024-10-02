import { createContext, useContext, useState } from "react";

const ConfirmNewPass = createContext()

export const useConfirmPass =()=>useContext(ConfirmNewPass)
export const ConfirmPassProvider= ({children})=>{
    const[confirmNewPass,setConfirmNewPass]=useState('')

    return(
        <ConfirmNewPass.Provider value={{ confirmNewPass,setConfirmNewPass }}>
            {children}
        </ConfirmNewPass.Provider>
    )

}