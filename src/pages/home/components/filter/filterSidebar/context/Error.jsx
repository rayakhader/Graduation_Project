import { createContext, useContext, useState } from "react";

const Error = createContext()

export const useError =()=>useContext(Error)
export const ErrorProvider= ({children})=>{
    const[error,setError] =useState(false) 
    const[maxPriceError,setMaxPriceError] =useState(false) 
    const[minPriceError,setMinPriceError] =useState(false) 
    return(
        <Error.Provider value={{ error,setError,minPriceError,setMinPriceError,maxPriceError,setMaxPriceError}}>
            {children}
        </Error.Provider>
    )

}