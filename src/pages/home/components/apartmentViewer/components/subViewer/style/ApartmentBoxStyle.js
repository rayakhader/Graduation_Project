
const getApartmentBoxStyle = (listing)=> ({
    padding:2 ,
    backgroundColor:'rgba(211, 211, 211, 0.13)',
    borderRadius:5,
    '&:hover': {
    transform: listing.isAvailable ? "scale(1.05)" : "none",
    cursor: 'pointer', 
    },
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    pointerEvents: listing.isAvailable ? 'auto' : 'none', 
    overflow:'hidden',
    position:'relative',
    height:'450px',
    border:'1px solid rgba(211,211,211,1)'
})
export default getApartmentBoxStyle