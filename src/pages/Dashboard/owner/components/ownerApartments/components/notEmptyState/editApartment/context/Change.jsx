import { createContext, useContext, useState } from "react";

const Change = createContext()

export const useChange =()=>useContext(Change)
export const ChangeApartmentInfoProvider= ({children})=>{
    const [change,setChange]=useState('')
    return(
        <Change.Provider value={{change,setChange}}>
            {children}
        </Change.Provider>
    )

}