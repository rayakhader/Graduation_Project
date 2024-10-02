import { createContext, useContext, useState } from "react";

const SelectedItemContext = createContext()

export const useSelectedItem =()=>useContext(SelectedItemContext)
export const SelectedItemProvider= ({children})=>{
    const[selectedItem,setSelectedItem]=useState(false)

    return(
        <SelectedItemContext.Provider value={{ selectedItem,setSelectedItem }}>
            {children}
        </SelectedItemContext.Provider>
    )

}