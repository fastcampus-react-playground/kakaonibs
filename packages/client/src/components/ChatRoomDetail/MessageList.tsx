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

const MessageList: React.FC = ({ children }) => {
  return <Base>{children}</Base>;
};

export default MessageList;
