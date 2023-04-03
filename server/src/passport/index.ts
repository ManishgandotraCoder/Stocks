const config = require('config');
import * as jwt from "passport-jwt"
const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
import {UserModel} from "../models/user.model";
import * as dotenv from "dotenv";
dotenv.config();
const opts = {
jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
secretOrKey :  "CURRENCY_FLOW_ETHAN_SPEEDY"
}

export const passport =(passport:any)=> {
	passport.use('jwt', new JWTStrategy(opts,
		async function (jwt_payload, done) {
			const getUser = await UserModel.find({email: jwt_payload.email});
			if (getUser) {
				return done(null, getUser);
			}
			return done(null, false);
		}
	));
	
}
