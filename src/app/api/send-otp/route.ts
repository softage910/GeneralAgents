import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log("API called"); // Debugging

  try {
    const { email } = await req.json();
    if (!email) {
      console.error("Missing email in request");
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", otp);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "quiz.verse@softage.ai", // Check if defined
        pass: "snyt ropv qvnb gjvy",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "GeneralAgent - Your OTP Code",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="" alt="GeneralAgent" style="max-width: 150px;"/>
          </div>
          <h2 style="color:red; text-align: center;">Your OTP Code</h2>
          <p>Hello,</p>
          <p>Thank you for using <strong>GeneralAgent</strong>. Please use the following One-Time Password (OTP) to complete your verification:</p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; color:red; border: 1px dashed red; padding: 10px 20px; border-radius: 8px; background: #f9f9f9;">${otp}</span>
          </div>
          <p>This OTP is valid for the next <strong>5 minutes</strong>.</p>
          <p>If you did not request this, please ignore this email or contact our support team at <a href="mailto:support@GeneralAgent.ai" style="color:red;">support@GeneralAgent.ai</a>.</p>
          <p style="margin-top: 30px; text-align: center; font-size: 12px; color: #777;">© 2025 GeneralAgent AI. All rights reserved.</p>
        </div>
      `,
    };

    console.log("Sending email to:", email);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return NextResponse.json({ message: "OTP sent successfully", otp }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send OTP" }, { status: 500 });
  }
}
