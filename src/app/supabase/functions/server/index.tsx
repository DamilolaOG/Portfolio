import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-29fa0f5f/health", (c) => {
  return c.json({ status: "ok" });
});

// Debug endpoint to check API key configuration
app.get("/make-server-29fa0f5f/debug-config", (c) => {
  const resendApiKeyRaw = Deno.env.get("RESEND_API_KEY");
  
  if (!resendApiKeyRaw) {
    return c.json({ 
      configured: false,
      message: "RESEND_API_KEY environment variable is not set"
    });
  }
  
  const resendApiKey = resendApiKeyRaw.trim();
  const keyPrefix = resendApiKey.substring(0, 4);
  const keyLength = resendApiKey.length;
  const startsWithRe = resendApiKey.startsWith('re_');
  
  return c.json({ 
    configured: true,
    keyPrefix,
    keyLength,
    startsWithRe,
    isValid: startsWithRe && keyLength > 10,
    message: startsWithRe 
      ? "API key format looks correct" 
      : `API key does not start with 're_' - it starts with '${keyPrefix}'`
  });
});

// Send email endpoint
app.post("/make-server-29fa0f5f/send-email", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Get Resend API key from environment and trim any whitespace
    const resendApiKeyRaw = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKeyRaw) {
      console.log("Email sending error: RESEND_API_KEY environment variable not set");
      return c.json({ 
        error: "Email service not configured",
        message: "Please add your Resend API key to the environment variables"
      }, 500);
    }

    const resendApiKey = resendApiKeyRaw.trim();

    // Log API key format for debugging (without revealing the full key)
    const keyPrefix = resendApiKey.substring(0, 4);
    const keyLength = resendApiKey.length;
    const hasWhitespace = resendApiKeyRaw !== resendApiKey;
    console.log(`API key detected: starts with "${keyPrefix}", length: ${keyLength} characters${hasWhitespace ? ' (whitespace trimmed)' : ''}`);
    
    // Validate API key format
    if (!resendApiKey.startsWith('re_')) {
      console.log(`ERROR: API key does not start with 're_' - it starts with '${keyPrefix}'`);
      return c.json({ 
        error: "Invalid API key format",
        message: "Resend API keys must start with 're_'. Please check your API key."
      }, 500);
    }
    
    console.log(`Attempting to send email from ${name} (${email}) with subject: ${subject}`);

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: "damilolaodulesi@gmail.com",
        reply_to: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.log(`Resend API error while sending contact form email: ${JSON.stringify(resendData)}`);
      return c.json({ error: "Failed to send email", details: resendData }, 500);
    }

    console.log(`Email sent successfully to damilolaodulesi@gmail.com from ${name} (${email})`);
    return c.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log(`Error in send-email endpoint: ${error}`);
    return c.json({ error: "Internal server error", details: String(error) }, 500);
  }
});

Deno.serve(app.fetch);