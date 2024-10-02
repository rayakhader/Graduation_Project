import React, { useEffect } from 'react'
import { Box,FormControlLabel,Input, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useEditApartmentInfo } from '../../context/EditApartmentInfo'
import { useChange } from '../../context/Change'

function SecondaryInfo({apartmentDetails}) {
  const {floorNum,setFloorNum,apartmentNum,setApartmentNum,numOfRooms,setNumOfRooms,numOfBathrooms,
    setNumOfBathrooms,price,setPrice,currency,setCurrency,furnishedStatus,setFurnishedStatus,
    gender,setGender}=useEditApartmentInfo()
    const{setChange}=useChange()
    useEffect(()=>{
      setFloorNum(apartmentDetails.floorNumber)
      setApartmentNum(apartmentDetails.apartmentNumber)
      setNumOfRooms(apartmentDetails.numberOfRooms)
      setNumOfBathrooms(apartmentDetails.numberOfBathrooms)
      setPrice(apartmentDetails.price)
      setCurrency(apartmentDetails.priceCurrency?.value)
      setFurnishedStatus(apartmentDetails.furnishedStatus?.value)
      setGender(apartmentDetails.genderAllowed?.value)
      setChange(false)
  },[apartmentDetails])
  return (
    <Box sx={{p:1.5}}>
    <Typography variant='h6' sx={{textAlign:'start',p:1}}>Secondary Details</Typography>
    <Box sx={{backgroundColor:'white',borderRadius:'4px',p:1.5,border:'1px solid rgba(211,211,211,1)'}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
             <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
             <Typography>Floor number</Typography>
             <Input disabled value={floorNum} />
             </Box>
             <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
             <Typography>Apartment number</Typography>
             <Input disabled  value={apartmentNum} />
             </Box>
            </Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
             <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
             <Typography>Number of rooms</Typography>
             <Input value={numOfRooms} onChange={(e)=>{setNumOfRooms(e.target.value);setChange(true)}}/>
             </Box>
             <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
             <Typography>Number of bathrooms</Typography>
             <Input value={numOfBathrooms} onChange={(e)=>{setNumOfBathrooms(e.target.value);setChange(true)}}/>
             </Box>
            </Box>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
                    <Typography>Price</Typography>
                    <Input placeholder='Start From' value={price} onChange={(e)=>{setPrice(e.target.value);setChange(true)}} />
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
                    <Typography>Currency</Typography>
                    <TextField
      select
      value={currency}
      onChange={(e)=>{setCurrency(e.target.value);setChange(true)}}
      variant="standard"
      InputProps={{
        classes: {
          root: 'MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-colorPrimary MuiInputBase-formControl css-b5t3u4',
          input: 'MuiNativeSelect-select MuiNativeSelect-standard MuiInputBase-input MuiInput-input css-1vynybe',
        },
        endAdornment: (
          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiNativeSelect-icon MuiNativeSelect-iconStandard css-1utq5rl" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon" style={{height:'30px',width:'30px'}}>
            <path d="M7 10l5 5 5-5z" />
          </svg>
        ),
      }}
      SelectProps={{
        native: true,
        IconComponent: () => null, 
      }}
    >
      <option value="" disabled>Select currency</option>
      <option value="1">ILS</option>
      <option value="2">JOD</option>
      <option value="3">USD</option>
    </TextField>
                </Box>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
                    <Typography>Furnished</Typography>
                    <RadioGroup
        row 
        aria-labelledby='furnished-radio-buttons-group'
        name='furnished'
        value={furnishedStatus}
        onChange={(e)=>{setFurnishedStatus(e.target.value);setChange(true)}}
        >
            <FormControlLabel control={<Radio />} value="1" label='Full'></FormControlLabel>
            <FormControlLabel control={<Radio />} value='2' label='Partial'></FormControlLabel>
            <FormControlLabel control={<Radio />} value='3' label='None'></FormControlLabel>
        </RadioGroup>
                </Box>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
                    <Typography>Gender</Typography>
                    <RadioGroup
    row 
    aria-labelledby='gender-radio-buttons-group'
    name='gender'
    value={gender}
    onChange={(e)=>{setGender(e.target.value);setChange(true)}}
    >
        <FormControlLabel control={<Radio />} value="1" label='Female' />
        <FormControlLabel control={<Radio />} value="2" label='Male'/>
    </RadioGroup>     
                </Box>
                </Box>
                </Box>
            </Box>
  )
}

export default SecondaryInfo
