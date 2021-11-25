import sequelize from "../sequelize";
import { DataTypes } from "sequelize";
import User from "./user";

const Room = sequelize.define("room", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  opponentId: {
    type: DataTypes.UUID,
    references: { model: User },
  },
});

Room.belongsTo(User, { foreignKey: "opponentId" });

export default Room;
