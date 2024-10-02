import { createContext, useContext, useState } from "react";

const CopySnackbarConetxt = createContext()

export const useCopySnackbar =()=>useContext(CopySnackbarConetxt)
export const CopyProvider= ({children})=>{
    const [openSnackbar, setOpenSnackbar] = useState(false);

    return(
        <CopySnackbarConetxt.Provider value={{openSnackbar,setOpenSnackbar}}>
            {children}
        </CopySnackbarConetxt.Provider>
    )

}