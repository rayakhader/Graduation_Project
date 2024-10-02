import { createContext, useContext, useState } from "react";

const FilterValues = createContext()

export const useFilter =()=>useContext(FilterValues)
export const FilterProvider= ({children})=>{
    const [city,setCity]=useState('')
    const [university,setUniversity]=useState('')
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const[bathrooms,setBathrooms]=useState('')
    const[bedrooms,setBedrooms]=useState('')
    const [gender,setGender]=useState('')
    return(
        <FilterValues.Provider value={{ city,setCity,university,setUniversity,minPrice,maxPrice,setMaxPrice,setMinPrice,bathrooms,setBathrooms
            ,bedrooms,setBedrooms,gender,setGender
         }}>
            {children}
        </FilterValues.Provider>
    )

}