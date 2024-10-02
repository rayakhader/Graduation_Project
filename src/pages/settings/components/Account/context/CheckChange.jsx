import { createContext, useContext, useState} from "react";

const CheckChange = createContext()

export const useCheckChange =()=>useContext(CheckChange)
export const CheckChangeProvider= ({children})=>{
    const [change,setChange]=useState('')

    return(
        <CheckChange.Provider value={{ change,setChange }}>
            {children}
        </CheckChange.Provider>
    )
}