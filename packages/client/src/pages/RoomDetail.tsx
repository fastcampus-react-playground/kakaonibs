import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { Global, css, useTheme } from "@emotion/react";

import TopNavigation from "../components/RoomDetail/TopNavigation";
import InputChat from "../components/RoomDetail/InputChat";
import MessageList from "../components/RoomDetail/MessageList";

const globalStyles = css`
  body {
    background-color: #abc1d1;
  }
`;

const Base = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  align-items: center;
  padding: 0 24px;
`;

const Timestamp = styled.div<{ backgroundColor: string; color: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  padding: 15px;
  font-size: 14px;
  border-radius: 25px;
  margin-bottom: 25px;
  width: fit-content;
`;

const RoomDetailPage: React.FC = () => {
  const { roomId } = useParams();
  const theme = useTheme();

  console.log(roomId);

  return (
    <Base>
      <Global styles={globalStyles} />
      <TopNavigation title="123" />
      <Container>
        <Timestamp
          backgroundColor={theme.colors.gray[400]}
          color={theme.colors.white}
        >
          Tuesday, June 30, 2020
        </Timestamp>
        <MessageList />
      </Container>
      <InputChat />
    </Base>
  );
};

export default RoomDetailPage;
