import { createContext, useContext, useState } from "react";

const SelectedIndex = createContext()

export const useSelectedIndex =()=>useContext(SelectedIndex)
export const SelectedIndexProvider= ({children})=>{
    const[selectedIndex,setSelectedIndex]=useState('')
    return(
        <SelectedIndex.Provider value={{selectedIndex,setSelectedIndex}}>
            {children}
        </SelectedIndex.Provider>
    )

}