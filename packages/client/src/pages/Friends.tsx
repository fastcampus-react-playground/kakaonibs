import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Friend from "../components/FriendList/Friend";
import BottomNavigation from "../components/BottomNavigation";
import TopNavigation from "../components/TopNavigation";
import FriendList from "../components/FriendList";
import { useMutation, useQuery } from "react-query";
import { fetchMyProfile, fetchUserList } from "../apis/user";
import { AxiosError, AxiosResponse } from "axios";
import { IProfile, IRoom, IUser } from "../types";
import Profile from "../components/Profile";
import {
  fetchChatRoomList,
  makeChatRoom,
  MakeChatRoomRequest,
} from "../apis/room";

const Base = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 12px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Summary = styled.small`
  margin: 4px 0;
  padding: 24px 0 0 0;
  font-size: 12px;
`;

const FriendsPage: React.FC = () => {
  const navigate = useNavigate();

  const { data: profileData } = useQuery<AxiosResponse<IProfile>, AxiosError>(
    "fetchMyProfile",
    fetchMyProfile
  );

  const { data: userData } = useQuery<
    AxiosResponse<{ count: number; rows: Array<IUser> }>,
    AxiosError
  >("fetchUserList", fetchUserList);

  const { data: chatRoomListData } = useQuery<
    AxiosResponse<Array<IRoom>>,
    AxiosError
  >("fetchChatRoomList", fetchChatRoomList);

  const mutation = useMutation("makeChatRoom", (request: MakeChatRoomRequest) =>
    makeChatRoom(request)
  );

  const handleChatRoomCreate = (opponentId: string) => {
    const chatRoom = chatRoomListData?.data.find(
      (chatRoom) => chatRoom.opponentId === opponentId
    );

    if (chatRoom) {
      navigate(`/rooms/${chatRoom.id}`);
    } else {
      mutation.mutate(
        {
          opponentId,
        },
        {
          onSuccess: (data) => {
            navigate(`/rooms/${data.data.id}`);
          },
        }
      );
    }
  };

  return (
    <Base>
      <Container>
        <TopNavigation title="친구" />
        {profileData && <Profile username={profileData.data.username} />}
        {userData && (
          <>
            <Summary>친구 {userData.data.count}</Summary>
            <FriendList>
              {userData.data.rows.map((row) => (
                <Friend
                  key={row.id}
                  username={row.username}
                  thumbnailImage={row.thumbnailImageUrl}
                  onClick={() => handleChatRoomCreate(row.id)}
                />
              ))}
            </FriendList>
          </>
        )}
        <BottomNavigation />
      </Container>
    </Base>
  );
};

export default FriendsPage;
