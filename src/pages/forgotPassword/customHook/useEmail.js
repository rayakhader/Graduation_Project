import { useState,useEffect } from "react";
import { emailValidation } from "../../../validation/emailValidation";

 const useEmail =(validate)=>{
    const [values,setValues]=useState({
        email:'',
    })
    const [errors,setErrors]=useState({
      email:''
    })
    const [isTouched,setIsTouched]=useState({
      email:false
    })
    useEffect(() => {
       if(isTouched.email){
        const {tempErrors}=emailValidation(values.email)
        setErrors((prevErrors)=>({...prevErrors,email:tempErrors.email}))
       }
      }, [values, isTouched]);
     
      const handleChange=(e)=>{
        const{name,value}=e.target
        setValues({...values,[name]:value})
        setIsTouched({...isTouched,[name]:true})
      }
      return {handleChange,values,errors}
 }
 export default useEmail