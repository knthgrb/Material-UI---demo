import React from "react";
import { Typography } from "@mui/material";

const MuiTypography: React.FC = () => {
  return (
    <div>
      <Typography variant="h1">Heading</Typography>
      <Typography variant="h5" component="h1" gutterBottom>
        Heading
      </Typography>
      <Typography variant="subtitle1">Heading</Typography>
      <Typography variant="subtitle2">Heading</Typography>
      <Typography variant="subtitle2">Heading</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        voluptatem modi laudantium totam id explicabo quis sequi! Corporis vero,
        corrupti expedita reprehenderit, ducimus iure, ratione necessitatibus id
        porro qui consequatur tempora magnam?
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem labore
        dicta iure ad sunt? Quod quo distinctio, rerum illo aliquam voluptatibus
        accusantium beatae natus ad dolorem. Repellendus adipisci qui eaque
        voluptatem nobis?
      </Typography>
    </div>
  );
};

export default MuiTypography;
