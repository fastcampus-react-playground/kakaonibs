import express, { Application } from "express";
import session from "express-session";
import cors from "cors";

import sequelize from "./sequelize";
import routes from "./routes";
import socket from "./socket";

const FileStore = require("session-file-store")(session);

require("dotenv").config();

const app: Application = express();

const sessionMiddleware = session({
  secret: "kakaonibs", // 쿠키를 임의로 변조하는것을 방지하기 위한 값 입니다. 이 값을 통하여 세션을 암호화 하여 저장합니다.
  saveUninitialized: true, // 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장합니다.
  cookie: { secure: false }, // one day
  resave: false, //  세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값입니다. express-session documentation에서는 이 값을 false 로 하는것을 권장하고 필요에 따라 true로 설정합니다.
  store: new FileStore(),
});

app.use(sessionMiddleware);
app.use(
  // for cors
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json()); // for req.body
app.use(express.urlencoded({ extended: true })); // for req.body

sequelize.sync({ force: true });

app.use("/", routes);

const server = app.listen(8000, () => {
  console.log("start");
});

socket(server, app, sessionMiddleware);
