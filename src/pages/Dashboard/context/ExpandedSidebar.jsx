import { createContext, useContext, useState } from "react";

const ExpandedSidebar = createContext()

export const useExpanded =()=>useContext(ExpandedSidebar)
export const ExpandedProvider= ({children})=>{
    const[expanded,setExpanded]=useState(false)

    return(
        <ExpandedSidebar.Provider value={{ expanded,setExpanded }}>
            {children}
        </ExpandedSidebar.Provider>
    )

}