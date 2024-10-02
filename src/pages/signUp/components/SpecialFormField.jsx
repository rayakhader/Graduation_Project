import { InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import "flag-icon-css/css/flag-icons.min.css"; 
import { useSelectedCountry } from "../context/SelectedCountry";
const countryData = [
  { name: "Palestine", code: "+970", flag: "ps" },
  { name: "Palestine", code: "+972", flag: "ps" },
];
function SpecialFormField({ values, errors, handleChange }) {
  const {selectedCountry, setSelectedCountry} = useSelectedCountry();

  const handleSelectChange = (event) => {
    const selectedCountry = countryData.find((country) => country.code === event.target.value);
    setSelectedCountry(selectedCountry);
  };

  return (
    <TextField
      margin="normal"
      fullWidth
      id="phoneNumber"
      label="Phone Number"
      type="tel"
      name="phoneNumber"
      value={values.phoneNumber} 
      onChange={(e)=>handleChange(e)} 
      error={!!errors.phoneNumber}
      helperText={errors.phoneNumber}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PhoneIcon style={{ marginRight: "10px" }} />
            <Select
              value={selectedCountry.code}
              onChange={handleSelectChange} 
              variant="standard"
              disableUnderline
            >
              {countryData.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  <span
                    className={`flag-icon flag-icon-${country.flag}`}
                    style={{ marginRight: "8px" }}
                  />
                  {country.name.substring(0, 3)} ({country.code})
                </MenuItem>
              ))}
            </Select>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SpecialFormField;