import React from "react";
import styled from "@emotion/styled";
// import ReceivedMessage from "./ReceivedMessage";
// import SentMessage from "./SentMessage";

export interface MessageType {
  senderId: number;
  content: string;
  timestamp: string;
}

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  > li + li {
    margin-top: 25px;
  }
`;

const MessageList: React.FC = () => {
  return (
    <Base>
      {/*<ReceivedMessage />*/}
      {/*<SentMessage />*/}
    </Base>
  );
};

export default MessageList;
