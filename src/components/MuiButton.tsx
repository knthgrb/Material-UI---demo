import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton: React.FC = () => {
  const [formats, setFormats] = useState<string[]>([]);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack
      spacing={5}
      direction="column"
      sx={{ marginBottom: "50px", marginTop: "30px" }}
    >
      <Stack spacing={5} direction="row">
        <Button variant="text" href="https://google.com">
          text button
        </Button>
        <Button variant="contained" color="warning">
          contained button
        </Button>
        <Button variant="contained" color="error">
          contained button
        </Button>
        <Button variant="contained" color="success">
          contained button
        </Button>
        <Button variant="outlined"> button</Button>
      </Stack>

      <Stack display="block" spacing={5} direction="row">
        <Button variant="contained" color="warning" size="small">
          contained button
        </Button>
        <Button
          variant="contained"
          color="error"
          size="medium"
          endIcon={<AddIcon />}
        >
          This is a contained button
        </Button>
        <Button
          variant="contained"
          color="success"
          size="large"
          startIcon={<AddIcon />}
          disableElevation
          disableRipple
          disableTouchRipple
          disableFocusRipple
          onClick={() => alert("hello")}
        >
          This is a disabled button
        </Button>
        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="contained" color="secondary" size="small">
          <Button value="bold">Left</Button>
          <Button value="italic">Center</Button>
          <Button value="underline">Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          color="secondary"
          size="small"
          onChange={handleFormatChange}
          value={formats}
          aria-label="text-format"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
