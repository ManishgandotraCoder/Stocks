import { Response, Request, NextFunction } from "express";
import { helper } from '../helpers/response-helper';
import { UserModel } from '../models/user.model'
import * as express from "express";
import { msg } from "../helpers/messages"
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

import * as dotenv from "dotenv";
import mongoose from 'mongoose';


dotenv.config();

export class AuthController {
  async login(req: Request, res: express.Response, next: NextFunction) {
    try {

      UserModel.find({ email: req.body.email, password: req.body.password }).select('_id , name , email').then(
        async (data: any) => {
          if (data.length === 1 && data[0]._id) {
            var token = await jwt.sign({ _id: data[0]._id, email: data[0].email }, process.env.JWT_TOKEN + '');
            let resp = {
              email: data[0].email,
              name: data[0].name,
              _id: data[0]._id,
              token: token
            }
            helper.success(res, msg.USER_LOGIN_SUCCESS, resp)
          } else {
            helper.error(res, msg.INVALID_CREDENTIALS, null)
          }
        }
      )
    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, null)
    }
  }
  async signup(req: Request, res: express.Response, next: NextFunction) {
    const { email, name, password } = req.body
    try {
      const user = new UserModel({
        name: name,
        email: email,
        password: password
      });
      user.save().then((userinfo: any) => {
        helper.success(res, msg.USER_REGISTER_SUCCESS, userinfo)
      })
    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, null)
    }
  }
  async getusers(req: Request, res: Response, next: NextFunction) {
    try {

      if (req.params?._id && req.params?._id.toUpperCase() !== "ALL") {
        let id = mongoose.Types.ObjectId(req.params?._id)
        UserModel.find({ _id: id }).then((user: any) => {
          if (user.length > 0) {
            helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, user[0])
          } else {
            helper.error(res, msg.NO_RECORD, user)
          }
        })
      } else {
        UserModel.find({}).then((user: any) => {
          if (user.length > 0) {
            helper.success(res, msg.RECORD_FETCHED_SUCCESSFULLY, user)
          } else {
            helper.error(res, msg.NO_RECORD, user)
          }
        })
      }

    } catch (e) {
      helper.server_error(res, msg.SERVER_ERROR, null)
    }
  }
  async forgotpassword(req: Request, res: Response, next: NextFunction) {
    // email token
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      from: '"Manish gandotra" Manishgandotra74@gmail.com', // sender address
      to: "Manishgandotra74@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    res.send(JSON.stringify(info))
  }
  // async resetChangepassword(req: Request, res: Response, next: NextFunction) {

  // }
}

