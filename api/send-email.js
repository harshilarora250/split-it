import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email } = req.body;

    try {
        const { data, error } = await resend.emails.send({
            from: "SplitIt <onboarding@resend.dev>", // change later to your verified domain
            to: email,
            subject: "Verify your email",
            html: "<strong>Click here to verify!</strong>",
        });

        if (error) {
            return res.status(500).json(error);
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}