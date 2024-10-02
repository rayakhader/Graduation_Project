const addApartmentInputStyle={
    display: 'flex',
    flexDirection: 'column',
    my: 1,
    position:'relative'
}
export const labelStyle={
    textAlign:'start',
}
export const iconStyle={
    mr:0.5
}
export const nextBtnStyle ={
    border:'1px solid rgba(211,211,211,1)',
    backgroundColor:'#1976d2',
    color:'white',
    '&:hover':{backgroundColor:'white',color:'#1976d2'},
    mt:1
}
export const backBtnStyle={
    border:'1px solid #1976d2',
    backgroundColor:'white',
    color:'#1976d2',
    '&:hover':{backgroundColor:'#1976d2',color:'white'},
    mt:1
}
export const containerBoxStyle={
    display:'flex',
    flexDirection:'column',
    border:'1px solid rgba(211,211,211,1)',
    boxShadow:10,
    p:5,
    borderRadius:'10px',
    backgroundColor:'rgba(211, 211, 211, 0.13)'
}
export const requiredStyle={
    display:'flex',
    alignItems:'center'
}
export const requiredMessage={
    fontSize:'0.75rem',
    color:'#d32f2f'
}
export const dateStyle ={
    width: 220,
    '.MuiInputBase-input': {
      borderRadius: '4px',
      position: 'relative',
      backgroundColor: 'background.paper',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 12px',
      transition: theme => theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: '4px',
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
}


export default addApartmentInputStyle