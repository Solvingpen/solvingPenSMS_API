import * as express from "express";
import AuthController from "../controllers/auth.controller";
import SmsError from "../../util/appError";


const AuthRouter = express.Router()
.post("/auth/register", AuthController.createUser)
.post("/auth/login", AuthController.login)
.all('*', SmsError.apiError)



export default AuthRouter;