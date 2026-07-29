import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
//Email thing
const emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thanks for signing up</title>
<style>
    body {
        margin: 0;
        padding: 0;
        background-color: #f0f1f5;
        font-family: Arial, Helvetica, sans-serif;
    }

    .container {
        max-width: 600px;
        margin: 40px auto;
        background: #e1e6e8;
        padding: 40px 30px;
        text-align: center;
        border-radius: 12px;
        color: #05375a;
    }

    h1 {
        font-size: 32px;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
        line-height: 1.5;
    }

    .button {
        display: inline-block;
        margin-top: 25px;
        padding: 14px 30px;
        background: #8c7b44;
        color: white;
        text-decoration: none;
        border-radius: 30px;
        font-size: 17px;
    }
</style>
</head>

<body>
    <div class="container">
        <h1>Thanks for signing up!</h1>

        <p>
            Welcome to SendIt. We're excited to have you with us.
            You'll start receiving updates and important information soon.
        </p>

        <a class="button" href="https://splitit-hack.vercel.app/app.html">
            Get Started
        </a>
        <br>
        <br>
        <a href="mailto:elipseday+sendit@gmail.com?subject=I%20would%20like%20to%20unsubscribe&body=Hello%2C%0A%0AI%20would%20like%20to%20unsubscribe%20from%20mailing%20list.%20The%20email%20I%20would%20like%20to%20remove%20is%20%3Cyour-email-here%3E%2C%20because%20%3Creason-optional%3E%0A%0AThanks%0A%3CYour%20name%3E">Unsubscribe</a>
    </div>
</body>
</html>
`;
//email thing ends

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email } = req.body;

try {
    const { data, error } = await resend.emails.send({
        from: "SplitIt <onboarding@resend.dev>",
        to: email,
        subject: "Thanks for signing up for emails!",
        html: emailHTML,
    });

    if (error) {
        console.error(error);
    } else {
        console.log("Email sent:", data);
    }

} catch (err) {
    console.error(err);
}}