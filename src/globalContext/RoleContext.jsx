import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState} from "react";

const RoleContext = createContext()

export const useRole =()=>useContext(RoleContext)
export const RoleProvider= ({children})=>{
    const[userRole,setUserRole]=useState(Cookies.get('role'))
    useEffect(() => {
        const checkRoleInterval = setInterval(() => {
            const currentRole = Cookies.get('role');
            if (currentRole !== userRole) {
                setUserRole(currentRole);
            }
        }, 1000);

        return () => clearInterval(checkRoleInterval); 
    }, [userRole]);
    return(
        <RoleContext.Provider value={{ userRole,setUserRole}}>
            {children}
        </RoleContext.Provider>
    )

}