import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

import TopNavigation from "../components/ChatRoomDetail/TopNavigation";
import InputChat from "../components/ChatRoomDetail/InputChat";
import MessageList from "../components/ChatRoomDetail/MessageList";
import { useMutation, useQuery } from "react-query";
import { fetchChatRoomDetail } from "../apis/room";
import { AxiosError, AxiosResponse } from "axios";
import { Chat, Room } from "../types";
import { fetchChatMessageList, sendChatMessage } from "../apis/chat";
import SentMessage from "../components/ChatRoomDetail/SentMessage";
import ReceivedMessage from "../components/ChatRoomDetail/ReceivedMessage";

const globalStyles = css`
  body {
    background-color: #abc1d1;
  }
`;

const Base = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  align-items: center;
  padding: 0 24px;
`;

const RoomDetailPage: React.FC = () => {
  const { roomId } = useParams<string>();

  const { data: chatRoomDetailData } = useQuery<
    AxiosResponse<Room>,
    AxiosError
  >(["fetchChatRoomDetail", roomId], () =>
    fetchChatRoomDetail(roomId as string)
  );

  const { data: chatListData } = useQuery<
    AxiosResponse<Array<Chat>>,
    AxiosError
  >(["fetchChatMessageList", roomId], () =>
    fetchChatMessageList(roomId as string)
  );

  const mutation = useMutation("sendChatMessage", (content: string) =>
    sendChatMessage(roomId as string, content)
  );

  const handleSend = (content: string) => {
    mutation.mutate(content);
  };

  return (
    <Base>
      <Global styles={globalStyles} />
      {chatRoomDetailData && (
        <TopNavigation title={chatRoomDetailData.data.user.username} />
      )}
      <Container>
        <MessageList>
          {chatListData &&
            chatListData.data.map((chat) =>
              chat.senderId === chatRoomDetailData?.data.userId ? (
                <SentMessage
                  senderId={chat.senderId}
                  content={chat.content}
                  timestamp={chat.createdAt}
                />
              ) : (
                <ReceivedMessage
                  receiver={chat.user.username}
                  receiverThumbnailImage={chat.user.thumbnailImageUrl}
                  senderId={chat.senderId}
                  content={chat.content}
                  timestamp={chat.createdAt}
                />
              )
            )}
        </MessageList>
      </Container>
      <InputChat onClick={handleSend} />
    </Base>
  );
};

export default RoomDetailPage;
