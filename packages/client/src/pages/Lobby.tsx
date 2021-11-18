import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Base = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 0 12px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  width: 128px;
  height: 128px;
  object-fit: contain;
  margin: 96px auto;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Input = styled.input`
  margin: 0;
  width: 100%;
  height: 32px;
  border: none;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 4px;
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
`;

const LobbyPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Base backgroundColor={theme.colors.primary}>
      <Container>
        <LogoWrapper>
          <Logo src="/logo.png" />
        </LogoWrapper>
        <InputWrapper>
          <Input />
        </InputWrapper>
        <ButtonWrapper>
          <Button>로그인</Button>
        </ButtonWrapper>
      </Container>
    </Base>
  );
};

export default LobbyPage;
