import { createContext, useContext, useState } from "react";

const SignupConetxt = createContext()

export const useSignup =()=>useContext(SignupConetxt)
export const SignupProvider= ({children})=>{
    const [signupError, setSignupError] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    return(
        <SignupConetxt.Provider value={{ signupError, setSignupError, signupSuccess, setSignupSuccess, openDialog, setOpenDialog }}>
            {children}
        </SignupConetxt.Provider>
    )

}