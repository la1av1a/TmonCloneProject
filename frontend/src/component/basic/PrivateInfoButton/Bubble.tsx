import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import PrivateInfoDefaultButton, { PrivateInfoDefaultButtonProps } from "./Default";

export interface PrivateInfoBubbleButtonProps extends PrivateInfoDefaultButtonProps {
  bubbleCount: number
};

const ContainerBox = styled(Box)`
  display: inline-flex;
  position: relative;
`;

const Dot = styled(Box)`
  position: absolute;
  width: 1.5rem;
  height: 1.3125rem;
  border-radius: 100%;
  background-color: #f27935;
  right: 0rem;
  top: 0rem;
  color: #fff;
`

const PrivateInfoBubbleInfoButton = ({ bubbleCount, ...args }: PrivateInfoBubbleButtonProps) => {

  return (
    <ContainerBox>
      <PrivateInfoDefaultButton {...args} />
      <Dot>
        <Typography align="center">{bubbleCount}</Typography>
      </Dot>
    </ContainerBox>
  );
};

export default PrivateInfoBubbleInfoButton;
