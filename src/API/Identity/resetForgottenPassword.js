import axios from "axios"

const resetForgottenPassword = async(email, token,navigate,{setError})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/identity/reset-forgotten-password`,{
            params:{
                token: token,
                email:email
            }
        })
        setError('')

    }catch(error){
        setError('Not Found')
    }

}
export default resetForgottenPassword