import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, location, service, details, botcheck } = body;

    // Honeypot spam protection
    if (botcheck) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "info@trafenix.com";
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    console.log("==========================================");
    console.log("📩 NEW CONTACT / PROJECT ENQUIRY RECEIVED");
    console.log("==========================================");
    console.log(`👤 Name:     ${name}`);
    console.log(`✉️ Email:    ${email}`);
    console.log(`🏢 Company:  ${company || "Not specified"}`);
    console.log(`📍 Location: ${location || "Not specified"}`);
    console.log(`🛠️ Service:  ${service || "Not sure"}`);
    console.log(`📝 Details:\n${details}`);
    console.log("==========================================");

    // Option A: Send via Resend if API key is provided
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Trafenix Website <onboarding@resend.dev>",
          to: recipientEmail,
          reply_to: email,
          subject: `New Project Enquiry: ${service || "Traffic Analysis"} - ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #dfe7ef; border-radius: 12px; background: #ffffff;">
              <h2 style="color: #081b2a; margin-top: 0; border-bottom: 2px solid #1677ff; padding-bottom: 10px;">New Project Enquiry</h2>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 8px 0;"><strong>Company:</strong> ${company || "Not provided"}</p>
              <p style="margin: 8px 0;"><strong>Location:</strong> ${location || "Not provided"}</p>
              <p style="margin: 8px 0;"><strong>Service Required:</strong> ${service || "General enquiry"}</p>
              <hr style="border: 0; border-top: 1px solid #dfe7ef; margin: 18px 0;" />
              <h3 style="color: #081b2a; margin-bottom: 8px;">Project Details:</h3>
              <div style="background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap; color: #334155;">
                ${details}
              </div>
              <p style="color: #64748b; font-size: 12px; margin-top: 24px; text-align: center;">Sent from Trafenix Website Contact Form</p>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { error: "Failed to deliver email via Resend." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Enquiry sent successfully!",
      });
    }

    // Option B: Send via Web3Forms if Access Key is configured
    if (web3FormsKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          subject: `New Project Enquiry: ${service || "Traffic Analysis"} - ${name}`,
          from_name: name,
          replyto: email,
          name,
          email,
          company: company || "N/A",
          location: location || "N/A",
          service: service || "N/A",
          message: details,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        console.warn("Web3Forms server notice:", data.message || data.error);
        // If Web3Forms free tier requires client-side submission, don't fail the internal logger
        return NextResponse.json({
          success: true,
          notice: "Form logged on server; client-side browser submission handles inbox delivery.",
        });
      }

      return NextResponse.json({
        success: true,
        message: "Enquiry sent successfully!",
      });
    }

    // Dev mode fallback when no external API key is set yet
    return NextResponse.json({
      success: true,
      isMock: true,
      message:
        "Enquiry captured successfully! (Local mode: logged in terminal. Add WEB3FORMS_ACCESS_KEY or RESEND_API_KEY in .env.local for live inbox forwarding).",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
