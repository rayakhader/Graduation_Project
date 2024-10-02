// Check for Password 
export function passwordValidation(password){
    let tempErrors={}
    let formIsValid=true;
if (password === '') {
    tempErrors.password = 'Passowrd is required';
    formIsValid = false;
  } else if (password.length < 8) {
    tempErrors.password = 'Password must be at least 8 characters long';
    formIsValid = false;
  } else if (!/[a-z]/.test(password)) {
    // Check for at least one lowercase letter
    tempErrors.password = 'Password must contain at least one lowercase letter';
    formIsValid = false;
  } else if (!/[A-Z]/.test(password)) {
    // Check for at least one uppercase letter
    tempErrors.password = 'Password must contain at least one uppercase letter';
    formIsValid = false;
  } else if (!/\W|_/.test(password)) {
    // Check for at least one non-alphanumeric character (special character or number)
    tempErrors.password = 'Password must contain at least one non-alphabetic character';
    formIsValid = false;
  } else {
    tempErrors.password = '';
  }
  return {tempErrors,formIsValid}
}