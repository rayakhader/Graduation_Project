import { useState,useEffect } from "react";
import { passwordValidation } from "../../../validation/passwordValidation";
import { confirmPasswordValidation } from "../../../validation/confirmPasswordValidation";

 const usePassword =()=>{
    const [values,setValues]=useState({
        password:'',
        confirmPassword:'',
    })
    const [errors,setErrors]=useState({
      password:'',
      confirmPassword:''
    })
    const [isTouched,setIsTouched]=useState({
      password:false,
      confirmPassword:false
    })
    useEffect(() => {
    
       if(isTouched.password){
        const {tempErrors}=passwordValidation(values.password)
        setErrors((prevErrors)=>({...prevErrors,password:tempErrors.password}))
       }

        if (isTouched.confirmPassword) {
          const { tempErrors } = confirmPasswordValidation(values.password,values.confirmPassword);
          setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: tempErrors.confirmPassword }));
        }
      }, [values, isTouched]);
     
      const handleChange=(e)=>{
        const{name,value}=e.target
        setValues({...values,[name]:value})
        setIsTouched({...isTouched,[name]:true})
      }
      return {handleChange,values,errors}
 }
 export default usePassword