import axios from 'axios';

const resetPasswordAPI= async(password,confirmPassword,email,token,callbacks)=>{
    const{setResetPassword,clickLogin}=callbacks
try {
    const response = await axios.post(`https://sakanat-dev.azurewebsites.net/api/Identity/reset-forgotten-password`, {
       password, 
       confirmPassword,
       email,
       token
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.status!==200) throw new Error('faild')
     setResetPassword(true)
     setTimeout(clickLogin,5000)
} catch (error) {
console.log(error.message)
}
}
export default resetPasswordAPI