import { createContext, useContext, useState } from "react";

const DialogContext = createContext()

export const useDialog =()=>useContext(DialogContext)
export const DialogProvider= ({children})=>{
    const [openDialog, setOpenDialog] = useState(false);
    return(
        <DialogContext.Provider value={{openDialog,setOpenDialog}}>
            {children}
        </DialogContext.Provider>
    )

}