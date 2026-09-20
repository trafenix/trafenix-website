"use client";

import React from "react";

interface TrafenixLogoMarkProps {
  variant?: "color" | "monochrome-dark" | "monochrome-white";
  size?: number;
}

export function TrafenixLogoMark({
  variant = "color",
  size = 48,
}: TrafenixLogoMarkProps) {
  let primaryFill = "#1677ff";
  let detailStroke = "#00c2d7";
  let detailFill = "#00c2d7";

  if (variant === "monochrome-dark") {
    primaryFill = "#0f172a";
    detailStroke = "#ffffff";
    detailFill = "#ffffff";
  } else if (variant === "monochrome-white") {
    primaryFill = "#ffffff";
    detailStroke = "#081a28";
    detailFill = "#081a28";
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path
        d="M7 9h50a4 4 0 0 1 4 4v15a4 4 0 0 1-4 4H39v25a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V32H7a4 4 0 0 1-4-4V13a4 4 0 0 1 4-4Z"
        fill={primaryFill}
      />
      <path
        d="M8 22h14m20 0h14M32 34v20"
        stroke={detailStroke}
        strokeWidth="2.5"
        strokeDasharray="5 4"
      />
      <circle cx="32" cy="22" r="4.5" fill={detailFill} />
      <path
        d="m32 22-9-9m9 9 9-9m-9 9-9 9m9-9 9 9"
        stroke={detailStroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandApplicationsShowcase() {
  return (
    <div className="brand-showcase-container">
      {/* Section Header */}
      <div className="brand-showcase-header">
        <span className="brand-eyebrow">BRAND APPLICATIONS</span>
        <h2 className="brand-main-title">Logo Variations &amp; Usage</h2>
      </div>

      {/* 4 Main Logo Variation Cards matching the design */}
      <div className="brand-cards-grid">
        {/* 1. Full Colour on White */}
        <div className="brand-card-column">
          <div className="brand-canvas card-white">
            <div className="brand-lockup">
              <TrafenixLogoMark variant="color" size={54} />
              <div className="brand-text-block">
                <span className="brand-name dark-text">TRAFENIX</span>
                <span className="brand-subline dark-subline">
                  TECHNOLOGIES PVT LTD
                </span>
              </div>
            </div>
          </div>
          <span className="brand-caption">Full Colour on White</span>
        </div>

        {/* 2. Full Colour on Deep Navy */}
        <div className="brand-card-column">
          <div className="brand-canvas card-navy">
            <div className="brand-lockup">
              <TrafenixLogoMark variant="color" size={54} />
              <div className="brand-text-block">
                <span className="brand-name white-text">TRAFENIX</span>
                <span className="brand-subline light-subline">
                  TECHNOLOGIES PVT LTD
                </span>
              </div>
            </div>
          </div>
          <span className="brand-caption">Full Colour on Deep Navy</span>
        </div>

        {/* 3. Monochrome Dark */}
        <div className="brand-card-column">
          <div className="brand-canvas card-white">
            <div className="brand-lockup">
              <TrafenixLogoMark variant="monochrome-dark" size={54} />
              <div className="brand-text-block">
                <span className="brand-name dark-text">TRAFENIX</span>
                <span className="brand-subline dark-subline">
                  TECHNOLOGIES PVT LTD
                </span>
              </div>
            </div>
          </div>
          <span className="brand-caption">Monochrome Dark</span>
        </div>

        {/* 4. Monochrome White */}
        <div className="brand-card-column">
          <div className="brand-canvas card-navy">
            <div className="brand-lockup">
              <TrafenixLogoMark variant="monochrome-white" size={54} />
              <div className="brand-text-block">
                <span className="brand-name white-text">TRAFENIX</span>
                <span className="brand-subline light-subline">
                  TECHNOLOGIES PVT LTD
                </span>
              </div>
            </div>
          </div>
          <span className="brand-caption">Monochrome White</span>
        </div>
      </div>

      {/* Bottom Row: App Icon, Favicon Sizes, Website Header */}
      <div className="brand-assets-row">
        {/* App Icon */}
        <div className="brand-asset-column app-icon-col">
          <div className="app-icon-squircle">
            <div className="app-icon-inner">
              <TrafenixLogoMark variant="color" size={68} />
            </div>
          </div>
          <span className="brand-caption">App Icon</span>
        </div>

        {/* Favicon Sizes */}
        <div className="brand-asset-column favicon-col">
          <div className="favicon-sizes-cluster">
            {/* 32px */}
            <div className="favicon-box f-large">
              <TrafenixLogoMark variant="color" size={26} />
            </div>

            {/* 24px */}
            <div className="favicon-box f-medium">
              <TrafenixLogoMark variant="color" size={20} />
            </div>

            {/* 16px */}
            <div className="favicon-box f-small">
              <TrafenixLogoMark variant="color" size={14} />
            </div>
          </div>
          <span className="brand-caption">Favicon Sizes</span>
        </div>

        {/* Website Header Component Preview */}
        <div className="brand-asset-column header-col">
          <div className="mock-site-header">
            {/* Left Brand */}
            <div className="mock-header-brand">
              <TrafenixLogoMark variant="color" size={24} />
              <span className="mock-brand-title">TRAFENIX</span>
            </div>

            {/* Middle Nav */}
            <nav className="mock-nav-links">
              <span className="mock-nav-link">Platform</span>
              <span className="mock-nav-link">Solutions</span>
              <span className="mock-nav-link">Analytics</span>
              <span className="mock-nav-link">About</span>
            </nav>

            {/* Right Action */}
            <div className="mock-header-action">
              <button type="button" className="mock-get-started-btn">
                Get Started
              </button>
            </div>
          </div>
          <span className="brand-caption">Website Header</span>
        </div>
      </div>
    </div>
  );
}
