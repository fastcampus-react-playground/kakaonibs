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
  secret: "kakaonibs",
  saveUninitialized: true,
  cookie: { secure: false }, // one day
  resave: false,
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
