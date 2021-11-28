import axiosInstance from "../apis";

export function fetchChatMessageList(roomId: string) {
  return axiosInstance.get(`/chat/${roomId}`);
}

export function sendChatMessage(roomId: string, content: string) {
  return axiosInstance.post(`/chat/${roomId}`, { content });
}
