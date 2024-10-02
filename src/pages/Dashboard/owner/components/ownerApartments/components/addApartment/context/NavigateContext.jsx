import { createContext, useContext, useState } from "react";

const NavigateContext = createContext()

export const useNavigate =()=>useContext(NavigateContext)
export const NavigateProvider= ({children})=>{
    const[currentStep,setCurrentStep]=useState(1)
    const goToNextPage =()=>setCurrentStep((prevStep)=> prevStep + 1)
    const goToPreviousPage =()=>setCurrentStep((prevStep)=>prevStep - 1)

    return(
        <NavigateContext.Provider value={{ currentStep,goToNextPage,goToPreviousPage }}>
            {children}
        </NavigateContext.Provider>
    )

}