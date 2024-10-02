import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom'; 
import './style/successStyle.css';

const MySwal = withReactContent(Swal);

function SuccessCreation({ showSuccess, setShowSuccess, apartmentId }) {
  const navigate = useNavigate(); 

  const showSuccessMessage = () => {
    MySwal.fire({
      title: <strong>Success</strong>,
      html: <div>
              <Typography variant="body1" style={{color: '#1E4620', textAlign: 'center'}}>
                Congratulations! Your new apartment listing has been successfully created.
                You can now view and manage your apartment details in your dashboard or showcase it on the homepage.
              </Typography>
            </div>,
      icon: 'success',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        <div>
          Go to Dashboard
        </div>,
      confirmButtonAriaLabel: 'Go to Dashboard',
      confirmButtonColor: '#4CAF50',
      showCancelButton: true,
      cancelButtonText:
        <div>
          View Apartment
        </div>,
      cancelButtonAriaLabel: 'View in Home',
      cancelButtonColor: 'white',
      customClass: {
        cancelButton: 'custom-cancel-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/dashboard/apartments`);
        setShowSuccess(false);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        navigate(`/home/apartment/${apartmentId}`);
        setShowSuccess(false);
      }
    });
  };

  useEffect(() => {
    if (showSuccess) {
      showSuccessMessage();
    }
  }, [showSuccess, navigate, apartmentId]); 

  return null; 
}

export default SuccessCreation;
