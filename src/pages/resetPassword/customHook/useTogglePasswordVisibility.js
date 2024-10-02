import { useShowPassword } from "../context/ShowPasswordContext";

export const useTogglePasswordVisibility =()=>{
const {showPassword,setShowPassword}=useShowPassword()
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return{togglePasswordVisibility}
}