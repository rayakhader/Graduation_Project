import axios from "axios"

const confirmEmailAPI = async(email,token,navigate,{setError})=>{
    try{
        const response = await axios.get(`https://sakanat-dev.azurewebsites.net/api/identity/confirm-email`,{
            params: {
                token: token,
                email: email
            }
        })
        setError('')
        const timer = setTimeout(() => {
            navigate('/login');
          }, 5000); 
          return () => clearTimeout(timer);
    }
    catch(error){
        setError('Not Found')
    }

}
export default confirmEmailAPI