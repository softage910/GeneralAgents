import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "saajid@generalagents.com", // Sender email
                pass: "scvo stsu qyov hmlq"
            },
        });

        await transporter.sendMail({
            from: "saajid@generalagents.com",
            to: email,
            subject: "You're Invited - GeneralAgents",
            html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    
    <h2 style="color:green; text-align: center;">You're Invited!</h2>
    <p>Hello,</p>
    <p>You have been invited to join the <strong>General Agents Training Website</strong>. Click the link below to Login:</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <a href="https://generalagents.training" 
         style="background: green; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Click Here to Login</a>
    </div>
    
    <p>If you did not request this invitation, please ignore this email.</p>
    
    <p style="margin-top: 30px; text-align: center; font-size: 12px; color: #777;">© 2025 GeneralAgents. All rights reserved.</p>
  </div>
            `,
        });

        return NextResponse.json({ message: "Invitation email sent successfully!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to send invitation email", error }, { status: 500 });
    }
}