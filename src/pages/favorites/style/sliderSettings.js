import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; 
import { Box, IconButton } from '@mui/material';



function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '15px',
          zIndex: 1,
          transform: 'translateY(-50%)',
        }}
      >
        <IconButton  onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick(e);
        }} sx={{ backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } }}>
          <ArrowBackIosIcon sx={{ color: 'white', fontSize: '30px' }} />
        </IconButton>
      </Box>
    );
  }
  
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '15px',
          zIndex: 1,
          transform: 'translateY(-50%)',
        }}
      >
        <IconButton  onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick(e);
        }} sx={{ backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } }}>
          <ArrowForwardIosIcon sx={{ color: 'white', fontSize: '30px' }} />
        </IconButton>
      </Box>
    );
  }
  
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    nextArrow:<SampleNextArrow />,
    prevArrow:<SamplePrevArrow />
  };
  export default settings