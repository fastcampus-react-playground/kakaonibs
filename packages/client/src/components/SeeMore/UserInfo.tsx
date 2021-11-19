import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Base = styled.div`
  display: flex;
  margin-top: 64px;
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 25px;
`;

const Info = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const PhoneNumber = styled.p<{ color: string }>`
  font-size: 16px;
  margin: 8px 0 0 0;
  padding: 0;
  color: ${({ color }) => color};
`;

interface Props {
  username: string;
  telNo: string;
}

const UserInfo: React.FC<Props> = ({ username, telNo }) => {
  const theme = useTheme();

  return (
    <Base>
      <ImageWrapper>
        <Image src="/placeholder.jpeg" />
      </ImageWrapper>
      <Info>
        <UserName>{username}</UserName>
        <PhoneNumber color={theme.colors.gray[500]}>{telNo}</PhoneNumber>
      </Info>
    </Base>
  );
};

export default UserInfo;
