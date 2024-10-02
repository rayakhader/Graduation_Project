import { createContext, useContext, useState } from "react";

const ForgetPasswordContext = createContext()

export const useForget =()=>useContext(ForgetPasswordContext)
export const ForgetProvider= ({children})=>{
    const [emailSent, setEmailSent] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const[sendEmailError,setSendEmailError]=useState(false)
    const[countDown,setCountDown]=useState(0)


    return(
        <ForgetPasswordContext.Provider value={{ emailSent,setEmailSent,openSnackbar,setOpenSnackbar,sendEmailError,setSendEmailError,
        countDown,setCountDown
        }}>
            {children}
        </ForgetPasswordContext.Provider>
    )

}