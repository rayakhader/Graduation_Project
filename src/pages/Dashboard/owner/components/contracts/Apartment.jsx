import { Avatar, Radio, TableCell, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import getApartmentImagesById from '../../../../../API/apartments/getApartmentImagesById';

function Apartment({apartment,index,selectedApartment,setSelectedApartment}) {
    const[images,setImages]=useState([])
    useEffect(()=>{
        getApartmentImagesById(apartment.id,{setImages})
    },[apartment])
    const handleRadioChange = (apartmentId) => {
        setSelectedApartment(apartmentId);
      };
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={apartment.id}>
    <TableCell>
   <Radio
     checked={selectedApartment === apartment.id}
     onChange={() => handleRadioChange(apartment.id)}
   />
 </TableCell>
 <TableCell>{index + 1}</TableCell>
 <TableCell>
    <Avatar src={images[0]?.imagePath} sx={{width:80,height:80,borderRadius:0}} />
</TableCell>
 <TableCell>{apartment.name}</TableCell>
 <TableCell>{apartment.cityName}</TableCell>
 <TableCell>{apartment.universityName}</TableCell>
 <TableCell>{apartment.building}</TableCell>
 <TableCell>{apartment.price}</TableCell>
 </TableRow>
  )
}

export default Apartment
