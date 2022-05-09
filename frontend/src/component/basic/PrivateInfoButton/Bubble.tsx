import { Grid } from "@mui/material";
import { Box } from "@mui/system";

interface PrivateInfoButtonProps {
  src: string;
  title: string;
  onClick: () => void;
}

const PrivateInfoBubbleInfoButton = (props: PrivateInfoButtonProps) => {
  return (
    <Grid direction='column'>
      <Grid>img</Grid>
      <Grid>span</Grid>
    </Grid>
  );
};

export default PrivateInfoBubbleInfoButton;
