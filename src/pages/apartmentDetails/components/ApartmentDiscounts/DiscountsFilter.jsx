import React, { useEffect, useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import { Box, MenuItem, Popover } from '@mui/material';
import discountSortByPercentageDes from '../../../../API/discounts/discountSortByPercentageDes';
import discountSortByPercentageAsc from '../../../../API/discounts/discountsSortByPercentageAsc';

function DiscountsFilter({setApartmentDiscounts,id}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [sort,setSort]=useState('')
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id2 = open ? 'simple-popover' : undefined;
    const handleFilterChanged =(sort)=>{
      setSort(sort)
      setAnchorEl(null)
    }
    useEffect(()=>{
      if(sort!==''){
        if(sort==='High to low'){
          discountSortByPercentageDes(id,{setApartmentDiscounts})
        }
        else if(sort==='Low to high'){
          discountSortByPercentageAsc(id,{setApartmentDiscounts})
        }
      }
    },[sort])
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-end',p:1.5,cursor:'pointer'}}>
         <TuneIcon onClick={handleClick} />
         <Popover
        id={id2}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{py:1.5}}>
            <MenuItem value="" disabled>Sort by</MenuItem>
            <MenuItem onClick={()=>handleFilterChanged('High to low')}>Percentage: High to low</MenuItem>
            <MenuItem onClick={()=>handleFilterChanged('Low to high')}>Percentage: Low to high</MenuItem>
        </Box>
        </Popover>
    </Box>
  )
}

export default DiscountsFilter
