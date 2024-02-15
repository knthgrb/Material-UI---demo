import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOn(e.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={isOn} onChange={handleChange} />}
      />
    </Box>
  );
};

export default MuiSwitch;
