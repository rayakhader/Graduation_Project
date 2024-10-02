import { useState,useEffect } from "react";
import { emailValidation } from "../../../validation/emailValidation";
import { passwordValidation } from "../../../validation/passwordValidation";

 const useForm =()=>{
    const [values,setValues]=useState({
        email:'',
        password:'',
    })
    const [errors,setErrors]=useState({
      email:'',
      password:''
    })
    const [isTouched,setIsTouched]=useState({
      email:false,
      password:false
    })
    useEffect(() => {
    
       if(isTouched.email){
        const {tempErrors}=emailValidation(values.email)
        setErrors((prevErrors)=>({...prevErrors,email:tempErrors.email}))
       }

        if (isTouched.password) {
          const { tempErrors } =passwordValidation(values.password);
          setErrors((prevErrors) => ({ ...prevErrors, password: tempErrors.password }));
        }
      }, [values, isTouched]);
     
      const handleChange=(e)=>{
        const{name,value}=e.target
        setValues({...values,[name]:value})
        setIsTouched({...isTouched,[name]:true})
      }
      return {handleChange,values,errors}
 }
 export default useForm