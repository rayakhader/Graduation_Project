import getUniversitiesByCityId from "../../../../../../../../API/university/getUniversitiesByCityId";

export const handleCity=(e,citiesList,setCity,setUniversitiesList)=>{
    const value =e.target.value
    setCity(value)
    const selectedCityObj = citiesList.find(cityItem => cityItem.name === value);
    const CityId= selectedCityObj.id
    getUniversitiesByCityId(CityId,{setUniversitiesList})
  }
  export const handleUniversity =(e,setUniversity)=>{
    setUniversity(e.target.value)
  }