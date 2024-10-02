import { useState,useEffect } from "react";
import { nameValidation } from "../../../validation/nameValidation";
import { emailValidation } from "../../../validation/emailValidation";
import { passwordValidation } from "../../../validation/passwordValidation";
import { phoneNumberValidation } from "../../../validation/phoneNumberValidation";

 const useForm =(role)=>{
    const [values,setValues]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        city:'',
        phoneNumber:''
    })
    const [errors,setErrors]=useState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      city:'',
      phoneNumber:''
    })
    const [isTouched,setIsTouched]=useState({
      firstName:false,
      fullName:false,
      email:false,
      password:false,
      city:false,
      phoneNumber:false
    })
    useEffect(() => {
        if (isTouched.firstName) {
          const { tempErrors } = nameValidation(values.firstName);
          setErrors((prevErrors) => ({ ...prevErrors, firstName: tempErrors.name }));
        }
        if (isTouched.lastName) {
          const { tempErrors } = nameValidation(values.lastName);
          setErrors((prevErrors) => ({ ...prevErrors, lastName: tempErrors.name }));
        }
       if(isTouched.email){
        const {tempErrors}=emailValidation(values.email)
        setErrors((prevErrors)=>({...prevErrors,email:tempErrors.email}))
       }
        if (isTouched.password) {
          const { tempErrors } = passwordValidation(values.password);
          setErrors((prevErrors) => ({ ...prevErrors, password: tempErrors.password }));
        }
        if (isTouched.city) {
          let cityError = '';
          if (values.city !== '') {
            cityError = '';
          } else {
            cityError = 'City is required.';
          }
          setErrors((prevErrors) => ({ ...prevErrors, city: cityError }));
        }
        if (isTouched.phoneNumber) {
          const { tempErrors } = phoneNumberValidation(values.phoneNumber, role);
          setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: tempErrors.phoneNumber }));
        }
      }, [values, isTouched]);
     
      const handleChange=(e)=>{
        const{name,value}=e.target
        setValues({...values,[name]:value})
        setIsTouched({...isTouched,[name]:true})
      }
      const clear = () => {
        setValues({
            firstName: '',
            lastName:'',
            email: '',
            password: '',
            city: '',
            phoneNumber: ''
        });
        setErrors({});
        setIsTouched({
            fisrtName: false,
            lastName:false,
            email: false,
            password: false,
            city: false,
            phoneNumber: false
        });
    };
      return {handleChange,values,errors,clear}
 }
 export default useForm