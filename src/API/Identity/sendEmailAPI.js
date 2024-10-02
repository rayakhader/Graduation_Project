import axios from "axios";
import Cookies from 'js-cookie';

const forgotPassword= async(email,callbacks)=>{
    const{setEmailSent,setOpenSnackbar,setCountDown,setSendEmailError}=callbacks
try {
    const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Identity/forgot-password`, {
       email, 
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.status!==200) throw new Error('faild')
    setEmailSent(true);
    setOpenSnackbar(true)
    setCountDown(60)
    setSendEmailError(false)
} catch (error) {
console.log(error.message)
setSendEmailError(true)
}
}
export default forgotPassword
