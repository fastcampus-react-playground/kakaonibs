import { Router } from "express";
import { v4 as uuid } from "uuid";

import mock from "../mock";
import User from "../schemas/user";
import { Op } from "sequelize";

const router = Router();

/* 유저 목록 */
router.get("/", async (req, res) => {
  try {
    const result = await User.findAndCountAll({
      where: {
        id: {
          // @ts-ignore
          [Op.ne]: req.session.userId,
        },
      },
    });

    res.json(result);
  } catch (e) {}
});

router.post("/mock", async (req, res) => {
  try {
    await User.create({
      id: uuid(),
      username: mock[0].username,
      thumbnailImageUrl: mock[0].thumbnailImageUrl,
    });
    await User.create({
      id: uuid(),
      username: mock[1].username,
      thumbnailImageUrl: mock[1].thumbnailImageUrl,
    });
    await User.create({
      id: uuid(),
      username: mock[2].username,
      thumbnailImageUrl: mock[2].thumbnailImageUrl,
    });

    res.json({
      statusText: "OK",
    });
  } catch (e) {}
});

/* 유저 생성 */
router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      id: uuid(),
      username: req.body.username,
      thumbnailImageUrl: req.body.thumbnailImageUrl,
    });

    res.json(user);
  } catch (e) {}
});

/* 세션 조회 */
router.get("/me", async (req, res) => {
  try {
    res.json({
      // @ts-ignore
      username: req.session.username,
      // @ts-ignore
      userId: req.session.userId,
      // @ts-ignore
      isLogged: req.session.isLogged,
    });
  } catch (e) {}
});

/* 로그인 */
router.post("/login", async (req, res) => {
  try {
    const userId = uuid();
    const username = req.body.username;

    const user = await User.create({
      id: userId,
      username,
    });

    // @ts-ignore
    req.session.username = username;
    // @ts-ignore
    req.session.userId = userId;
    // @ts-ignore
    req.session.isLogged = true;

    req.session.save(() => {
      res.json({
        statusText: "OK",
        data: user,
      });
    });
  } catch (e) {}
});

/* 로그아웃 */
router.post("/logout", async (req, res) => {
  try {
    // @ts-ignore
    delete req.session.user;

    req.session.save(() => {
      res.redirect("/");
    });
  } catch (e) {}
});

export default router;
