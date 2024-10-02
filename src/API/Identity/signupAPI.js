
import axios from "axios"
import Cookies from 'js-cookie';

const signupAPI=  async (firstName,lastName,email,password,cityName,phoneNumber,role,clear,callbacks)=>{
  const {setSignupError,setSignupSuccess,setOpenDialog}=callbacks
    try
   {
     const response= await axios.post('https://sakanat-dev.azurewebsites.net/api/Identity/registration',{
        firstName,
        lastName,
        email,
        password,
        cityName,
        phoneNumber,
        role
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setSignupSuccess(true)
    setOpenDialog(true)
    setSignupError(false)
    clear()
    const token = response.data.token
    const expiryDate = new Date(new Date().getTime() + 1 * 60 * 1000); 
    Cookies.set('confirmEmailToken', token, { expires: expiryDate, path: '/' });

  }
   catch(err){
     setSignupError(true)
     setSignupSuccess(false)
     console.log(err.message)
    }
}
export default signupAPI
