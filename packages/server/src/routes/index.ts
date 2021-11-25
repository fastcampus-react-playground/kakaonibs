import { Router } from "express";

import chat from "./chat";
import user from "./user";
import room from "./room";

const router = Router();

router.use("/chat", chat);
router.use("/user", user);
router.use("/room", room);

export default router;
