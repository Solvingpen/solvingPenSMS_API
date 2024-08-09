import { NextFunction, Request, Response } from "express";

export class SmsError extends Error {
    apiError = (req: Request, res: Response, next: NextFunction) =>{
       // super(message);
         // Set the prototype explicitly.

         res.status(404).json({
            status: res.statusCode,
            msg: `Path ${req.originalUrl} is not defined on this server.`
        });
       // this.statusCode = statusCode;
       // this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error;';
        //Error.captureStackTrace(this, this.constructor);
    }
};

export default new SmsError();