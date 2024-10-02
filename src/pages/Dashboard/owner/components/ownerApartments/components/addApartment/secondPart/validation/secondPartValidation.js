function secondPartValidation (name,building,
    cityName,universityName,
    region){
    let tempErrors={}
    let formIsValid=true
        if(name===''){
            formIsValid=false
            tempErrors.name='This field is required'
        } else if (name.length > 30) {
            formIsValid = false;
            tempErrors.name = 'Name cannot exceed 30 characters';
        }    
        if(building===''){
            formIsValid=false
            tempErrors.building='This field is required'
        }else if (building.length > 15){
            formIsValid = false;
            tempErrors.building = 'Building cannot exceed 15 characters';
        }
        if(cityName===''){
            formIsValid=false
            tempErrors.city='This field is required'
        }
        if(universityName===''){
            formIsValid=false
            tempErrors.university='This field is required'
        }
        if(region===''){
            formIsValid=false
            tempErrors.region='This field is required'
        }
    
    return{tempErrors,formIsValid}

}
export default secondPartValidation