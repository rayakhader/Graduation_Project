export function phoneNumberValidation(phoneNumber,roles){
    let tempErrors={}
    let formIsValid=true
    const phoneNumberPattern = /^[1-9]\d{8}$/;

    if(roles==='Owner'){
        if (!phoneNumber.trim()) {
          tempErrors.phoneNumber="Phone number is required.";
          formIsValid = false;
        }
        else if (phoneNumber.startsWith('0')) {
          tempErrors.phoneNumber = "Phone number shouldn't start with 0.";
          formIsValid = false;
        }
        else if (!phoneNumberPattern.test(phoneNumber)) {
          tempErrors.phoneNumber="Invalid phone number."
          formIsValid = false;
        }
        else{
          tempErrors.phoneNumber=''
        }
    }
        return{tempErrors,formIsValid}
}