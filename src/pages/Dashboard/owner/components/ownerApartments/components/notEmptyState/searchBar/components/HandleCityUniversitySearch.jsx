import React, { useEffect } from 'react'
import HandleCity from './HandleCity';
import HandleUniversity from './HandleUniversity';
import { useSearchbar } from '../context/SearchbarContext';
import getAllCities from '../../../../../../../../../API/city/getAllCities';
import getAllUniversities from '../../../../../../../../../API/university/getAllUniversities';

function HandleCityUniversitySearch({citiesList,setCitiesList,universitiesList,setUniversitiesList}) {
  const {selectedTab}=useSearchbar()
    useEffect(()=>{
        if(selectedTab===0){
          getAllCities({setCitiesList})
        }
        else{
          getAllUniversities({setUniversitiesList})
        }
      },[selectedTab])
  return (
    <>
    <HandleCity citiesList={citiesList} setCitiesList={setCitiesList} />
    <HandleUniversity universitiesList={universitiesList} setUniversitiesList={setUniversitiesList}  />
    </>
  )
}
export default HandleCityUniversitySearch