import { createContext, useContext, useState} from "react";

const UserImage = createContext()

export const useUserImage =()=>useContext(UserImage)
export const UserImageProvider= ({children})=>{
 const [userImage,setUserImage]=useState(null)
    return(
        <UserImage.Provider value={{ userImage,setUserImage }}>
            {children}
        </UserImage.Provider>
    )
}