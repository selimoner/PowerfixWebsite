import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { z } from "zod";
import rateLimit from "express-rate-limit";

dotenv.config();

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  company: z.string().optional(),
});

const contactLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many requests, please try again later." },
});

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", contactLimiter, async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      if (data.company && data.company.trim() !== "") {
        return res.status(400).json({ success: false, message: "Spam detected." });
      }

      await transporter.sendMail({
        from: `"Website Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_TO,
        subject: `New Contact from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <p><strong>Message:</strong><br/>${data.message}</p>
        `,
      });

      res.json({ success: true, message: "Thank you for contacting us!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, errors: error.errors });
      }

      console.error("Email error:", error);
      res.status(500).json({ success: false, message: "Failed to send email. Try again later." });
    }
  });

  return createServer(app);
}