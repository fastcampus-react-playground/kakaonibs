const SocketIO = require("socket.io");

import { Application, NextFunction, RequestHandler } from "express";
import { Server } from "net";
import { Socket } from "socket.io";

const ws = (server: Server, app: Application, session: RequestHandler) => {
  const io = SocketIO(server, {
    path: "/socket.io",
    cors: {
      origin: "*",
    },
  });

  app.set("io", io);

  const chat = io.of("/chat");

  io.use((socket: Socket, next: NextFunction) => {
    const req = socket.request;
    // @ts-ignore
    const res = socket.request.res || {};
    // @ts-ignore
    session(req, res, next);
  });

  chat.on("connection", async (socket: Socket) => {
    console.log("Connected to Chat", socket.id);

    socket.on("join", (roomId) => {
      console.log(roomId);
      socket.join(roomId);
    });

    socket.on("disconnect", (data) => {
      console.log("Disconnected to Chat");
    });
  });
};

export default ws;
