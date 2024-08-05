import { DataResponse } from "../../util/types";
import AuthModel, { AuthMap } from '../model/auth.model';
import database from '../db/database';
import {AuthEmail} from '../../util/generate.email';
import crypto from "crypto";
//import bcrypt from "bcrypt";


export class AuthService {

	/**
	 * Register a user with firebase
	 * @param email
	 * @param password
	 * @param phoneNumber
	 * @param firstName
	 * @param lastName
	 */


	_createUser = async (email: string, phoneNumber: string, password: string, firstName: string, lastName: string): Promise<DataResponse> => {
		console.log("inside the service");
		return new Promise(async (resolve, reject) => {
			if (!email || !phoneNumber || !password || !firstName || !lastName) {
				reject({ status: 403, msg: "Error data. parameter(s) is empty!" });
				return
			}

			let encrypted = Buffer.from(password, 'binary').toString('base64');
			 //let decrypted = Buffer.from(encrypted, 'base64').toString('binary');
			 var encode = crypto.randomBytes(5).toString('hex');
			AuthMap(database);
			AuthModel.create({
				email,
				phoneNumber,
				password : encrypted,
				firstName,
				lastName
			}).then((result) => {
				new AuthEmail().createEmail(encode,email);
				resolve({ data: result.dataValues, status: 201, msg: "user created!" });
			})
				.catch((err) => {
					console.log(`Error here is ${err}`)
					if(err.toString().includes("SequelizeUniqueConstraintError") )
							reject({ status: 403, msg: "Duplicate email address" });
					else {
						reject({ status: 403, msg: "OOP! Error occured" });
					}
				});
			// newUser = result.dataValues as User;

		});
	};

}