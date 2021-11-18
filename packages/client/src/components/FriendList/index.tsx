import React from "react";
import styled from "@emotion/styled/macro";
import Friend from "./Friend";

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 64px 0;
`;

const FriendList: React.FC = () => {
  return (
    <Base>
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </Base>
  );
};

export default FriendList;
