import { createContext, useContext, useState } from "react";

const ContractInfo = createContext()

export const useContractInfo =()=>useContext(ContractInfo)
export const ContractInfoProvider= ({children})=>{
    const[selectedTenant, setSelectedTenant] =useState('');
    const[selectedApartment,setSelectedApartment]=useState('')
    const[currency,setCurrency]=useState('')
    const[price,setPrice]=useState('')
    const[startDate,setStartDate]=useState('')
    const[endDate,setEndDate]=useState('')
    const[contractPeriod,setContractPeriod]=useState('')
    return(
        <ContractInfo.Provider value={{selectedTenant,setSelectedTenant,selectedApartment,setSelectedApartment
            ,currency,setCurrency,price,setPrice,startDate,setStartDate,endDate,setEndDate,contractPeriod,setContractPeriod
        }}>
            {children}
        </ContractInfo.Provider>
    )

}