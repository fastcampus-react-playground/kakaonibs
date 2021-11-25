import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import { MessageType } from "./MessageList";

interface ReceivedMessage extends MessageType {
  receiver: string;
  receiverThumbnailImage?: string;
}

const Base = styled.li`
  display: flex;
  width: 100%;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Content = styled.div``;

const UserName = styled.span`
  opacity: 0.8;
  font-size: 14px;
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 5px;
`;

const SpeechBubble = styled.span<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 0 15px 15px 15px;
  margin-right: 5px;
  padding: 13px;
  font-size: 18px;
`;

const ReceivedAt = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;

const ReceivedMessage: React.FC<ReceivedMessage> = ({
  receiverThumbnailImage,
  receiver,
  timestamp,
  content,
}) => {
  const theme = useTheme();

  return (
    <Base>
      <Image
        src={receiverThumbnailImage || "/placeholder.png"}
        alt={`${receiver}의 썸네일`}
      />
      <Content>
        <UserName>{receiver}</UserName>
        <Info>
          <SpeechBubble backgroundColor={theme.colors.white}>
            {content}
          </SpeechBubble>
          <ReceivedAt>{timestamp}</ReceivedAt>
        </Info>
      </Content>
    </Base>
  );
};

export default ReceivedMessage;
