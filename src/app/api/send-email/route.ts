import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function getEnvVariable(key: string): string | undefined {
  if (process.env[key] && !process.env[key]?.startsWith("your_")) {
    return process.env[key];
  }
  try {
    const envPath = path.resolve(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      const match = content.match(new RegExp(`^${key}=(.*)$`, "m"));
      if (match && match[1]) {
        return match[1].trim();
      }
    }
  } catch (e) {}
  return undefined;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      type = "General Inquiry",
      name = "Anonymous",
      contact = "Not provided",
      topic = "General Inquiry",
      message = "",
      college = "",
      duration = "",
      domain = "",
    } = body;

    const apiKey = getEnvVariable("BREVO_API_KEY");
    const senderEmail = getEnvVariable("BREVO_SENDER_EMAIL") || "sapnassm62062@gmail.com";
    const recipientEmail = getEnvVariable("BREVO_RECIPIENT_EMAIL") || "nexuslab27@gmail.com";

    if (!apiKey || apiKey.startsWith("your_")) {
      console.warn(
        "⚠️ [Brevo API] BREVO_API_KEY is not set or invalid in .env.local."
      );
      return NextResponse.json(
        {
          success: false,
          error: "Brevo API key is not configured in .env.local",
          fallback: true,
        },
        { status: 200 }
      );
    }

    const emailSubject = `🚀 [NexusLabs] New ${type}: ${name} (${topic || domain || "Inquiry"})`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b0f19; color: #f3f4f6; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid #374151; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
            .header { background: linear-gradient(135deg, #06b6d4, #8b5cf6); padding: 24px; text-align: center; }
            .header h1 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
            .header p { margin: 6px 0 0 0; color: #e0e7ff; font-size: 13px; }
            .content { padding: 24px; }
            .badge { display: inline-block; padding: 4px 12px; background: rgba(6, 182, 212, 0.15); color: #22d3ee; border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 999px; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 16px; }
            .row { display: flex; justify-content: space-between; border-bottom: 1px solid #1f2937; padding: 10px 0; font-size: 14px; }
            .label { color: #9ca3af; font-weight: 600; width: 35%; }
            .value { color: #ffffff; font-weight: 500; width: 65%; word-break: break-word; }
            .message-box { background: #1f2937; border-radius: 10px; padding: 14px; margin-top: 16px; border-left: 4px solid #06b6d4; font-size: 14px; line-height: 1.5; color: #e5e7eb; }
            .footer { padding: 16px 24px; background: #0b0f19; border-top: 1px solid #1f2937; text-align: center; font-size: 12px; color: #6b7280; }
            .action-btn { display: inline-block; margin-top: 16px; padding: 10px 20px; background: #10b981; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 8px; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>NEXUSLABS INQUIRY ALERT</h1>
              <p>Submitted directly from your website</p>
            </div>
            <div class="content">
              <span class="badge">${type}</span>
              
              <div class="row">
                <span class="label">Full Name:</span>
                <span class="value"><strong>${name}</strong></span>
              </div>
              
              <div class="row">
                <span class="label">Contact / WhatsApp:</span>
                <span class="value"><a href="tel:${contact}" style="color: #38bdf8;">${contact}</a></span>
              </div>
              
              <div class="row">
                <span class="label">Topic / Service:</span>
                <span class="value">${topic || domain || "General Service"}</span>
              </div>

              ${college ? `
              <div class="row">
                <span class="label">College / Year:</span>
                <span class="value">${college}</span>
              </div>` : ""}

              ${duration ? `
              <div class="row">
                <span class="label">Duration / Mode:</span>
                <span class="value">${duration}</span>
              </div>` : ""}

              ${message ? `
              <div style="margin-top: 14px;">
                <span class="label" style="display: block; margin-bottom: 6px;">Client Requirements / Message:</span>
                <div class="message-box">${message.replace(/\n/g, "<br/>")}</div>
              </div>` : ""}

              <div style="text-align: center; margin-top: 20px;">
                <a href="https://wa.me/${contact.replace(/[^0-9]/g, "")}" class="action-btn">
                  💬 Reply to ${name} on WhatsApp
                </a>
              </div>
            </div>
            <div class="footer">
              Sent to nexuslab27@gmail.com via Brevo Transactional Email Engine • NexusLabs
            </div>
          </div>
        </body>
      </html>
    `;

    // Brevo API call
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "NexusLabs Inquiry Alert",
          email: senderEmail,
        },
        to: [
          {
            email: recipientEmail,
            name: "NexusLabs Admin",
          },
          {
            email: "sapnassm62062@gmail.com",
            name: "Sapna",
          },
        ],
        subject: emailSubject,
        htmlContent: htmlContent,
      }),
    });

    const data = await brevoResponse.json();

    if (!brevoResponse.ok) {
      console.error("❌ [Brevo API Error]", data);
      return NextResponse.json(
        {
          success: false,
          error: data.message || "Failed to send email via Brevo",
        },
        { status: brevoResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data.messageId,
    });
  } catch (error: any) {
    console.error("❌ [API route error]", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
