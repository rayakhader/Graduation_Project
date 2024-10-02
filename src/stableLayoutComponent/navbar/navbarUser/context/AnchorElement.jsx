import { createContext, useContext, useState} from "react";

const AnchorElement = createContext()

export const useAnchorElement =()=>useContext(AnchorElement)
export const AnchorElementProvider= ({children})=>{
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <AnchorElement.Provider value={{anchorEl,setAnchorEl,open,handleClick,handleClose }}>
            {children}
        </AnchorElement.Provider>
    )
}