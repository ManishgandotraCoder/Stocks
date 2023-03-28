import express from "express";
export const routes = express();

import {userrouter}  from "../router/user.router";
import {cryptorouter}  from "../router/crypto.router";

routes.use('/', userrouter);
routes.use('/crypto', cryptorouter);

