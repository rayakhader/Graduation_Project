import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

const TokenConetxt = createContext()

export const useToken =()=>useContext(TokenConetxt)
export const TokenProvider= ({children})=>{
    const[token,setToken]=useState(Cookies.get('token'))
    useEffect(() => {
        const checkTokenInterval = setInterval(() => {
            const currentToken = Cookies.get('token');
            if (currentToken !== token) {
                setToken(currentToken);
            }
        }, 1000);

        return () => clearInterval(checkTokenInterval); 
    }, [token]);
    return(
        <TokenConetxt.Provider value={{ token,setToken }}>
            {children}
        </TokenConetxt.Provider>
    )

}