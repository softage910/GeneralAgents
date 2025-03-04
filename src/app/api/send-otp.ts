import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("API called"); // Debugging

  if (req.method !== "POST") {
    console.error("Invalid method:", req.method);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;
  if (!email) {
    console.error("Missing email in request");
    return res.status(400).json({ message: "Email is required" });
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("Generated OTP:", otp);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "quiz.verse@softage.ai", // Check if defined
        pass: "snyt ropv qvnb gjvy",
      },
    });

    const mailOptions = {
      from: "quiz.verse@softage.ai",
      to: email,
      subject: "Softage AI - Your OTP Code",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="" alt="Softage AI" style="max-width: 150px;"/>
          </div>
          <h2 style="color:red; text-align: center;">Your OTP Code</h2>
          <p>Hello,</p>
          <p>Thank you for using <strong>Softage AI</strong>. Please use the following One-Time Password (OTP) to complete your verification:</p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; color:red; border: 1px dashed red; padding: 10px 20px; border-radius: 8px; background: #f9f9f9;">${otp}</span>
          </div>
          <p>This OTP is valid for the next <strong>5 minutes</strong>.</p>
          <p>If you did not request this, please ignore this email or contact our support team at <a href="mailto:support@softage.ai" style="color:red;">support@softage.ai</a>.</p>
          <p style="margin-top: 30px; text-align: center; font-size: 12px; color: #777;">© 2025 Softage AI. All rights reserved.</p>
        </div>
      `,
    };
    console.log("Sending email to:", email);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return res.status(200).json({ message: "OTP sent successfully", otp });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send OTP" });
  }
}
