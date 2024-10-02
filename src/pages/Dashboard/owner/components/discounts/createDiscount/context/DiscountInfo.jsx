import { createContext, useContext, useState } from "react";

const DiscountInfo = createContext()

export const useDiscountInfo =()=>useContext(DiscountInfo)
export const DiscountInfoProvider= ({children})=>{
    const[amount,setAmount]=useState('')
    const [description,setDescription]=useState('')
    return(
        <DiscountInfo.Provider value={{amount,setAmount,description,setDescription}}>
            {children}
        </DiscountInfo.Provider>
    )

}