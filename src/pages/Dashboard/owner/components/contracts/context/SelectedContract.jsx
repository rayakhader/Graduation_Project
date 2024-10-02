import { createContext, useContext, useState } from "react";

const SelectedContract = createContext()

export const useSelectedContract =()=>useContext(SelectedContract)
export const SelectedContractProvider= ({children})=>{
    const[selectedContract,setSelectedContract]=useState('')
    return(
        <SelectedContract.Provider value={{selectedContract,setSelectedContract}}>
            {children}
        </SelectedContract.Provider>
    )

}