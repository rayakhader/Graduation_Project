import { useSecondPageValidation } from "./secondPage"
import { useThirdPageValidation } from "./thirdPage"


export function useAddApartmentValidation(step) {
    const secondPageValidation =useSecondPageValidation(step)
    const thirdPageValidation =useThirdPageValidation(step)
    let tempErrors={}
    let formIsValid=true
    if(step===2){
     tempErrors= secondPageValidation.tempErrors
     formIsValid=secondPageValidation.formIsValid

    }
    else if(step===3){
      tempErrors= thirdPageValidation.tempErrors
      formIsValid=thirdPageValidation.formIsValid
    }
    return{tempErrors,formIsValid}
}