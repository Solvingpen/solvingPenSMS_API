import { DataResponse } from "../../util/types";
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
		return new Promise((resolve, reject) => {

		});
	};

}