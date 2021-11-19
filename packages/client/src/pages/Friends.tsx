import React from "react";
import styled from "@emotion/styled";

import BottomNavigation from "../components/BottomNavigation";
import TopNavigation from "../components/TopNavigation";
import FriendList from "../components/FriendList";

const Base = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 12px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Summary = styled.small`
  margin: 4px 0;
  padding: 36px 0 0 0;
  font-size: 12px;
`;

const FriendsPage: React.FC = () => {
  return (
    <Base>
      <Container>
        <TopNavigation title="친구" />
        <Summary>친구 4</Summary>
        <FriendList />
        <BottomNavigation />
      </Container>
    </Base>
  );
};

export default FriendsPage;
