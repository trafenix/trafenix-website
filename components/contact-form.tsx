"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

interface ServiceOption {
  slug: string;
  title: string;
}

interface ContactFormProps {
  services: ServiceOption[];
  accessKey?: string;
}

export function ContactForm({ services, accessKey }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    service: "Not sure — please advise",
    details: "",
    botcheck: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMockMode, setIsMockMode] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      if (accessKey) {
        // Honeypot check
        if (formData.botcheck) {
          setStatus("success");
          return;
        }

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Project Enquiry: ${formData.service || "Traffic Analysis"} - ${formData.name}`,
            from_name: formData.name,
            replyto: formData.email,
            name: formData.name,
            email: formData.email,
            company: formData.company || "Not specified",
            location: formData.location || "Not specified",
            service: formData.service || "Not sure",
            message: formData.details,
            botcheck: formData.botcheck,
          }),
        });

        const data = await res.json();
        if (!data.success) {
          throw new Error(data.message || "Failed to send message. Please check your details and try again.");
        }

        // Also ping internal API in background for terminal logging
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }).catch(() => {});

        setIsMockMode(false);
        setStatus("success");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setIsMockMode(Boolean(data.isMock));
      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message || "Failed to connect to the server. Please try again or email info@trafenix.com directly."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      location: "",
      service: "Not sure — please advise",
      details: "",
      botcheck: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div className="form-feedback-card success-card">
        <div className="feedback-icon-wrap success-icon">
          <CheckCircle2 size={44} />
        </div>
        <h3>Enquiry Sent Successfully!</h3>
        <p>
          Thank you, <strong>{formData.name}</strong>. We have received your project details and will review them shortly.
        </p>
        <div className="feedback-meta">
          <span>We will respond to <strong>{formData.email}</strong> within 24 hours on working days.</span>
        </div>
        {isMockMode && (
          <div className="feedback-note dev-note">
            ℹ️ <em>Local test mode: Enquiry details logged in terminal. To receive live emails, add your <code>WEB3FORMS_ACCESS_KEY</code> or <code>RESEND_API_KEY</code> in <code>.env.local</code>.</em>
          </div>
        )}
        <button type="button" className="button" onClick={handleReset} style={{ marginTop: "16px" }}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      {/* Honeypot field for bot spam */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        checked={Boolean(formData.botcheck)}
        onChange={(e) => setFormData((prev) => ({ ...prev, botcheck: e.target.checked ? "bot" : "" }))}
        tabIndex={-1}
        autoComplete="off"
      />

      {status === "error" && (
        <div className="form-error-banner full">
          <AlertCircle size={20} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="field">
        <label htmlFor="name">Full name *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="e.g. John Smith"
          disabled={status === "submitting"}
        />
      </div>

      <div className="field">
        <label htmlFor="email">Work email *</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="name@company.com"
          disabled={status === "submitting"}
        />
      </div>

      <div className="field">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company or Local Authority"
          disabled={status === "submitting"}
        />
      </div>

      <div className="field">
        <label htmlFor="location">Project location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g. London, UK / New York, US"
          disabled={status === "submitting"}
        />
      </div>

      <div className="field full">
        <label htmlFor="service">Service required</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          disabled={status === "submitting"}
        >
          <option>Not sure — please advise</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div className="field full">
        <label htmlFor="details">Project details *</label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          required
          placeholder="Locations, camera count, footage duration, required outputs, and deadlines…"
          disabled={status === "submitting"}
        ></textarea>
      </div>

      <p className="form-note">
        Do not attach sensitive footage here. Trafenix will provide a private, time-limited upload link after reviewing your enquiry. Standard retention is 30 days after final delivery.
      </p>

      <div className="form-actions full">
        <button
          className="button"
          type="submit"
          disabled={status === "submitting"}
          style={{ width: "100%", justifyContent: "center" }}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Sending enquiry...
            </>
          ) : (
            <>
              <Send size={18} />
              Send project enquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
