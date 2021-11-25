import sequelize from "../sequelize";
import { DataTypes } from "sequelize";

import User from "./user";
import Room from "./room";

const Chat = sequelize.define("chat", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: DataTypes.STRING,
  senderId: {
    type: DataTypes.UUID,
    references: {
      model: User,
    },
  },
  roomId: {
    type: DataTypes.INTEGER,
    references: {
      model: Room,
    },
  },
});

Chat.belongsTo(User, { foreignKey: "senderId" });
Chat.belongsTo(Room, { foreignKey: "roomId" });

export default Chat;
