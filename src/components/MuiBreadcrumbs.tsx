import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
        aria-label="breadcrumb"
      >
        <Link underline="hover" href="#">
          Test1{" "}
        </Link>
        <Link underline="hover" href="#">
          Test2
        </Link>
        <Link underline="hover" href="#">
          Test3
        </Link>
        <Link underline="hover" href="#">
          Test4
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
export default MuiBreadcrumbs;
