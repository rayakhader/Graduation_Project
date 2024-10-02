import { createContext, useContext, useState } from "react";

const Sorts = createContext()

export const useSorts =()=>useContext(Sorts)
export const SortsProvider= ({children})=>{
    const [sort, setSort] = useState('');
    return(
        <Sorts.Provider value={{sort,setSort}}>
            {children}
        </Sorts.Provider>
    )

}