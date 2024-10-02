import React from 'react'
import { useData } from '../context/AddApartmentDataContext'
import addApartmentInputStyle, {  labelStyle, requiredMessage, requiredStyle } from '../style/addApartmentInputStyle'
import RequiredField from '../RequiredField'
import { Box,  TextField, Typography } from '@mui/material'
function CurrencyField() {
    const{priceCurrency,setPriceCurrency}=useData()
    const {errors}=useData()

  return (
    <Box sx={{...addApartmentInputStyle,width:'40%',justifyContent:'center'}}>
        <Typography sx={labelStyle} variant="subtitle1"><Box sx={requiredStyle}>Currency<RequiredField /></Box></Typography>
        <TextField
      select
      value={priceCurrency}
      onChange={(e)=>setPriceCurrency(e.target.value)}
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
    <Typography sx={requiredMessage}>{errors.fourth.currency}</Typography>

      </Box>
  )
}

export default CurrencyField
