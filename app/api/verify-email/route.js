import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { email, } = await req.json();

    const link = `https://user.unsigned-global.com/signUp/create-password?email=${encodeURIComponent(email)}`
    // const link = `https://unsigned-nu.vercel.app/signUp/create-password?email=${encodeURIComponent(email)}`


    // Create mail options with dynamic values
    const mailOptions = {
        from: 'no-reply@unsigned-global.com',
        to: `${email}`,
        subject: 'Verify Your Email Address',
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h2 style="color: #333;">Email Verification</h2>
            <p>Hi there,</p>
            <p>Thank you for signing up! Please verify your email address to complete your registration.</p>
            <p>Click the button below to verify your email address:</p>
            <div style="text-align: center; margin: 20px 0;">
                    <a href="${link}" target="_blank" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Verify Email</a>
                </div>
                <p>If the button doesn't work, you can copy and paste the following URL into your browser:</p>
                <p style="color: blue;">${link}</p>
            <p>If you didn't create an account, you can safely ignore this email.</p>
            <p>Best regards,</p>
            <p>Unsigned</p>
        </div>
        `,
    };

    try {
        // const transporter = nodemailer.createTransport({
        //     service: "Gmail",
        //     host: "smtp.gmail.com",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: 'atifhameed11312@gmail.com',
        //         pass: 'vsmn udhp fblt mmdr',
        //     },
        // });

        const transporter = nodemailer.createTransport({
            host: 'smtp.strato.com',   // Strato SMTP server
            port: 465,                 // or 587
            secure: true,              // use SSL
            auth: {
                user: 'no-reply@unsigned-global.com', // Your Strato email address
                pass: 'jakdfjksdjkfsbfds121!!!11((',         // Your Strato email password
            },
        });

        // Sending email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

        return NextResponse.json({ status: "sent" });

    } catch (error) {
        console.log("Error sending email:", error);
        return NextResponse.json(
            {
                message: `Error sending email`,
                error,
                isSuccess: false,
            },
            { status: 500 }
        );
    }
}