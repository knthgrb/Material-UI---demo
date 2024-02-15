import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

const MuiRadioButton: React.FC = () => {
  const [value, setValue] = useState<string>("");
  console.log({ value });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl>
        {/* add error prop for form control top handle error*/}
        <FormLabel id="job-exp-group-label">Years of Experience</FormLabel>
        <RadioGroup
          name="job-exp-group"
          aria-labelledby="job-exp-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio size="small" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio size="small" />}
            label="6-8"
            value="6-8"
          />
        </RadioGroup>
        <FormHelperText>{value === "" ? "empty" : "filled"}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
