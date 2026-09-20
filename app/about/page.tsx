import type { Metadata } from "next";
import { BrainCircuit, CheckCircle2, UsersRound } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Trafenix Technologies and learn how we turn traffic footage into quality-checked data.",
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="shell">
            <span className="eyebrow">About Trafenix</span>
            <h1>Your Footage. Our Analysis. Actionable Insights.</h1>
            <p>
              Founded in 2025, Trafenix Technologies is a specialist traffic video analytics company operating from Bengaluru, India.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="shell">
            <div className="about-values">
              <article className="value-card">
                <BrainCircuit color="#1677ff" />
                <h3>Flexible processing</h3>
                <p>
                  AI-assisted, fully manual or hybrid delivery selected around the footage and assurance need.
                </p>
              </article>
              <article className="value-card">
                <CheckCircle2 color="#00c2d7" />
                <h3>Controlled quality</h3>
                <p>
                  Project-specific validation, review of exceptions and transparent delivery notes.
                </p>
              </article>
              <article className="value-card">
                <UsersRound color="#22c55e" />
                <h3>Human accountability</h3>
                <p>
                  A named team manages client communication, operations and technology.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section soft-section">
          <div className="shell">
            <div className="section-head">
              <div>
                <span className="eyebrow dark">Leadership</span>
                <h2>
                  Three disciplines.
                  <br />
                  One delivery team.
                </h2>
              </div>
            </div>
            <div className="team-grid">
              <article className="team-card">
                <h3>Prasanth M</h3>
                <span>Client Management</span>
                <a href="mailto:prasanth@trafenix.com">prasanth@trafenix.com</a>
              </article>
              <article className="team-card">
                <h3>Vijayakumar M</h3>
                <span>Operations Management</span>
                <a href="mailto:vijayakumar@trafenix.com">vijayakumar@trafenix.com</a>
              </article>
              <article className="team-card">
                <h3>Vishnu S</h3>
                <span>Technical Management</span>
                <a href="mailto:vishnu@trafenix.com">vishnu@trafenix.com</a>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

