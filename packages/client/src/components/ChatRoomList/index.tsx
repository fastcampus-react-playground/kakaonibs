import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 36px 0 64px 0;
`;

const ChatRoomList: React.FC = ({ children }) => {
  return <Base>{children}</Base>;
};

export default ChatRoomList;
