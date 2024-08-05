import { NextFunction, Request, Response } from "express";

const jwt = require("jsonwebtoken");
const sk = process.env.JWT_KEY;


export class Middleware {

    /**
	 * Check validity of token
	 * @param token
	 *
	 */


    checkToken = (req: Request, res: Response, next: NextFunction) => {
		const { token } = req.headers;
		console.log(`token header is ${token}`)

		jwt.verify(token, sk, (err: Error, decoded: any) => { 
			if (err) {
				res.status(403).json({
					success: false,
					msg: "invalid token"
				});
			} else {
				next();
			}
		});
	};

}

export default new Middleware();