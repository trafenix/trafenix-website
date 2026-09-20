import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a traffic video analysis quote from Trafenix.",
};

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="shell">
            <span className="eyebrow">Start a project</span>
            <h1>Tell us what you need to measure.</h1>
            <p>
              Share the project details first. After review, we’ll provide a
              private Google Cloud Storage link for any footage.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="shell contact-grid">
            <div>
              <div className="contact-cards">
                <div className="contact-card">
                  <Mail color="#1677ff" />
                  <strong>Email</strong>
                  <a href="mailto:info@trafenix.com">info@trafenix.com</a>
                </div>
                <div className="contact-card">
                  <Phone color="#1677ff" />
                  <strong>Phone & priority projects</strong>
                  <a href="tel:+916382441730">+91 63824 41730</a>
                </div>
                <div className="contact-card">
                  <Clock3 color="#1677ff" />
                  <strong>Working hours</strong>
                  <span>Mon–Fri · 9:00 AM–5:00 PM IST</span>
                </div>
                <div className="contact-card">
                  <MapPin color="#1677ff" />
                  <strong>Global delivery</strong>
                  <span>High-precision traffic analytics & survey data</span>
                </div>
              </div>
              <p className="contact-note">
                We respond within 24 hours on working days. Qualifying standard
                projects can be delivered within 24 hours after scope approval
                and receipt of usable footage.
              </p>
            </div>

            <ContactForm
              services={services}
              accessKey={process.env.WEB3FORMS_ACCESS_KEY || "f5828772-a9b3-4e91-adb2-5f60e9657e28"}
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
