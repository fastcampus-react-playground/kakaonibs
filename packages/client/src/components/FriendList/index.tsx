import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 64px 0;
`;

const FriendList: React.FC = ({ children }) => {
  return <Base>{children}</Base>;
};

export default FriendList;
