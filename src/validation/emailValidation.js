
export function emailValidation(email){
       let tempErrors={}
       let formIsValid=true;
       const validator = require('validator');

    if(email===''){
       tempErrors.email='Email is required.'
        formIsValid=false
    }else if (email!==''&&!validator.isEmail(email)){
       tempErrors.email='Invalid email.'
       formIsValid=false
    }else{
       tempErrors.email=''
    }

    return{tempErrors,formIsValid}
}