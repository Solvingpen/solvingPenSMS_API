import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { DataResponse } from "../../util/types";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"



//const jwt = require("jsonwebtoken");
const env = dotenv.config();
const sk = process.env.JWT_KEY;

export class AuthController extends AuthService {


    /**
	 * Signup a user
	 * @param req
	 * @param res
	 * @param next
	 */

    createUser = (req: Request, res: Response, next: NextFunction): void => {
		//console.log("secret key:" + sk);

		const { firstName, lastName, email, phoneNumber, password } = req.body;
		console.log(req.body);
		this._createUser(email, phoneNumber, password, firstName, lastName).then((resp: DataResponse) => {
			res.status(resp.status).json({
				success: true,
				token: jwt.sign({ email, lastName, firstName,password,phoneNumber }, sk as string),
				msg: "User created successfully!"
			});
		}).catch((resp) => {
			res.status(parseInt(resp.status)).json({
				success: false,
				msg: resp["msg"],
			});
		});
	};

	login = (req: Request, res: Response, next: NextFunction): void => {
		//console.log("secret key:" + sk);
		const {email, password } = req.body;
		this._loginUser(email, password).then((resp: DataResponse) => {
			const token = jwt.sign({ email: email, dateCreated: new Date() }, sk as string)
			res.status(resp.status).json({
				success: true,
				token,
				msg: "Login successful"
			});
		}).catch((resp) => {
			res.status(parseInt(resp.status)).json({
				success: false,
				msg: resp["msg"],
			});
		});
	};


}

export default new AuthController();