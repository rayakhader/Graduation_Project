import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

const RefreshTokenContext = createContext()

export const useRefreshToken =()=>useContext(RefreshTokenContext)
export const RefreshTokenProvider= ({children})=>{
    const[refreshToken,setRefreshToken]=useState(Cookies.get('refreshToken'))
    useEffect(() => {
        const checkRefreshTokenInterval = setInterval(() => {
            const currentToken = Cookies.get('refreshToken');
            if (currentToken !== refreshToken) {
                setRefreshToken(currentToken);
            }
        }, 1000);

        return () => clearInterval(checkRefreshTokenInterval); 
    }, [refreshToken]);
    return(
        <RefreshTokenContext.Provider value={{ refreshToken,setRefreshToken }}>
            {children}
        </RefreshTokenContext.Provider>
    )

}