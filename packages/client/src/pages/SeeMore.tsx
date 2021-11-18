import React from "react";
import styled from "@emotion/styled";

import TopNavigation from "../components/TopNavigation";
import BottomNavigation from "../components/BottomNavigation";

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

const SeeMorePage: React.FC = () => {
  return (
    <Base>
      <Container>
        <TopNavigation title="더보기" />
        <BottomNavigation />
      </Container>
    </Base>
  );
};

export default SeeMorePage;
