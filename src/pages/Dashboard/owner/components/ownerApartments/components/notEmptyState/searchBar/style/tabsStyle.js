import { createTheme } from "@mui/material";
 const tabsStyle= {
    '.MuiTabs-flexContainer': {
      flexWrap: 'wrap',
    },
    '.MuiTab-root': {
      // border: '1px solid #ddd',
      textTransform: 'none',
      margin: '8px', 
      bgcolor: 'action.hover',
      minHeight:'auto',
      dispaly:'flex',
      flexDirection:'row',
      flexWrap:'nowrap',
      p:0.5,    
      },
    '& .MuiTab-root.Mui-selected': {
     bgcolor: 'primary.main',
     color: 'white',
   },
  }
  export default tabsStyle