import nodemailer from 'nodemailer';
import dotenv from "dotenv";


const env = dotenv.config();

export class AuthEmail {

 createEmail = (token: string, email: string) => {
        // Create a transporter object
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // use SSL
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            }
        });


        // Configure the mailoptions object
        const mailOptions = {
            from: 'iheruomemichael@gmail.com',
            to: email,
            subject: 'Verify your account',
            text: '<p>Thanks you for creating an account with us! </p> <p> To  complete the registration process, please'
             +' verify your account by clicking the link below. </p>'
             +`<p> ${token} </p>`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Error:', error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }


}