import { MenuItem, Select } from '@mui/material'
import React from 'react'


function SortSelection({sort,onSortChange}) {
  return (
    <Select
              value={sort}
              onChange={onSortChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              size="small"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="" disabled>Sort by</MenuItem>
              <MenuItem value="price" >Price: Low to High</MenuItem>
              <MenuItem value="-price">Price: High to Low</MenuItem>
              <MenuItem value="-CreationDate">Newly Added</MenuItem>
              {/* <MenuItem value="nearest">Nearest</MenuItem> */}
            </Select>
  )
}

export default SortSelection
