import { createContext, useContext, useState } from "react";

const LoginConetxt = createContext()

export const useLogin =()=>useContext(LoginConetxt)
export const LoginProvider= ({children})=>{
    const [showAlert, setShowAlert] = useState(false);
    const [loginError,setLoginError]=useState('')
    const[isLoggedin,setIsLoggedin]=useState(false)

    return(
        <LoginConetxt.Provider value={{ showAlert, setShowAlert, loginError, setLoginError, isLoggedin, setIsLoggedin }}>
            {children}
        </LoginConetxt.Provider>
    )

}