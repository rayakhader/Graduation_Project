const paginationStyle ={
    '& .MuiPaginationItem-root': {
      color: '#000',
      border: '1px solid rgba(211,211,211,1)', 
    },
    '& .MuiPaginationItem-page': {
      '&.Mui-selected': {
        bgcolor: '#1976d2', // Background color for the selected item
        color: '#fff', // Text color for the selected item
      },
      '&:hover': {
        backgroundColor: '#1976d2', // Hover background color
        color: '#fff', // Hover text color
      },
    },
    '& .MuiPaginationItem-ellipsis': {
      color: 'action.active', // Adjust color for ellipsis
    },
    '& .MuiButtonBase-root': {
      minWidth: '32px', // Reducing the width of the pagination buttons for a more compact look
      padding: '6px', // Adjust padding for a more compact look
      margin: '0 2px', // Adjust space between buttons
    },
  }
  export default paginationStyle