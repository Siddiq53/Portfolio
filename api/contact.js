// Sample Vercel Serverless Function for contact form submissions.
// This is for demonstration only: it logs the payload.
// To wire this up to an email provider:
// 1. Add environment variables for your provider (e.g. RESEND_API_KEY, SENDGRID_API_KEY).
// 2. Use their SDK or fetch API to send the email inside the handler below.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    console.log("New contact message:", { name, email, message });

    // TODO: integrate with your email provider or notification service here.

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error in contact function:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}



