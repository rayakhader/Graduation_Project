export function nameValidation(name){
    let tempErrors={}
    let formIsValid=true

    const namePattern= /^[A-Za-z]+$/;
    if(name===''){
        tempErrors.name='Full name is required.'
        formIsValid=false
    }
    else if (!namePattern.test(name)){
        tempErrors.name='Full name contains only alphapatic characters.'
        formIsValid=false
    }else{
        tempErrors.name=''
    }

    return {tempErrors,formIsValid}


}