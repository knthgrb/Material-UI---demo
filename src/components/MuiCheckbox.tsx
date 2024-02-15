import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          control={<Checkbox onChange={handleChange} checked={isChecked} />}
          label="i accept terms and conditions"
        />
      </Box>

      {/* <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          onChange={handleChange}
          checked={isChecked}
        />
      </Box> */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  onChange={handleSkillChange}
                  checked={skills.includes("html")}
                />
              }
              label="HTML"
              value="html"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  onChange={handleSkillChange}
                  checked={skills.includes("css")}
                />
              }
              label="CSS"
              value="css"
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  onChange={handleSkillChange}
                  checked={skills.includes("js")}
                />
              }
              label="JS"
              value="js"
            />
          </FormGroup>
          {/* <FormHelpterText/> */}
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
