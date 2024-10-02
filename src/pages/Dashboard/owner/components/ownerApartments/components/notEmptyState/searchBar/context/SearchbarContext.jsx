import { createContext, useContext, useState } from "react";

const SearchbarContext = createContext()

export const useSearchbar =()=>useContext(SearchbarContext)
export const SearchbarProvider= ({children})=>{
    const[selectedTab,setSelectedTab]=useState(0)
    const [query,setQuery]=useState('')

    return(
        <SearchbarContext.Provider value={{ selectedTab,setSelectedTab,query,setQuery }}>
            {children}
        </SearchbarContext.Provider>
    )

}