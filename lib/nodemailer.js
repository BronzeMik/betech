import nodemailer from "nodemailer";

// Nodemailer Setup
 const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    port: process.env.NEXT_PUBLIC_EMAIL_PORT,
    secure: process.env.NEXT_PUBLIC_EMAIL_SECURE === "true",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });
  
  export default transporter
