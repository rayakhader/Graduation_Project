import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectTenant from './SelectTenant';
import SelectApartment from './SelectApartment';
import ContractPeriod from './ContractPeriod';
import ContractPrice from './ContractPrice';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import addContract from '../../../../../API/contracts/addContract';
import { useContractInfo } from './context/ContractInfo';
import { useToken } from '../../../../../globalContext/TokenContext';
import { useRefreshContracts } from './context/RefreshContracts';
import AddContractSuccess from './AddContractSuccess';
import AddContractFailed from './AddContractFailed';
const steps = ['Select a tenant', 'Select an apartment', 'Determine the duration of the contract', 'Determine the agreed upon amount'];
function getStepContent(stepIndex, validation, setValidation) {
  switch (stepIndex) {
    case 0:
      return <SelectTenant setValidation={setValidation} />;
    case 1:
      return <SelectApartment setValidation={setValidation}/>;
    case 2:
      return <ContractPeriod setValidation={setValidation}/>;
    case 3:
      return <ContractPrice setValidation={setValidation}/>;
    default:
      return 'Unknown step';
  }
}
const StepIcons = {
  0: <PersonIcon />,
  1: <ApartmentIcon />,
  2: <DateRangeIcon />,
  3: <AttachMoneyIcon />,
};
function CustomStepLabel({ label, icon }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="caption">{label}</Typography>
      {icon}
    </Box>
  );
}
export default function CreateContractSteps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [isNextDisabled, setIsNextDisabled] = React.useState(true);
  const{token}=useToken()
  const{selectedTenant,selectedApartment,currency,price,startDate,endDate,contractPeriod,setSelectedTenant,setSelectedApartment,setStartDate,setEndDate,setContractPeriod,setPrice,setCurrency}=useContractInfo()
  const{refreshContracts,setRefreshContracts}=useRefreshContracts()
  const[addContractSuccess,setAddContractSuccess]=React.useState(false)
  const[error,setError]=React.useState('')
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep === steps.length - 1) {
      addContract(token,selectedTenant,selectedApartment,contractPeriod,startDate,endDate,price,currency,refreshContracts,{setRefreshContracts,setAddContractSuccess,setError,setSelectedTenant,setSelectedApartment,setStartDate,setEndDate,setContractPeriod,setPrice,setCurrency});
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
      setIsNextDisabled(true);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    setIsNextDisabled(true); 
  };
  const setValidation = (isValid) => {
    setIsNextDisabled(!isValid);
  };
  return (
    <>
    <Box sx={{ width: '100%', p: 3 }}>
      <Stepper activeStep={activeStep} sx={{ p: 1.5 }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                <CustomStepLabel label={label} icon={StepIcons[index]} />
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography variant='h6' textAlign='start' sx={{ mt: 2, mb: 1, p: 1.5 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep, isNextDisabled, setValidation)}</Box>
          <Box sx={{ display: 'flex',alignItems:'start', flexDirection: 'row', p: 1.5 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant='contained'
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant='contained' onClick={handleNext} disabled={isNextDisabled}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    <AddContractSuccess addContractSuccess={addContractSuccess} setAddContractSuccess={setAddContractSuccess} />
    <AddContractFailed error={error} setError={setError} />

    </>
  );
}
