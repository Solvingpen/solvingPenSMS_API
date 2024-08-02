import * as express from "express";
import AuthController from "../controllers/auth.controller";


const AuthRouter = express.Router()
.post("/auth/register", AuthController.createUser)

export default AuthRouter;