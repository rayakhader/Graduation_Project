import checkSuspension from "../../../../../../../API/suspend/checkSuspension"

const handleAddApartment=(token,clickAddApartment,ownerId,setSuspensionInfo,setSuspensionDialog)=>{
    checkSuspension(token,ownerId,clickAddApartment,{setSuspensionInfo,setSuspensionDialog})
}
export default handleAddApartment