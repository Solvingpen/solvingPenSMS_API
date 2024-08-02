import { DataResponse } from "../../util/types";
import AuthModel, { AuthMap } from '../model/auth.model';
import database from '../db/database';
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
		// const salt = bcrypt.genSaltSync(10);
		// const hashedPassword = bcrypt.hashSync(password, salt);
		return new Promise(async (resolve, reject) => {
			AuthMap(database);
			//await User.query(createTodosTable);
			AuthModel.create({
				email,
				phoneNumber,
				password,
				firstName,
				lastName
			}).then((result) => {
				resolve({ data: result.dataValues, status: 201, msg: "user created!" });
			})
				.catch((err) => {
					reject({ status: 403, msg: err });
				});
			// newUser = result.dataValues as User;

		});
	};

}