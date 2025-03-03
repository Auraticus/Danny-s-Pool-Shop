const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); // Import nodemailer

// Login endpoint
router.post('/send', (req, res) => {
    try {   
        const { name, email, message} = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Common host for Office 365 Exchange
            secure: false, // Use false for STARTTLS
            auth: {
                user: process.env.EMAIL_USER, // Your Exchange email
                pass: process.env.EMAIL_PASS  // Your Exchange password
            },
            tls: {
                rejectUnauthorized: false // Allow self-signed certificates if necessary
            }
        });
    
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Website Query : ${name}`,
            html: `
                <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
                        <div style="text-align: center;">
                            <img src="https://zeneon.devcrafthouse.co.za/assets/Zeneon_Logo__1_-removebg-preview-ViBmY-g6.png" alt="Company Logo" style="max-width: 150px; margin-bottom: 20px;">
                        </div>
                        <h2 style="color: #333;">Welcome to Our Service!</h2>
                        <p>Dear User,</p>
                        <p>Thank you for registering with us. Please activate your account by clicking the link below:</p>
                        <p style="text-align: center;">
                            <a href="www.google.com" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px;">Activate Account</a>
                        </p>
                        <p>If you did not register for this account, please ignore this email.</p>
                        <p>Best regards,<br>Zeneon Team</p>

                        <p>${message}
                    </div>
                </body>
                </html>
            `
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.error('Error sending email:', error);
            }
            console.log('Activation email sent:', info.response);
        });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;