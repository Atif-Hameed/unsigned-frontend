import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { email, } = await req.json();


    // Create mail options with dynamic values
    const mailOptions = {
        from: 'atifhameed2002@gmail.com',
        to: `${email}`,
        subject: 'Password Reset Request',
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h2 style="color: #333;">Password Reset Request</h2>
            <p>Hi there,</p>
            <p>We received a request to reset your password. You can reset your password by clicking the button below:</p>
            <p>Click the button below to verify your email address:</p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="http://localhost:3000/reset-password?email=${encodeURIComponent(email)}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">Reset Password</a>
            </div>
            <p>If the button doesn't work, you can also click the link below:</p>
            <p><a href="http://localhost:3000/reset-password?email=${encodeURIComponent(email)}">Reset Password</a></p>
            <p>If you did not request a password reset, you can safely ignore this email.</p>
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
        console.log("Reset Password Link sent successfully");

        return NextResponse.json({ status: "sent" });

    } catch (error) {
        console.log("Error sending Reset Password Link:", error);
        return NextResponse.json(
            {
                message: `Error sending Reset Password Link`,
                error,
                isSuccess: false,
            },
            { status: 500 }
        );
    }
}