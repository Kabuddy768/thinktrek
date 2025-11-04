import nodemailer from 'nodemailer';
import { env } from '../config/env';

// Create reusable transporter
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASS,
        },
    });
};

// Send verification email
export const sendVerificationEmail = async (
    customerEmail: string, 
    customerName: string,
    verificationCode: string
): Promise<boolean> => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: {
                name: 'Thinktrek Business Solutions',
                address: env.EMAIL_USER
            },
            to: customerEmail,
            subject: 'Verify Your Email - Thinktrek Business Solutions 💼',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1>💼 Email Verification</h1>
                        <p>Thinktrek Business Solutions</p>
                    </div>
                    
                    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                        <p><strong>Hello ${customerName}!</strong></p>
                        <p>Thank you for registering with Thinktrek Business Solutions. To complete your registration, please verify your email address.</p>
                        
                        <div style="background: white; padding: 20px; border-radius: 5px; text-align: center; margin: 20px 0;">
                            <p><strong>Your verification code is:</strong></p>
                            <h2 style="color: #2563eb; font-size: 32px; letter-spacing: 5px; margin: 10px 0;">${verificationCode}</h2>
                        </div>
                        
                        <p>Please enter this code on the verification page to activate your account.</p>
                        <p>If you didn't create an account, please ignore this email.</p>
                        <p>Best regards,<br><strong>The Thinktrek Business Solutions Team</strong></p>
                    </div>
                </div>
            `,
            text: `Hello ${customerName}! Your verification code is: ${verificationCode}. Please enter this code to verify your email address. If you didn't create an account, please ignore this email.`
        };

        await transporter.sendMail(mailOptions);
        return true;

    } catch (error: any) {
        console.error('Failed to send verification email');
        return false;
    }
};

// Send welcome email
export const sendWelcomeEmail = async (
    customerEmail: string, 
    customerName: string
): Promise<boolean> => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: {
                name: 'Thinktrek Business Solutions',
                address: env.EMAIL_USER
            },
            to: customerEmail,
            subject: 'Welcome to Thinktrek Business Solutions 💼',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1>Welcome to Thinktrek Business Solutions!</h1>
                        <p>Your journey starts here</p>
                    </div>
                    
                    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                        <p><strong>Hello ${customerName}!</strong></p>
                        <p>Thank you for joining Thinktrek Business Solutions! We're excited to help you with your business needs.</p>
                        <p>Your email has been verified and you can now log in to your account and start exploring our available solutions.</p>
                        <p>Best regards,<br><strong>The Thinktrek Business Solutions Team</strong></p>
                    </div>
                </div>
            `,
            text: `Welcome ${customerName}! Thank you for joining Thinktrek Business Solutions! Your email has been verified and you can now log in and start exploring our solutions.`
        };

        await transporter.sendMail(mailOptions);
        return true;

    } catch (error: any) {
        console.error('Failed to send welcome email');
        return false;
    }
};