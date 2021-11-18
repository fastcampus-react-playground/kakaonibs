import React from "react";
import styled from "@emotion/styled/macro";
import { useTheme } from "@emotion/react";

import { Link } from "react-router-dom";

import { BiUser } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";

const Base = styled.nav<{ backgroundColor: string; borderColor: string }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 64px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-top: 1px solid ${({ borderColor }) => borderColor};
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
  font-size: 24px;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
`;

const BottomNavigation: React.FC = () => {
  const theme = useTheme();

  return (
    <Base
      backgroundColor={theme.colors.gray[50]}
      borderColor={theme.colors.gray[300]}
    >
      <NavList>
        <NavItem>
          <Link to="/friends">
            <NavButton>
              <BiUser />
            </NavButton>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/rooms">
            <NavButton>
              <BsChatDots />
            </NavButton>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/more">
            <NavButton>
              <AiOutlineEllipsis />
            </NavButton>
          </Link>
        </NavItem>
      </NavList>
    </Base>
  );
};

export default BottomNavigation;
