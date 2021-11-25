import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const StyledLink = styled(Link)<{ color: string }>`
  text-decoration: none;
  color: ${({ color }) => color};
`;

const Base = styled.li<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid ${({ color }) => color};
`;

const AvatarWrapper = styled.div`
  width: 48px;
  height: 48px;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

const Content = styled.div`
  flex: 0 1 250px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const Username = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
`;

const LastMessage = styled.p<{ color: string }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 12px;
  color: ${({ color }) => color};
`;

const SentAtWrapper = styled.div`
  flex: 0 1 36px;
  text-align: center;
  font-size: 12px;
`;

const SentAt = styled.time``;

interface Props {
  id: number;
  username: string;
  lastMessage?: string;
  latestMessageSentAt?: string;
}

const ChatRoom: React.FC<Props> = ({
  id,
  username,
  lastMessage,
  latestMessageSentAt,
}) => {
  const theme = useTheme();

  return (
    <StyledLink to={`/rooms/${id}`} color={theme.colors.gray[900]}>
      <Base color={theme.colors.gray[100]}>
        <AvatarWrapper>
          <Avatar src="/placeholder.png" />
        </AvatarWrapper>
        <Content>
          <Username>{username}</Username>
          <LastMessage color={theme.colors.gray[800]}>
            {lastMessage}
          </LastMessage>
        </Content>
        <SentAtWrapper>
          <SentAt>{latestMessageSentAt}</SentAt>
        </SentAtWrapper>
      </Base>
    </StyledLink>
  );
};

export default ChatRoom;
