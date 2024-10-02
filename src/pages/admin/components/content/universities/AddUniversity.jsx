import React, { useState } from 'react'
import { Box, FormControlLabel, Grid, IconButton, Radio, RadioGroup, TextField, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import AddUniversitySuccessDialog from './AddUniversitySuccessDialog';
import addUniversity from '../../../../../API/university/addUniversity';
import { useToken } from '../../../../../globalContext/TokenContext';
import AddUniversityErrorDialog from './AddUniversityErrorDialog';

function AddUniversity({citiesList}) {
    const [cityId,setCityId]=useState('')
    const [addUniversitySuccess,setAddUniversitySuccess]=useState(false)
    const [addUniversityError,setAddUniversityError]=useState('')
    const [university,setUniversity]=useState('')
    const {token}= useToken()
    const handleAddUniversity=()=>{
        if(cityId&&university){
            addUniversity(token,cityId,university,{setAddUniversitySuccess,setAddUniversityError})
        }
    }
  return (
    <Grid item xs={12} lg={6} sx={{p:2}}>
        <Box sx={{width:'100%',backgroundColor:'white',p:2,borderRadius:'4px',mt:1}}>
        <Box sx={{width:'100%',backgroundColor:'rgba(211,211,211,0.15)',display:'flex',alignItems:'center',p:1.5,borderRadius:'20px'}}>
            <AddIcon />
            <Typography variant='h6' sx={{textAlign:'start'}}>Add universities</Typography>
        </Box>
        <Typography variant='body2' color='textSecondary' sx={{p:1.5}}>Here you can add one university or more corresponding to specific city</Typography>
        <Box sx={{width:'100%',p:1.5}}>
            <Typography variant='h6' sx={{textAlign:'start',textDecoration:'underline'}}>Step one</Typography>
            <Typography variant='body2' color='textSecondary'>Here click city that you want to add univesity in it</Typography>
        </Box>
        <Box sx={{width:'100%',p:1.5}}>
        <RadioGroup value={cityId} onChange={(e)=>setCityId(e.target.value)} sx={{display:'flex',flexDirection:'row'}}>
        {citiesList.map(city => (
          <FormControlLabel 
            key={city.id} 
            value={city.id} 
            control={<Radio />} 
            label={city.name}
            sx={{width:{xs:'100%',md:'25%'}}}
          />
        ))}
      </RadioGroup>
        </Box>
        <Box sx={{width:'100%',p:1.5}}>
            <Typography variant='h6' sx={{textAlign:'start',textDecoration:'underline'}}>Step two</Typography>
            <Typography variant='body2' color='textSecondary'>Here you can add one or more universities</Typography>
        </Box>
            <Box sx={{display:'flex',width:'100%',alignItems:'center',gap:2,p:1.5}}>
                    <TextField 
                        placeholder='Enter university name'
                        label={'University'} 
                        variant="outlined" 
                        fullWidth 
                        margin="normal"
                        value={university}
                        onChange={(e)=>setUniversity(e.target.value)}
                        sx={{width:'50%','& .MuiInputBase-input': { height: '20px'}}}
                    />
                    <IconButton disabled={!cityId || !university} onClick={()=>handleAddUniversity()} sx={{border:'1px solid #1976d2'}}>
                        <AddIcon sx={{color:'#1976d2'}} />
                    </IconButton>
            </Box>
        <AddUniversitySuccessDialog university={university} cityId={cityId} setUniversity={setUniversity} setCityId={setCityId} addUniversitySuccess={addUniversitySuccess}  setAddUniversitySuccess={setAddUniversitySuccess}/>
        <AddUniversityErrorDialog addUniversityError={addUniversityError} setAddUniversityError={setAddUniversityError} />
        </Box>
    </Grid>
  )
}
export default AddUniversity
