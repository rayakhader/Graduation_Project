function fourthPartValidation(price, currency,description){
    let tempErrors={}
    let formIsValid=true
    if (price === '') {
        formIsValid = false;
        tempErrors.price = 'This field is required';
    } else if (isNaN(price) || price < 0) {
        formIsValid = false;
        tempErrors.price = 'Price cannot be negative';
    }
    if(currency===''){
        formIsValid=false
        tempErrors.currency='This field is required'
    }
    if(description===''){
        formIsValid=false
        tempErrors.description='This field is required'
    }else if(description.length <= 20){
        formIsValid=false
        tempErrors.description='Descrption must be more than 20 characters'
    }

return{tempErrors,formIsValid}

}
export default fourthPartValidation