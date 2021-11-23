import React, { useState } from "react";

import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import { AiOutlineArrowUp } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";

const Base = styled.div<{ borderColor: string; backgroundColor: string }>`
  width: 100%;
  height: 48px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  border-top: 1px solid ${({ borderColor }) => borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 4px;
`;

const PlusButtonWrapper = styled.div``;

const PlusButton = styled.button`
  width: 48px;
  height: 48px;
  font-size: 20px;
  border: none;
  background-color: transparent;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Input = styled.input<{ borderColor: string; backgroundColor: string }>`
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: transparent;
  border-radius: 16px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 4px 8px;
  font-size: 16px;
`;

const SendButtonWrapper = styled.div`
  margin-left: 8px;
  box-sizing: border-box;
`;

const SendButton = styled.button<{ backgroundColor: string }>`
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 16px;
  &:active {
    opacity: 0.7;
  }
`;

interface Props {
  onClick(content: string): void;
}

const InputChat: React.FC<Props> = ({ onClick }) => {
  const theme = useTheme();
  const [content, setContent] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <Base
      borderColor={theme.colors.gray[100]}
      backgroundColor={theme.colors.white}
    >
      <PlusButtonWrapper>
        <PlusButton>
          <BsPlusSquare />
        </PlusButton>
      </PlusButtonWrapper>
      <InputWrapper>
        <Input
          borderColor={theme.colors.gray[200]}
          backgroundColor={theme.colors.gray[100]}
          onChange={handleChange}
        />
      </InputWrapper>
      <SendButtonWrapper>
        <SendButton
          backgroundColor={theme.colors.primary}
          onClick={() => onClick(content)}
        >
          <AiOutlineArrowUp />
        </SendButton>
      </SendButtonWrapper>
    </Base>
  );
};

export default InputChat;
