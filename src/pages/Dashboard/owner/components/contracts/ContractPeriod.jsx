import { Box, Card, CardContent, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContractInfo } from './context/ContractInfo'

function ContractPeriod({setValidation}) {
  const{startDate,setStartDate,endDate,setEndDate,contractPeriod,setContractPeriod}=useContractInfo()
  const[isEndDateValid,setIsEndDateValid]=useState(true)
  useEffect(()=>{
    const isValid = startDate !== '' && endDate !== '' && contractPeriod !== '' && new Date(endDate) > new Date(startDate);
    setIsEndDateValid(new Date(endDate) > new Date(startDate))
    setValidation(isValid)
  },[startDate,endDate,contractPeriod])
  return (
    <Card sx={{width:{xs:'100%',md:'60%'},boxShadow:2,margin:'auto',p:1.5,backgroundColor:'rgba(211,211,211,0.13)'}}>
      <CardContent>
        <Typography variant='h6' textAlign='start'pl={1.5}>Contract Period</Typography>
        <Box sx={{display:'flex',flexDirection:'column',p:1.5}}>
          <Typography>Type</Typography>
          <RadioGroup value={contractPeriod} onChange={(e)=>setContractPeriod(e.target.value)}row>
            <FormControlLabel value='1' label='Monthly' control={<Radio />} />
            <FormControlLabel value='2' label='Yearly' control={<Radio />} />
            <FormControlLabel value='3' label='Each Semester' control={<Radio />}/>
          </RadioGroup>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Box sx={{display:'flex',flexDirection:'column',width:'45%'}}>
            <Typography>Start date</Typography>
            <TextField  type='date' value={startDate} onChange={(e)=>setStartDate(e.target.value)}/>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',width:'45%'}}>
            <Typography>End date</Typography>
            <TextField  type='date' value={endDate} onChange={(e)=>setEndDate(e.target.value)}
            error={startDate !== '' && endDate !== '' && !isEndDateValid}
            helperText={startDate !== '' && endDate !== '' && !isEndDateValid ? 'End date cannot be less than start date' : ''}
            />
          </Box>
          </Box>
        </Box>
      </CardContent>

    </Card>
  )
}

export default ContractPeriod
