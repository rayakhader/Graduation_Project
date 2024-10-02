import { Box, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContractInfo } from './context/ContractInfo'

function ContractPrice({setValidation}) {
    const{currency,setCurrency,price,setPrice}=useContractInfo()
    const[isPriceValid,setIsPriceValid]=useState(true)
    useEffect(()=>{
      const isValid = price !=='' && currency!=='' && price>0
      setIsPriceValid(price>0)
      setValidation(isValid)
    },[price,currency])
  return (
    <Card sx={{width:{xs:'100%',md:'60%'},margin:'auto',boxShadow:2,p:1.5,backgroundColor:'rgba(211,211,211,0.13)'}}>
        <CardContent>
            <Typography variant='h6' textAlign='start' pl={1.5}>Contract Price</Typography>
            <Typography variant='body2' color='textSecondary' pl={1.5}>How much money the tenant must payed to you?</Typography>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',p:1.5}}>
            <Box sx={{display:'flex',flexDirection:'column',width:'45%'}}>
                <Typography>Price</Typography>
                <TextField value={price}
                 onChange={(e)=>setPrice(e.target.value)}
                  type='number'
                  placeholder='Enter price here'
                  variant='standard'
                  error={price!=='' && !isPriceValid}
                  helperText={price!=='' && !isPriceValid ? 'Price cannot be negative or zero':''}
                    />
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',width:'45%'}}>
                <Typography>Currency</Typography>
                <TextField
      select
      value={currency}
      onChange={(e)=>setCurrency(e.target.value)}
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
        </CardContent>
    </Card>
  )
}

export default ContractPrice
