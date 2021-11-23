export interface User {
  id: string;
  username: string;
  thumbnailImageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Room {
  id: number;
  opponentId: string;
  userId: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface Chat {
  id: number;
  content: string;
  senderId: string;
  roomId: string;
  user: User;
  room: Room;
  createdAt: string;
  updatedAt: string;
}
