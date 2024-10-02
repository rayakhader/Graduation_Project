const numBtnStyle = (selected,index)=>({
    minWidth: '30px',
    backgroundColor: selected[index] ? '#1976d2':'white', 
    color: selected[index]? 'white': 'black', 
    borderColor: '#1976d2',
    m: 0.5,
    p:1,
    height: '30px',
    fontSize: '0.7rem',
    borderRadius: '10px', 
    textTransform: 'none', 
    border:'2px solid #dcdcdc',
    boxShadow: 'none', 
    '&:hover': {
      backgroundColor: '#f5f5f5', 
      borderColor: '#c0c0c0', 
    },
    '&:last-child': {
      marginRight: '0',
    }
})
export default numBtnStyle
