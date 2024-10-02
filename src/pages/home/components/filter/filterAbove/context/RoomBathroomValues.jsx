import { createContext, useContext, useState } from "react";

const RoomBathRoomValues = createContext()

export const useRoomBathroomValues =()=>useContext(RoomBathRoomValues)
export const RoomBathroomProvider= ({children})=>{
    const [numberOfRooms, setNumberOfRooms] = useState(0);
    const [numberOfBathrooms, setNumberOfBathrooms] = useState(0);

    return(
        <RoomBathRoomValues.Provider value={{numberOfRooms,setNumberOfRooms,numberOfBathrooms,setNumberOfBathrooms}}>
            {children}
        </RoomBathRoomValues.Provider>
    )

}