import { createContext, useContext, useState } from "react";

const SelectAll = createContext()

export const useSelectAll =()=>useContext(SelectAll)
export const SelectAllProvider= ({children})=>{
    const[selectAll,setSelectAll]=useState(false)
    return(
        <SelectAll.Provider value={{selectAll,setSelectAll}}>
            {children}
        </SelectAll.Provider>
    )

}