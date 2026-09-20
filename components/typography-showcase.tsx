"use client";

import React, { useState } from "react";
import { Type, Check, Copy } from "lucide-react";

export function TypographyShowcase() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyCss = (cssSnippet: string, tokenName: string) => {
    navigator.clipboard.writeText(cssSnippet);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const scaleItems = [
    {
      id: "h1",
      tag: "Hero Title",
      level: "H1 / Display",
      size: "clamp(36px, 4.8vw, 64px)",
      weight: "800 ExtraBold",
      tracking: "-0.02em",
      css: "font-size: clamp(36px, 4.8vw, 64px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em;",
      renderSpecimen: () => (
        <h1 className="scale-preview-h1">
          Your Footage. Our Analysis. <span className="text-gradient-blue">Actionable Insights.</span>
        </h1>
      ),
    },
    {
      id: "h2",
      tag: "Section Head",
      level: "H2 / Section",
      size: "clamp(28px, 3.4vw, 44px)",
      weight: "800 ExtraBold",
      tracking: "-0.015em",
      css: "font-size: clamp(28px, 3.4vw, 44px); font-weight: 800; line-height: 1.15; letter-spacing: -0.015em;",
      renderSpecimen: () => (
        <h2 className="scale-preview-h2">
          Three disciplines. One delivery team.
        </h2>
      ),
    },
    {
      id: "h3",
      tag: "Card Heading",
      level: "H3 / Card Title",
      size: "22px – 24px",
      weight: "750 Bold",
      tracking: "Normal",
      css: "font-size: 23px; font-weight: 750; line-height: 1.25;",
      renderSpecimen: () => (
        <h3 className="scale-preview-h3">
          01 · Traffic Turning Movement Counts (TMC)
        </h3>
      ),
    },
    {
      id: "eyebrow",
      tag: "Eyebrow Tag",
      level: "Overline / Pill",
      size: "11px – 12.5px",
      weight: "800 ExtraBold",
      tracking: "+0.12em (Caps)",
      css: "font-size: 12px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;",
      renderSpecimen: () => (
        <span className="scale-preview-eyebrow">
          TRAFFIC VIDEO INTELLIGENCE &amp; SURVEYS
        </span>
      ),
    },
    {
      id: "lead",
      tag: "Lead Paragraph",
      level: "Body / Large",
      size: "16.5px – 18px",
      weight: "500 Medium",
      tracking: "Normal",
      css: "font-size: 17.5px; font-weight: 500; line-height: 1.55; color: #334155;",
      renderSpecimen: () => (
        <p className="scale-preview-lead">
          Founded in 2025, Trafenix Technologies is a specialist traffic video analytics
          company operating from Bengaluru, India.
        </p>
      ),
    },
    {
      id: "body",
      tag: "Standard Body",
      level: "Body / Base",
      size: "14px – 15px",
      weight: "400 Regular",
      tracking: "Normal",
      css: "font-size: 14.5px; font-weight: 400; line-height: 1.55; color: #64748b;",
      renderSpecimen: () => (
        <p className="scale-preview-body">
          AI-assisted, fully manual or hybrid delivery selected around the footage and assurance need.
          Project-specific validation with 90-day encrypted storage retention.
        </p>
      ),
    },
    {
      id: "mono",
      tag: "Telemetry Metric",
      level: "Mono / Stats",
      size: "24px – 34px",
      weight: "800 Mono",
      tracking: "-0.01em",
      css: "font-family: 'JetBrains Mono', monospace; font-size: 26px; font-weight: 800;",
      renderSpecimen: () => (
        <div className="scale-preview-telemetry font-mono">
          <span className="telemetry-chip">2,847 veh</span>
          <span className="telemetry-chip">18.4 min</span>
          <span className="telemetry-chip green-stat">90d Storage</span>
        </div>
      ),
    },
  ];

  return (
    <div className="typo-showcase-container">
      {/* Header section with clean alignment */}
      <div className="typo-showcase-header">
        <div className="typo-header-left">
          <span className="typo-eyebrow">TYPOGRAPHY SYSTEM · 1X</span>
          <h2 className="typo-main-title">Typography @1x</h2>
        </div>
        <div className="typo-spec-pill">
          <Type size={14} color="#1677ff" />
          <span>Design Tokens &amp; Type Scale</span>
        </div>
      </div>

      {/* 3 Font Family Cards (Uniform Height & Alignment) */}
      <div className="typo-family-grid">
        {/* Card 1: Manrope */}
        <div className="typo-family-card">
          <div className="family-card-head">
            <span className="family-badge primary-badge">Headings &amp; Display</span>
            <span className="family-role">Primary Typeface</span>
          </div>
          <div className="family-glyph-row">
            <span className="family-big-glyph font-manrope">Aa</span>
            <div className="family-meta">
              <h3 className="family-name">Manrope</h3>
              <span className="family-weights">Weights: 600 · 700 · 800 · 900</span>
            </div>
          </div>
          <div className="family-content-box">
            <p className="family-alphabet font-manrope">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789 (!@#$%^&amp;*+=)
            </p>
          </div>
          <div className="family-card-footer">
            <code>font-family: &apos;Manrope&apos;, sans-serif;</code>
          </div>
        </div>

        {/* Card 2: Inter */}
        <div className="typo-family-card">
          <div className="family-card-head">
            <span className="family-badge body-badge">Body &amp; System UI</span>
            <span className="family-role">Interface Typeface</span>
          </div>
          <div className="family-glyph-row">
            <span className="family-big-glyph font-inter">Aa</span>
            <div className="family-meta">
              <h3 className="family-name">Inter</h3>
              <span className="family-weights">Weights: 400 · 500 · 600 · 700</span>
            </div>
          </div>
          <div className="family-content-box">
            <p className="family-sample font-inter">
              Turning client video into certified turning counts, vehicle classifications,
              and surrogate safety surveys with AI speed and human verification.
            </p>
          </div>
          <div className="family-card-footer">
            <code>font-family: &apos;Inter&apos;, sans-serif;</code>
          </div>
        </div>

        {/* Card 3: JetBrains Mono */}
        <div className="typo-family-card">
          <div className="family-card-head">
            <span className="family-badge mono-badge">Telemetry &amp; Code</span>
            <span className="family-role">Monospace Typeface</span>
          </div>
          <div className="family-glyph-row">
            <span className="family-big-glyph font-mono">01</span>
            <div className="family-meta">
              <h3 className="family-name">JetBrains Mono</h3>
              <span className="family-weights">Weights: 500 · 700 · 800</span>
            </div>
          </div>
          <div className="family-content-box">
            <div className="family-code-sample font-mono">
              <span>2,847 veh/h · 18.4 min</span>
              <span>QA Precision: 99.2%</span>
              <span>LAT 12.9716° N</span>
            </div>
          </div>
          <div className="family-card-footer">
            <code>font-family: &apos;JetBrains Mono&apos;, monospace;</code>
          </div>
        </div>
      </div>

      {/* Scale & Hierarchy Table with Table Headers & Left-Guide Alignment */}
      <div className="typo-scale-section">
        {/* Table Title Bar */}
        <div className="scale-section-head">
          <div>
            <span className="ui-block-label" style={{ marginBottom: "2px" }}>
              TYPE SCALE &amp; HIERARCHY MATRIX
            </span>
            <span className="scale-subnote">
              Calibrated optical sizes and proportional line-heights
            </span>
          </div>
          <span className="scale-subnote">Click button to copy CSS snippet</span>
        </div>

        {/* Structured Column Header Row */}
        <div className="typo-table-header-row">
          <div className="th-col th-meta">HIERARCHY &amp; SPECS</div>
          <div className="th-col th-specimen">VISUAL SPECIMEN</div>
          <div className="th-col th-action">CSS TOKEN</div>
        </div>

        {/* Table Data Rows */}
        <div className="typo-scale-table">
          {scaleItems.map((item) => (
            <div key={item.id} className="typo-scale-row">
              {/* Column 1: Meta & Specs */}
              <div className="scale-meta-col">
                <div className="scale-tag-pill">{item.tag}</div>
                <span className="scale-level-text">{item.level}</span>
                <div className="scale-specs-badge">
                  <span>{item.size}</span>
                  <span className="specs-divider">•</span>
                  <span>{item.weight}</span>
                </div>
              </div>

              {/* Column 2: Specimen (Aligned to Left Guide) */}
              <div className="scale-preview-col">
                {item.renderSpecimen()}
              </div>

              {/* Column 3: Action / Copy */}
              <div className="scale-action-col">
                <button
                  type="button"
                  onClick={() => copyCss(item.css, item.id)}
                  className={`copy-css-btn ${copiedToken === item.id ? "copied" : ""}`}
                  title="Copy CSS rules"
                >
                  {copiedToken === item.id ? (
                    <>
                      <Check size={13} color="#22c55e" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy CSS</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
