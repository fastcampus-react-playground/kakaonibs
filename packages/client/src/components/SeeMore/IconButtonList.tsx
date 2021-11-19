import React from "react";
import styled from "@emotion/styled";
import { FiMail, FiCalendar, FiScissors, FiGift } from "react-icons/fi";

const Base = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin-top: 36px;
`;

const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 24px;
`;

const Label = styled.div`
  margin-top: 4px;
`;

const IconButtonList: React.FC = () => (
  <Base>
    <IconButton>
      <Icon>
        <FiMail />
      </Icon>
      <Label>메일</Label>
    </IconButton>
    <IconButton>
      <Icon>
        <FiCalendar />
      </Icon>
      <Label>캘린더</Label>
    </IconButton>
    <IconButton>
      <Icon>
        <FiScissors />
      </Icon>
      <Label>헤어샵</Label>
    </IconButton>
    <IconButton>
      <Icon>
        <FiGift />
      </Icon>
      <Label>선물하기</Label>
    </IconButton>
  </Base>
);

export default IconButtonList;
