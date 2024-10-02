import { AppBar, Box, Grid, IconButton, Toolbar} from '@mui/material'
import React from 'react'
import ViewModuleIcon from '@mui/icons-material/ViewModule'; 
import ViewListIcon from '@mui/icons-material/ViewList'; 
import { useView } from '../context/ViewContext';
import SortSelection from './SortSelection.jsx';


function FilterAbove({sort,onSortChange}) {
  const{view,setView}=useView()
  const toggleViewToGrid = () => {
    setView('grid');
  };
  const toggleViewToList = () => {
    setView('list');
  };
  const handleSortChange =(event)=>{
    const newSort = event.target.value
    onSortChange(newSort)
  }
  return (
    <AppBar position="static" color="default" elevation={0} sx={{backgroundColor:'white'}}>
    <Toolbar>
      <Grid container>
        <Grid item xs={12} container sx={{display:'flex',alignItems:'center',justifyContent:'flex-end',py:3}}>
            <SortSelection sort={sort} onSortChange={handleSortChange} />
            <Box sx={{display:'flex',border:'1px solid rgba(211,211,211,1)',ml:2}}>
            <IconButton onClick={toggleViewToGrid} >
               <ViewModuleIcon color={view==='grid'? 'primary':'disabled'}  /> 
            </IconButton>
            <Box sx={{ height: '40px', width: '1px', bgcolor: 'rgba(211, 211, 211, 1)', mx: 1 }}></Box>
            <IconButton onClick={toggleViewToList}>
              <ViewListIcon color={view==='list'?'primary':'disabled'} />
            </IconButton>
            </Box>
          </Grid>
        </Grid>
    </Toolbar>
  </AppBar>    
  )
}
export default FilterAbove
