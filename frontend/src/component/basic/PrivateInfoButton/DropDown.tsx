import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SyntheticEvent, useCallback, useState } from "react";
import styled from "styled-components";
import PrivateInfoDefaultButton, { PrivateInfoDefaultButtonProps } from "./Default";
import { DROPDOWN_TYPE, PopupPresetType } from "./DropDwonType";


// 이거 나중에 i18n 나오면 어떻게 할지 생각해봐야함
// TODO: i18n
const popupData: PopupPresetType = {
  [DROPDOWN_TYPE.ORDER_N_DELIVERY]: { title: `구매·배송조회`, redirectionUrl: '#1' },
  [DROPDOWN_TYPE.CANCEL_N_REFUND]: { title: `취소·환불·교환`, redirectionUrl: '#2' },
  [DROPDOWN_TYPE.CASH_N_RESERVE]: { title: `티몬캐시·적립금`, redirectionUrl: '#3' },
  [DROPDOWN_TYPE.DISCOUNT]: { title: `할인쿠폰`, redirectionUrl: '#4' },
  [DROPDOWN_TYPE.LAST_SEEN]: { title: `최근 본 상품`, redirectionUrl: '#5' },
  [DROPDOWN_TYPE.PICKKED]: { title: `찜목록`, redirectionUrl: '#6' },
}

export interface PrivateInfoDropDownButtonProps extends PrivateInfoDefaultButtonProps {
  onDropDownClick: (href: string) => void;
};

const boxPadding: number = 0.5
const boarderWidth: number = 0.1

const ContainerBox = styled(Box)`
  display: inline-block;
  position: relative;
`;

const PopupBox = styled(Box)`
  position: absolute;
  margin-right: -10000px;
  transform: translateY(-20%) 
    translateX(calc(-25% + (${boxPadding}rem + ${boarderWidth}rem) / 2));
`;

const PopupContainer = styled.ul`
  display: flex;
  padding: ${boxPadding}rem;
  flex-direction: column;
  background-color: white;
  border: ${boarderWidth}rem solid black;
`;

const ListTypo = styled(Typography)`
  text-align: center;
  &:not(:last-of-type) {
    margin-bottom: 0.18rem;
  }
  :hover {
    text-decoration: underline;
  }
`;

const PrivateInfoDropDownButton = ({ onDropDownClick, ...args }: PrivateInfoDropDownButtonProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const onDefaultButtonClick = () => {
    setOpen(!isOpen)
  }

  const onPopupClick = useCallback((e: SyntheticEvent) => {
    const clickType = (e.target as HTMLElement).id as DROPDOWN_TYPE;
    setOpen(false)
    onDropDownClick(popupData[clickType].redirectionUrl);
  }, [onDropDownClick, setOpen])

  return (
    <ContainerBox>
      <PrivateInfoDefaultButton onClick={onDefaultButtonClick} {...args} />
      {isOpen && <PopupBox>
        <PopupContainer onClick={onPopupClick}>
          {Object.entries(popupData).map(data => {
            const clickId = data[0]
            const dataTitle = data[1].title
            return <ListTypo id={clickId} key={dataTitle} variant="caption">{dataTitle}</ListTypo>
          })}
        </PopupContainer>
      </PopupBox>
      }
    </ContainerBox>
  );
};

export default PrivateInfoDropDownButton;

