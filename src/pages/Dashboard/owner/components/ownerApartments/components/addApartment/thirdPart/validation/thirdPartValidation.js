function thirdPartValidation(floorNumber, numberOfRooms, numberOfBathrooms, apartmentNumber, furnishedStatus, genderAllowed) {
    let tempErrors = {};
    let formIsValid = true;

    if (floorNumber === '') {
        formIsValid = false;
        tempErrors.floorNum = 'This field is required';
    } else if (isNaN(floorNumber) || floorNumber < 0) {
        formIsValid = false;
        tempErrors.floorNum = 'Floor number cannot be negative';
    }

    if (numberOfRooms === '') {
        formIsValid = false;
        tempErrors.bedroomNum = 'This field is required';
    } else if (isNaN(numberOfRooms) || numberOfRooms < 0) {
        formIsValid = false;
        tempErrors.bedroomNum = 'Number of rooms cannot be negative';
    }

    if (numberOfBathrooms === '') {
        formIsValid = false;
        tempErrors.bathroomNum = 'This field is required';
    } else if (isNaN(numberOfBathrooms) || numberOfBathrooms < 0) {
        formIsValid = false;
        tempErrors.bathroomNum = 'Number of bathrooms cannot be negative';
    }

    if (apartmentNumber === '') {
        formIsValid = false;
        tempErrors.apartmentNum = 'This field is required';
    } else if (isNaN(apartmentNumber) || apartmentNumber < 0) {
        formIsValid = false;
        tempErrors.apartmentNum = 'Apartment number cannot be negative';
    }

    if (furnishedStatus === '') {
        formIsValid = false;
        tempErrors.furnished = 'This field is required';
    }

    if (genderAllowed === '') {
        formIsValid = false;
        tempErrors.gender = 'This field is required';
    }

    return { tempErrors, formIsValid };
}

export default thirdPartValidation;
