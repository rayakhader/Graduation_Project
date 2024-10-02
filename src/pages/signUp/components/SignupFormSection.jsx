import { Box, Button, Card, CardContent, Grid, ToggleButton, ToggleButtonGroup, Typography, Link as MuiLink } from '@mui/material'
import React, { useState } from 'react'
import CommonFormFields from '../components/CommonFormFields'
import SpecialFormField from './SpecialFormField'
import { Link as RouterLink } from 'react-router-dom';
import SignupHandleErrors from './SignupHandleErrors';
import useForm from '../customHook/useForm';
import { useSignup } from '../context/SignupContext';
import { useShowPassword } from '../context/ShowPasswordContext';
import { useSelectedCountry } from '../context/SelectedCountry';
import signupAPI from '../../../API/Identity/signupAPI';

function SignupFormSection({citiesList}) {
    const {setSignupError,setSignupSuccess,setOpenDialog}=useSignup()
    const{setShowPassword}=useShowPassword()
    const {selectedCountry}=useSelectedCountry()
    const [role, setRole] = useState('Customer'); 
    const { handleChange, values, errors,clear } = useForm(role); 
    const signUp = async (e) => {
         e.preventDefault();
         let phoneNumber = values.phoneNumber
         if(role==='Owner'){
         phoneNumber = selectedCountry.code + phoneNumber.replace(/^\+\d+/, "");}
         signupAPI(values.firstName,values.lastName,values.email,values.password,values.city,phoneNumber,role,clear,{setSignupError,setSignupSuccess,setOpenDialog})
      };
      const handleAlignment = (event, newRole) => {
        if (newRole !== null) { 
          setRole(newRole);
          clear()
          setSignupError(false)
          setSignupSuccess(false)
          setShowPassword(false)
        }
      }; 
  return (
    <Grid item xs={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'white',p:5 }}>
              <Box sx={{ width: '100%', maxWidth: 600}}>
                  <Card variant="outlined" sx={{ width: '100%'}}>
                      <CardContent>
                          <Typography component="h1" variant="h5" textAlign="center">
                              Sign Up
                          </Typography>
                          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, mt: 2 }}>
                              <ToggleButtonGroup
                                  color="primary"
                                  value={role}
                                  exclusive
                                  onChange={handleAlignment}
                                  sx={{ width: '100%', '.MuiToggleButtonGroup-grouped': { flex: 1 } }}
                              >
                                  <ToggleButton value="Customer" sx={{ textTransform: 'none', justifyContent: 'center' }}>
                                      Customer
                                  </ToggleButton>
                                  <ToggleButton value="Owner" sx={{ textTransform: 'none', justifyContent: 'center' }}>
                                      Owner
                                  </ToggleButton>
                              </ToggleButtonGroup>
                          </Box>
                          <Box component="form" onSubmit={signUp} noValidate sx={{ mt: 1 }}>
                            <CommonFormFields values={values} errors={errors} handleChange={handleChange} citiesList={citiesList}  />
                              {role==='Owner'&&<SpecialFormField values={values} errors={errors} handleChange={handleChange}/>}
                              <Button
                                  disabled={role==='Customer'?Boolean(!values.email || !values.password ||!values.city||!values.firstName||!values.lastName|| errors.email !== '' || errors.password !== '' || errors.city!==''||errors.firstName!==''||errors.lastName!==''):Boolean(!values.email || !values.password ||!values.city||!values.firstName||!values.lastName||!values.phoneNumber|| errors.email !== '' || errors.password !== '' || errors.city!==''||errors.firstName!==''||errors.lastName!==''||errors.phoneNumber!=='')}
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  sx={{ mt: 3, mb: 2, backgroundColor: '#1976d2' }}
                              >
                                  Sign Up
                              </Button>
                           <SignupHandleErrors />
                          </Box>
                          <Typography component="p">
                              Already have an account?
                              <MuiLink component={RouterLink} to='/login'>Log in</MuiLink>
                          </Typography>
                      </CardContent>
                  </Card>
              </Box>
          </Grid>
  )
}
export default SignupFormSection
