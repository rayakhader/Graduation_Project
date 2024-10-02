import { createContext, useContext, useState } from "react";

const ShowPasswordContext = createContext()

export const useShowPassword =()=>useContext(ShowPasswordContext)
export const ShowPasswordProvider= ({children})=>{
    const [showPassword, setShowPassword] = useState(false);
    return(
        <ShowPasswordContext.Provider value={{ showPassword,setShowPassword }}>
            {children}
        </ShowPasswordContext.Provider>
    )

}