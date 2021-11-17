import React from 'react';
import styled from '@emotion/styled';

const Base = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div``;

const Logo = styled.img``;

const InputWrapper = styled.div``;

const Input = styled.input`
  margin: 0;
  border: none;
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
`;

const LobbyPage: React.FC = () => {
  return (
    <Base>
      <Container>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <InputWrapper>
          <Input />
        </InputWrapper>
        <ButtonWrapper>
          <Button>로그인</Button>
        </ButtonWrapper>
      </Container>
    </Base>
  )
}

export default LobbyPage;
