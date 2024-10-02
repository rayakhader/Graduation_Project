import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CreatContractSteps from './CreatContractSteps';
import { useContractInfo } from './context/ContractInfo';
import resetFields from './resetFields';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddContract({addContract,setAddContract}) {
  const{setSelectedTenant,setSelectedApartment,setStartDate,setEndDate,setContractPeriod,setPrice,setCurrency}=useContractInfo()
  const handleClose = () => {
    setAddContract(false);
  };
  React.useEffect(()=>{
    if(addContract){
      resetFields(setSelectedTenant,setSelectedApartment,setStartDate,setEndDate,setContractPeriod,setPrice,setCurrency)
    }
  },[addContract])

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={addContract}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
          <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add contract
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
       <CreatContractSteps />
      </Dialog>
    </React.Fragment>
  );
}
