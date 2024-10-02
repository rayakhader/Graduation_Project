import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel , Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import getApartmentById from '../../../../../../API/apartments/getApartmentById';
import getApartmentImagesById from '../../../../../../API/apartments/getApartmentImagesById';
import SuspendOwner from './SuspendOwner';

function SuspendReasons({isDelete,setIsDelete,selectedApartmentId}) {
    const [selectedOption, setSelectedOption] = useState('');
    const [otherReason,setOtherReason]=useState('') 
    const [apartmentDetails,setApartmentDetails]=useState({})
    const [suspend,setSuspend]=useState(false)
    const [ownerInfo,setOwnerInfo]=useState({})
    const[images,setImages]=useState([])
    useEffect(()=>{
        if(selectedApartmentId && isDelete){
            setSelectedOption('')
            setOtherReason('')
            getApartmentById(selectedApartmentId,{setApartmentDetails,setOwnerInfo})
            getApartmentImagesById(selectedApartmentId,{setImages})
        }
    },[selectedApartmentId,isDelete])
    const handleSuspend = ()=>{
        setIsDelete(false)
        setSuspend(true)
    }
  return (
    <>
    <Dialog open={isDelete} onClose={()=>setIsDelete(false)}>
        <DialogTitle>
            <Typography variant='Body2'>Why do you want to suspend owner for this apartment?</Typography>
            <Box sx={{display:'flex',flexWrap:'wrap',p:1.5,borderRadius:'4px',boxShadow:1,mt:1,alignItems:'center',border:'1px solid rgba(211,211,211,1)'}}>
            <Avatar src={images.length>0 && images[0].imagePath ? images[0].imagePath:undefined} sx={{height:120,width:120,borderRadius:'4px'}}/>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',p:1.5}}>
                <Typography variant='h6'textAlign='start'>{apartmentDetails.name}</Typography>
                <Typography variant='body2'>{apartmentDetails.cityName},{apartmentDetails.universityName}</Typography>
                <Typography variant='body2'>{apartmentDetails.price} {apartmentDetails.priceCurrency?.name}</Typography>
            </Box>
            <Box sx={{p:1.5}}>
            <Typography sx={{color:apartmentDetails.isAvailable?'#4caf50':'error.main'}}>{apartmentDetails.isAvailable? 'Available': 'Not Available'}</Typography>
            </Box>
            </Box>
        </DialogTitle>
        <DialogContent>
  <FormControl component="fieldset">
    <RadioGroup
      aria-label="choice"
      name="choice1"
      value={selectedOption}
      onChange={(event) => setSelectedOption(event.target.value)}
    >
    <FormControlLabel value="misleadingInfo" control={<Radio />} label="Misleading or Incorrect Information" />
    <FormControlLabel value="unauthorizedListings" control={<Radio />} label="Unauthorized Listings" />
    <FormControlLabel value="repeatedViolations" control={<Radio />} label="Repeated Violations" />
    <FormControlLabel value="fraudulentActivity" control={<Radio />} label="Fraudulent Activity" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
    {selectedOption==='other' && 
    <TextField
    fullWidth
    label="Other reason"
    multiline
    minRows={3}
    margin="normal"
    value={otherReason}
    onChange={(e) => setOtherReason(e.target.value)}
    variant="outlined" />} 
  </FormControl>
</DialogContent>
<DialogActions sx={{p:1.5}}>
    <Button variant='contained' onClick={handleSuspend} disabled={selectedOption!=='other'?!selectedOption:!otherReason}>Next</Button>
</DialogActions>
    </Dialog>
    <SuspendOwner suspend={suspend} setSuspend={setSuspend} selectedApartmentId={selectedApartmentId} ownerInfo={ownerInfo} selectedOption={selectedOption} otherReason={otherReason}/>
    </>
  )
}

export default SuspendReasons
