import { createContext, useContext, useState } from "react";

const VerifyEmailAccessControl = createContext()

export const useVerifyEmail =()=>useContext(VerifyEmailAccessControl)
export const VerifyEmailProvider= ({children})=>{
    const [canAccessVerifyEmail, setCanAccessVerifyEmail] = useState(false);

    return(
        <VerifyEmailAccessControl.Provider value={{canAccessVerifyEmail,setCanAccessVerifyEmail}}>
            {children}
        </VerifyEmailAccessControl.Provider>
    )

}