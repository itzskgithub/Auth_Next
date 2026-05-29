import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
import User from "@/models/userModel.models";

export const sendMail = async ({
    email,
    emailType,
    userId
}: {
    email: string;
    emailType: "VERIFY" | "RESET";
    userId: string;
}) => {
    try {
        //Generate hashed Token
        const hashedToken = await bcryptjs.hash(
            userId.toString(),
            10
        );

        //verify email
        if(emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000,
            });
        }


        //Forgot password

        else if(emailType === 'RESET'){
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000,
            })
        }

        //create transporter

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure : false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        //VERIFICATION URL

        const verificationUrl =
            emailType ===  "VERIFY" ?
        `${process.env.DOMAIN}/verifyemail?token=${hashedToken}` : `${process.env.DOMAIN}/resetpassword?token=${hashedToken}`;

        //send Mail

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,

            subject:
                emailType === "VERIFY"
                ? "Verify your email"
                : "Reset your password",

            html: `
                <div style='font-family:Arial;padding:20px;'>

                    <h2>
                        ${
                            emailType === "VERIFY"
                            ? "Verify your email"
                            : "Reset your password"
                        }
                    </h2>

                    <p>

                        Click the button below:
                    </p>

                    <a
                        href="${verificationUrl}"
                        style="
                            display:inline-black;
                            padding: 10px 20px;
                            background-color: orange;
                            color: black;
                            text-decoration: none;
                            border-radius: 8px;
                            font-weight: bold;
                        "
                    >
                        ${
                            emailType === 'VERIFY'
                            ? "Verify Email"
                            : "Reset Password"
                        }
                    </a>

                    <p style="margin-top:20px;">
                        Or copy this link:
                    </p>

                    <p>
                        ${verificationUrl}
                    </p>

                </div>
            `,
        };

        //send email
        const mailResponse = await transporter.sendMail(mailOptions);

        return mailResponse;

    } catch (error:any) {
        throw new Error(error.message);
    }
}