import React from 'react';
import styled from '@emotion/styled';

import BottomNavigation from '../components/BottomNavigation';

const Base = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoomListPage: React.FC = () => {
  return (
    <Base>
      <Container>
        <BottomNavigation />
      </Container>
    </Base>
  )
}

export default RoomListPage;
