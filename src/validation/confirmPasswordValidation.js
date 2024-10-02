import { passwordValidation } from "./passwordValidation";

    
 export function confirmPasswordValidation(password,confirmPassword){  
    let {tempErrors,formIsValid}=passwordValidation(password)
      if (password !== confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match.';
      formIsValid = false;
    } else {
      tempErrors.confirmPassword = '';
    }
    return {tempErrors,formIsValid}
}