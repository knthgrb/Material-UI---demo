import { Stack } from "@mui/material";
import "./App.css";
// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";
// import MuiTextField from "./components/MuiTextField";
// import MuiSelect from "./components/MuiSelect";
// import MuiRadioButton from "./components/MuiRadioButton";
// import MuiCheckbox from "./components/MuiCheckbox";
// import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";

function App() {
  return (
    <Stack padding={5}>
      {/* <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
      <MuiSwitch /> */}
      <MuiRating />
    </Stack>
  );
}

export default App;
