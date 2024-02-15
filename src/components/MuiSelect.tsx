import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect: React.FC = () => {
  const [genders, setGenders] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;
    setGenders(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px" sx={{ marginTop: "20px" }}>
      <TextField
        label="select item"
        select
        value={genders}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        helperText="this is a multiple select"
      >
        <MenuItem value="boy">blue</MenuItem>
        <MenuItem value="girl">red</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
