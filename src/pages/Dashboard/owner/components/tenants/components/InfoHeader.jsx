import { Box, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EventIcon from '@mui/icons-material/Event';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentIcon from '@mui/icons-material/Payment';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
function InfoHeader() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: 'white',
      alignItems: 'center',
      p: 1.5,
      border: '1px solid rgba(211,211,211,1)',
      borderRadius: '20px',
      flexWrap:'wrap'
    }}>
      <Typography sx={{ minWidth: 100,textAlign:'center',py:{xs:1,md:0}  }}><PersonIcon /> Id</Typography>
      <Typography sx={{ minWidth: 100,textAlign:'center',py:{xs:1,md:0}  }}><PersonIcon /> Name</Typography>
      <Typography sx={{ minWidth: 120,textAlign:'center',py:{xs:1,md:0}  }}><PhoneIcon /> Phone number</Typography>
      <Typography sx={{ minWidth: 120,textAlign:'center' ,py:{xs:1,md:0} }}><EventIcon /> Address</Typography>
      <Typography sx={{ minWidth: 140,textAlign:'center',py:{xs:1,md:0}  }}><MoneyOffIcon />Remaining amount</Typography>
      <Typography sx={{ minWidth: 120,textAlign:'center' ,py:{xs:1,md:0} }}><EventIcon /> Notes</Typography>
      <Typography sx={{ minWidth: 160,textAlign:'center',py:{xs:1,md:0}  }}></Typography>
    </Box>
  )
}

export default InfoHeader
