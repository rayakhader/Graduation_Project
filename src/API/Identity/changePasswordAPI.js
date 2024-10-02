import axios from "axios"

const changePasswordAPI =async(currentPassword,newPassword,confirmNewPassword,token,{setOldError,setShowAlert,setOldPass,setNewPass,setConfirmNewPass,setSuccess})=>{
  try{
        const response = await axios.post('https://sakanat-dev.azurewebsites.net/api/Users/change-password',{
            currentPassword,
            newPassword,
            confirmNewPassword
          }, {
            headers: {
              'Content-Type': 'application/json',
              Authorization:`Bearer ${token}`
            },
          })
          setShowAlert(true)
          setOldError('')
          setOldPass('')
          setNewPass('')
          setConfirmNewPass('')
          setSuccess([false,false,false])
    }
    catch(error){
      if (error.response) {
        setOldError('The old password you entered is incorrect. Please try again.')
        setShowAlert(false)
      } else {
        console.error('Error:', error.message);
      }
    }




}
export default changePasswordAPI