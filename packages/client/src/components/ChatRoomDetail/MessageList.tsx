import React from "react";
import styled from "@emotion/styled";

export interface MessageType {
  senderId: string;
  content: string;
  timestamp: string;
}

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 48px 0;
  width: 100%;
  > li + li {
    margin-top: 25px;
  }
`;

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const MessageList: React.FC<Props> = ({ children }) => {
  return <Base>{children}</Base>;
};

export default MessageList;
