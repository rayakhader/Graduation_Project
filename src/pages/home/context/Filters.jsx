import { createContext, useContext, useState } from "react";

const Filters = createContext()

export const useFilters =()=>useContext(Filters)
export const FiltersProvider= ({children})=>{
    const [filters, setFilters] = useState({
        city: '',
        university: '',
        price:'',
        minPrice: '',
        maxPrice: '',
        bathrooms: '',
        bedrooms: '',
        gender:'',
        visible :'isVisible==true'
      });
    return(
        <Filters.Provider value={{filters,setFilters}}>
            {children}
        </Filters.Provider>
    )

}