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

  return (
    <div className="typo-showcase-container">
      {/* Section Header */}
      <div className="typo-showcase-header">
        <div className="typo-header-left">
          <span className="typo-eyebrow">TYPOGRAPHY SYSTEM · 1X</span>
          <h2 className="typo-main-title">Typography @1x</h2>
        </div>
        <div className="typo-spec-pill">
          <Type size={14} color="#1677ff" />
          <span>Scale &amp; Hierarchy Guidelines</span>
        </div>
      </div>

      {/* 3 Font Family Cards */}
      <div className="typo-family-grid">
        {/* Card 1: Manrope (Headings & Display) */}
        <div className="typo-family-card">
          <div className="family-card-head">
            <div className="family-badge primary-badge">Display &amp; Headings</div>
            <span className="family-role">Primary Typeface</span>
          </div>
          <div className="family-glyph-row">
            <span className="family-big-glyph font-manrope">Aa</span>
            <div className="family-meta">
              <h3 className="family-name">Manrope</h3>
              <span className="family-weights">Weights: 600 · 700 · 800 · 900</span>
            </div>
          </div>
          <p className="family-alphabet font-manrope">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789 (!@#$%^&amp;*+=)
          </p>
          <div className="family-card-footer">
            <code>font-family: &apos;Manrope&apos;, sans-serif;</code>
          </div>
        </div>

        {/* Card 2: Inter (Body & UI Elements) */}
        <div className="typo-family-card">
          <div className="family-card-head">
            <div className="family-badge body-badge">Body &amp; System UI</div>
            <span className="family-role">Interface Typeface</span>
          </div>
          <div className="family-glyph-row">
            <span className="family-big-glyph font-inter">Aa</span>
            <div className="family-meta">
              <h3 className="family-name">Inter</h3>
              <span className="family-weights">Weights: 400 · 500 · 600 · 700</span>
            </div>
          </div>
          <p className="family-sample font-inter">
            Turning client video into certified turning counts, vehicle classifications,
            and safety surveys with AI speed and human verification.
          </p>
          <div className="family-card-footer">
            <code>font-family: &apos;Inter&apos;, sans-serif;</code>
          </div>
        </div>

        {/* Card 3: JetBrains Mono (Telemetry & Metrics) */}
        <div className="typo-family-card">
          <div className="family-card-head">
            <div className="family-badge mono-badge">Telemetry &amp; Code</div>
            <span className="family-role">Monospace Typeface</span>
          </div>
          <div className="family-glyph-row">
            <span className="family-big-glyph font-mono">01</span>
            <div className="family-meta">
              <h3 className="family-name">JetBrains Mono</h3>
              <span className="family-weights">Weights: 500 · 700 · 800</span>
            </div>
          </div>
          <div className="family-code-sample font-mono">
            <span>2,847 veh/h · 18.4 min</span>
            <span>QA Precision: 99.2%</span>
            <span>LAT 12.9716° N</span>
          </div>
          <div className="family-card-footer">
            <code>font-family: &apos;JetBrains Mono&apos;, monospace;</code>
          </div>
        </div>
      </div>

      {/* Typography Scale & Hierarchy Table */}
      <div className="typo-scale-section">
        <div className="scale-section-head">
          <span className="ui-block-label">TYPE SCALE &amp; HIERARCHY MATRIX</span>
          <span className="scale-subnote">Click any row code snippet to copy CSS</span>
        </div>

        <div className="typo-scale-table">
          {/* Row 1: Hero H1 */}
          <div className="typo-scale-row">
            <div className="scale-meta-col">
              <span className="scale-tag">Hero Title</span>
              <span className="scale-level">H1 / Display</span>
              <span className="scale-specs">clamp(40px, 5.2vw, 68px) · 800 Wt · -0.02em</span>
            </div>
            <div className="scale-preview-col">
              <h1 className="scale-preview-h1">
                Your Footage. Our Analysis. <em>Actionable Insights.</em>
              </h1>
            </div>
            <div className="scale-action-col">
              <button
                type="button"
                onClick={() =>
                  copyCss(
                    "font-size: clamp(40px, 5.2vw, 68px); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em;",
                    "h1"
                  )
                }
                className="copy-css-btn"
                title="Copy CSS"
              >
                {copiedToken === "h1" ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                <span>{copiedToken === "h1" ? "Copied" : "Copy CSS"}</span>
              </button>
            </div>
          </div>

          {/* Row 2: Section Heading H2 */}
          <div className="typo-scale-row">
            <div className="scale-meta-col">
              <span className="scale-tag">Section Head</span>
              <span className="scale-level">H2 / Section</span>
              <span className="scale-specs">clamp(32px, 3.8vw, 48px) · 800 Wt · -0.015em</span>
            </div>
            <div className="scale-preview-col">
              <h2 className="scale-preview-h2">
                Three disciplines. One delivery team.
              </h2>
            </div>
            <div className="scale-action-col">
              <button
                type="button"
                onClick={() =>
                  copyCss(
                    "font-size: clamp(32px, 3.8vw, 48px); font-weight: 800; line-height: 1.15; letter-spacing: -0.015em;",
                    "h2"
                  )
                }
                className="copy-css-btn"
                title="Copy CSS"
              >
                {copiedToken === "h2" ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                <span>{copiedToken === "h2" ? "Copied" : "Copy CSS"}</span>
              </button>
            </div>
          </div>

          {/* Row 3: Card Heading H3 */}
          <div className="typo-scale-row">
            <div className="scale-meta-col">
              <span className="scale-tag">Card Heading</span>
              <span className="scale-level">H3 / Card Title</span>
              <span className="scale-specs">22px – 24px · 750 Wt · 1.25 Line Height</span>
            </div>
            <div className="scale-preview-col">
              <h3 className="scale-preview-h3">
                01 · Traffic Turning Movement Counts (TMC)
              </h3>
            </div>
            <div className="scale-action-col">
              <button
                type="button"
                onClick={() =>
                  copyCss(
                    "font-size: 23px; font-weight: 750; line-height: 1.25;",
                    "h3"
                  )
                }
                className="copy-css-btn"
                title="Copy CSS"
              >
                {copiedToken === "h3" ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                <span>{copiedToken === "h3" ? "Copied" : "Copy CSS"}</span>
              </button>
            </div>
          </div>

          {/* Row 4: Eyebrow / Overline */}
          <div className="typo-scale-row">
            <div className="scale-meta-col">
              <span className="scale-tag">Eyebrow</span>
              <span className="scale-level">Overline / Badge</span>
              <span className="scale-specs">11px – 12.5px · 800 Wt · +0.12em Uppercase</span>
            </div>
            <div className="scale-preview-col">
              <span className="scale-preview-eyebrow">
                TRAFFIC VIDEO INTELLIGENCE &amp; SURVEYS
              </span>
            </div>
            <div className="scale-action-col">
              <button
                type="button"
                onClick={() =>
                  copyCss(
                    "font-size: 12px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;",
                    "eyebrow"
                  )
                }
                className="copy-css-btn"
                title="Copy CSS"
              >
                {copiedToken === "eyebrow" ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                <span>{copiedToken === "eyebrow" ? "Copied" : "Copy CSS"}</span>
              </button>
            </div>
          </div>

          {/* Row 5: Body Large / Lead */}
          <div className="typo-scale-row">
            <div className="scale-meta-col">
              <span className="scale-tag">Lead Paragraph</span>
              <span className="scale-level">Body / Large</span>
              <span className="scale-specs">17px – 18px · 500 Med · 1.55 Line Height</span>
            </div>
            <div className="scale-preview-col">
              <p className="scale-preview-lead">
                Founded in 2025, Trafenix Technologies is a specialist traffic video analytics
                company operating from Bengaluru, India.
              </p>
            </div>
            <div className="scale-action-col">
              <button
                type="button"
                onClick={() =>
                  copyCss(
                    "font-size: 18px; font-weight: 500; line-height: 1.55; color: #475569;",
                    "lead"
                  )
                }
                className="copy-css-btn"
                title="Copy CSS"
              >
                {copiedToken === "lead" ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                <span>{copiedToken === "lead" ? "Copied" : "Copy CSS"}</span>
              </button>
            </div>
          </div>

          {/* Row 6: Body Standard */}
          <div className="typo-scale-row">
            <div className="scale-meta-col">
              <span className="scale-tag">Standard Body</span>
              <span className="scale-level">Body / Base</span>
              <span className="scale-specs">14px – 15px · 400 Regular · 1.55 Line Height</span>
            </div>
            <div className="scale-preview-col">
              <p className="scale-preview-body">
                AI-assisted, fully manual or hybrid delivery selected around the footage and assurance need.
                Project-specific validation with 90-day encrypted storage retention.
              </p>
            </div>
            <div className="scale-action-col">
              <button
                type="button"
                onClick={() =>
                  copyCss(
                    "font-size: 14.5px; font-weight: 400; line-height: 1.55; color: #64748b;",
                    "body"
                  )
                }
                className="copy-css-btn"
                title="Copy CSS"
              >
                {copiedToken === "body" ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                <span>{copiedToken === "body" ? "Copied" : "Copy CSS"}</span>
              </button>
            </div>
          </div>

          {/* Row 7: Telemetry / Monospace Metric */}
          <div className="typo-scale-row">
            <div className="scale-meta-col">
              <span className="scale-tag">Telemetry Stat</span>
              <span className="scale-level">Mono / Metric</span>
              <span className="scale-specs">24px – 34px · 800 Wt · JetBrains Mono</span>
            </div>
            <div className="scale-preview-col">
              <div className="scale-preview-telemetry font-mono">
                <span className="telemetry-chip">2,847 veh</span>
                <span className="telemetry-chip">18.4 min</span>
                <span className="telemetry-chip green-stat">90d Storage</span>
              </div>
            </div>
            <div className="scale-action-col">
              <button
                type="button"
                onClick={() =>
                  copyCss(
                    "font-family: 'JetBrains Mono', monospace; font-size: 26px; font-weight: 800;",
                    "mono"
                  )
                }
                className="copy-css-btn"
                title="Copy CSS"
              >
                {copiedToken === "mono" ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                <span>{copiedToken === "mono" ? "Copied" : "Copy CSS"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
