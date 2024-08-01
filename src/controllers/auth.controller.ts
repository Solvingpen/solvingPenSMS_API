import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { DataResponse } from "../../util/types";


const jwt = require("jsonwebtoken");
const sk = process.env.JWT_KEY;

export class AuthController extends AuthService {


    /**
	 * Signup a user
	 * @param req
	 * @param res
	 * @param next
	 */

    createUser = (req: Request, res: Response, next: NextFunction): void => {
		console.log("secret key:" + sk);

		const { firstName, lastName, email, phoneNumber, password } = req.body;
		console.log(req.body);
		this._createUser(email, phoneNumber, password, firstName, lastName).then((resp: DataResponse) => {
			res.status(resp.status).json({
				success: true,
				token: jwt.sign({ email: email, lastName, firstName }, sk),
				msg: "User created successfully!"
			});
		}).catch((resp) => {
			res.status(parseInt(resp.status)).json({
				success: false,
				msg: resp["msg"],
			});
		});
	};


}