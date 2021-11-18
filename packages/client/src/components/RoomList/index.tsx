import React from "react";
import styled from "@emotion/styled/macro";
import Room from "./Room";

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 64px 0;
`;

const RoomList: React.FC = () => {
  return (
    <Base>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </Base>
  );
};

export default RoomList;
