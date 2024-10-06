import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { email, } = await req.json();


    // Create mail options with dynamic values
    const mailOptions = {
        from: 'atifhameed2002@gmail.com',
        to: `${email}`,
        subject: 'Verify Your Email Address',
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h2 style="color: #333;">Email Verification</h2>
            <p>Hi there,</p>
            <p>Thank you for signing up! Please verify your email address to complete your registration.</p>
            <p>Click the button below to verify your email address:</p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="http://localhost:3000/signUp/create-password?email=${encodeURIComponent(email)}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Verify Email</a>
            </div>
            <p>If the button doesn't work, you can also click the link below:</p>
            <p><a href="http://localhost:3000/signUp/create-password?email=${encodeURIComponent(email)}">Verify Email</a></p>
            <p>If you didn't create an account, you can safely ignore this email.</p>
            <p>Best regards,</p>
            <p>Unsigned</p>
        </div>
        `,
    };

    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'atifhameed11312@gmail.com',
                pass: 'vsmn udhp fblt mmdr',
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