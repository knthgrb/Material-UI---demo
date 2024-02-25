import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Test
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptas, iure ducimus magni fugiat accusamus dolorem saepe
            reprehenderit libero est.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Test</Button>
          <Button size="small">Test1</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default MuiCard;
