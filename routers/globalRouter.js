import express from "express";
import passport from "passport";
import routes from "../routes";
import { homeCtrller, searchCtrller } from "../controllers/videoController";
import {
  logoutCtrller,
  getJoinCtrller,
  postJoinCtrller,
  getLoginCtrller,
  postLoginCtrller,
  githubLoginCtrller,
  postGithubLogin,
  getMe,
  facebookLoginController,
  postFacebookLogin
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeCtrller);
globalRouter.get(routes.search, searchCtrller);

globalRouter.get(routes.join, onlyPublic, getJoinCtrller);
globalRouter.post(routes.join, onlyPublic, postJoinCtrller, postLoginCtrller);

globalRouter.get(routes.login, onlyPublic, getLoginCtrller);
globalRouter.post(routes.login, onlyPublic, postLoginCtrller);

globalRouter.get(routes.logout, onlyPrivate, logoutCtrller);

globalRouter.get(routes.gitHub, githubLoginCtrller);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", {
    failureRedirect: "/login"
  }),
  postGithubLogin
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLoginController);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

export default globalRouter;
