import axios from "axios"

const getUserByIdAccount =async(userRole,userId,refresh,callbacks)=>{
    const {setUserInfo,setFullName,setFirstName,setLastName,setCity,setPhoneNumber,setSelectedCountry,setRefresh}=callbacks
    const countryData = [
        { name: "Palestine", code: "+970", flag: "ps" },
        { name: "Palestine", code: "+972", flag: "ps" },
      ];
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/Users/${userId}`)
        const userInfo =response.data
        setUserInfo(userInfo)
        const fullName =userInfo.fullName
        const [firstName, lastName] = fullName.split(' ');
        setFullName(fullName)
        setFirstName(firstName)
        setLastName(lastName)
        setCity(userInfo.cityName) 

        const phoneNumber = userInfo.phoneNumber;
        let number = phoneNumber;

        if(userRole==='Owner'){
        let countryCode = '';
    
        if (phoneNumber.startsWith('+972')) {
          countryCode = '+972';
          number = phoneNumber.slice(4); 
        } else if (phoneNumber.startsWith('+970')) {
          countryCode = '+970';
          number = phoneNumber.slice(4); 
        }
        const selectedCountry = countryData.find((country) => country.code === countryCode);
        setSelectedCountry(selectedCountry);
      }
        setPhoneNumber(number);
        setRefresh(!refresh)

    }catch(error){
    console.log(error)
    }

}
export default getUserByIdAccount