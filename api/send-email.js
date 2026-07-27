import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
//Email thing
const emailHTML = `
<!DOCTYPE html>
<html>
<head>
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
}

p {
    font-size: 16px;
    line-height: 1.5;
}
</style>
</head>

<body>
<div class="container">
    <h1>Thanks for signing up!</h1>

    <p>
        Welcome to SplitIt. We're excited to have you with us.
        You'll receive updates and important information soon.
    </p>
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