"use client";

import { ArrowRight, ShieldCheck, Clock3, Database } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

interface CompanyBannerProps {
  showLinkedinButton?: boolean;
  className?: string;
}

export function CompanyBanner({
  showLinkedinButton = true,
  className = "",
}: CompanyBannerProps) {
  return (
    <div className={`company-banner-wrap ${className}`}>
      <div className="company-banner-inner">
        {/* Ambient background glows */}
        <div className="banner-grid-overlay" />
        <div className="banner-glow-blue" />
        <div className="banner-glow-cyan" />

        <div className="banner-flex-layout">
          {/* Left Brand Identity & Tagline */}
          <div className="banner-brand-side">
            <div className="banner-eyebrow-pill">
              <span className="banner-pulse-dot" />
              <span>Traffic Video Intelligence</span>
            </div>

            <div className="banner-title-row">
              <svg className="banner-logo-mark" viewBox="0 0 64 64" aria-hidden="true">
                <path
                  d="M7 9h50a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4H39v25a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V32H7a4 4 0 0 1-4-4V13a4 4 0 0 1 4-4Z"
                  fill="#1677ff"
                />
                <path
                  d="M8 22h14m20 0h14M32 34v20"
                  stroke="#00c2d7"
                  strokeWidth="2.5"
                  strokeDasharray="5 4"
                />
                <circle cx="32" cy="22" r="4.5" fill="#00c2d7" />
                <path
                  d="m32 22-9-9m9 9 9-9m-9 9-9 9m9-9 9 9"
                  stroke="#00c2d7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <h2 className="banner-brand-heading">TRAFENIX</h2>
            </div>

            <p className="banner-hero-tagline">
              Your Footage. Our Analysis. <em>Actionable Insights.</em>
            </p>

            <p className="banner-subcopy">
              Turning client video into certified turning counts, vehicle classifications,
              and surrogate safety surveys with AI speed and rigorous analyst verification.
            </p>

            <div className="banner-actions-row">
              <a href="/contact" className="button banner-primary-btn">
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </a>

              {showLinkedinButton && (
                <a
                  href="https://www.linkedin.com/company/143909193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="banner-linkedin-btn"
                >
                  <LinkedinIcon size={16} color="#00c2d7" />
                  <span>Connect on LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Metrics & Telemetry Cards */}
          <div className="banner-stats-side">
            <div className="banner-stat-tile">
              <div className="stat-tile-top">
                <span className="stat-number">12</span>
                <ShieldCheck size={20} color="#00c2d7" />
              </div>
              <span className="stat-label">Specialist Services</span>
              <p className="stat-desc">TMC, OD, queues & safety</p>
            </div>

            <div className="banner-stat-tile">
              <div className="stat-tile-top">
                <span className="stat-number">24h</span>
                <Clock3 size={20} color="#1677ff" />
              </div>
              <span className="stat-label">Rapid Turnaround</span>
              <p className="stat-desc">Standard qualifying deliveries</p>
            </div>

            <div className="banner-stat-tile highlight">
              <div className="stat-tile-top">
                <span className="stat-number">90d</span>
                <Database size={20} color="#22c55e" />
              </div>
              <span className="stat-label">Secure Retention</span>
              <p className="stat-desc">Encrypted private cloud storage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
