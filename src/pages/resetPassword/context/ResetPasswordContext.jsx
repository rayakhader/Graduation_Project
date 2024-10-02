import { createContext, useContext, useState } from "react";

const resetPasswordContext = createContext()

export const useResetPassword =()=>useContext(resetPasswordContext)
export const ResetPasswordProvider= ({children})=>{
    const[resetPassword,setResetPassword]=useState(false)
    return(
        <resetPasswordContext.Provider value={{ resetPassword,setResetPassword }}>
            {children}
        </resetPasswordContext.Provider>
    )

}