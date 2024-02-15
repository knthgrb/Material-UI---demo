import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiRating: React.FC = () => {
  const [rate, setRate] = useState<number | null>(null);

  console.log(rate);
  const handleChange = (_e: React.ChangeEvent<{}>, newRate: number | null) => {
    setRate(newRate);
  };
  return (
    <Stack>
      <Rating
        value={rate}
        onChange={handleChange}
        precision={0.5}
        // icon={<BookmarkBorderIcon fontSize="inherit" />}
        // emptyIcon={<BookmarkIcon fontSize="inherit" />}
        // readOnly
        // highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
