import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

const MuiTextField: React.FC = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" size="small" variant="outlined" />
        <TextField label="Name" size="small" variant="filled" />
        <TextField label="Name" size="small" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Name"
          size="small"
          variant="outlined"
          color="secondary"
          required
        />
        <TextField
          label="Name"
          size="small"
          variant="filled"
          color="error"
          required
          helperText="this is name"
        />
        <TextField
          label="Name"
          size="small"
          variant="standard"
          color="success"
          required
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="username"
          required
          type="input"
          size="small"
          value={value}
          error={!value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? "required" : "this is a password"}
        />
        <TextField
          label="password"
          size="small"
          required
          type="password"
          helperText="Input password"
        />
        <TextField
          label="email"
          type="input"
          size="small"
          InputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          size="small"
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          size="small"
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
