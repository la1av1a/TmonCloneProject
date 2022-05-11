import styled, { CSSProperties } from "styled-components";
import { Typography } from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from "@mui/system";
import { useMemo } from "react";

export interface PrivateInfoDefaultButtonProps {
  src: string | React.ElementType;
  title: string;
  onClick?: () => void;
}

const ContainerBox = styled(Box)`
  display: inline-flex;
  border-radius: 0.5rem !important;
  padding: 0.5rem !important;
  flex-direction: column;
`;

const ImageBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const TypoBox = styled(Box)`
  text-align: center;
  margin-top: 0.5rem;
  max-width: 3.5rem;
`;

const PrivateInfoDefaultButton = (props: PrivateInfoDefaultButtonProps) => {

  const imageComponent = useMemo(() => {
    const currentProperties: CSSProperties = {
      width: '2.5rem',
      height: '2.5rem'
    }
    if (typeof props.src === 'string') {
      return <img style={currentProperties} src={props.src} />
    } else {
      const ImgRender = props.src as any
      return (<ImgRender style={currentProperties} />)
    }

  }, [props.src])

  return (
    <ContainerBox onClick={props.onClick}>
      <ImageBox>
        {imageComponent}
      </ImageBox>
      <TypoBox>
        <Typography style={{ wordWrap: "break-word" }} variant="caption">{props.title}</Typography>
      </TypoBox>
    </ContainerBox>
  );
};

export default PrivateInfoDefaultButton;
