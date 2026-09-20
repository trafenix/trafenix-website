"use client";

import React, { useState } from "react";
import { Check, Copy, Palette } from "lucide-react";

interface ColorItem {
  name: string;
  hex: string;
  textColor?: string;
  innerText?: string;
  hasBorder?: boolean;
}

export function ColorPaletteShowcase() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const primaryColors: ColorItem[] = [
    { name: "Deep Navy", hex: "#081B2A" },
    { name: "Electric Blue", hex: "#1677FF" },
    { name: "Cyan", hex: "#00C2D7" },
  ];

  const trafficStatusColors: ColorItem[] = [
    { name: "Signal Green", hex: "#22C55E", innerText: "FREE FLOW" },
    { name: "Signal Amber", hex: "#F59E0B", innerText: "MODERATE" },
    { name: "Signal Red", hex: "#EF4444", innerText: "CONGESTED" },
  ];

  const neutralColors: ColorItem[] = [
    { name: "White", hex: "#FFFFFF", hasBorder: true },
    { name: "Light BG", hex: "#F8FAFC", hasBorder: true },
    { name: "Slate", hex: "#64748B" },
    { name: "Dark BG", hex: "#06131F" },
  ];

  return (
    <div className="color-showcase-container">
      {/* Section Header */}
      <div className="color-showcase-header">
        <div className="color-header-left">
          <span className="color-eyebrow">COLOUR SYSTEM</span>
          <h2 className="color-main-title">Brand Colours</h2>
        </div>
        <div className="color-spec-pill">
          <Palette size={14} color="#1677ff" />
          <span>Click any swatch to copy HEX</span>
        </div>
      </div>

      {/* 1. PRIMARY SECTION */}
      <div className="color-section-group">
        <span className="color-group-label">PRIMARY</span>
        <div className="color-swatch-grid grid-3">
          {primaryColors.map((color) => (
            <div
              key={color.hex}
              className="color-card"
              onClick={() => copyHex(color.hex)}
              title="Click to copy HEX code"
            >
              <div
                className="color-swatch-box large-swatch"
                style={{ backgroundColor: color.hex }}
              >
                <div className="swatch-copy-overlay">
                  {copiedHex === color.hex ? (
                    <span className="swatch-copied-tag">
                      <Check size={14} color="#22c55e" /> Copied!
                    </span>
                  ) : (
                    <span className="swatch-hover-hint">
                      <Copy size={13} /> Copy HEX
                    </span>
                  )}
                </div>
              </div>
              <div className="color-meta-block">
                <h3 className="color-name">{color.name}</h3>
                <span className="color-hex">{color.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. TRAFFIC STATUS SECTION */}
      <div className="color-section-group">
        <span className="color-group-label">TRAFFIC STATUS</span>
        <div className="color-swatch-grid grid-3">
          {trafficStatusColors.map((color) => (
            <div
              key={color.hex}
              className="color-card"
              onClick={() => copyHex(color.hex)}
              title="Click to copy HEX code"
            >
              <div
                className="color-swatch-box large-swatch has-inner-text"
                style={{ backgroundColor: color.hex }}
              >
                <span className="swatch-inner-text">{color.innerText}</span>
                <div className="swatch-copy-overlay">
                  {copiedHex === color.hex ? (
                    <span className="swatch-copied-tag">
                      <Check size={14} color="#22c55e" /> Copied!
                    </span>
                  ) : (
                    <span className="swatch-hover-hint">
                      <Copy size={13} /> Copy HEX
                    </span>
                  )}
                </div>
              </div>
              <div className="color-meta-block">
                <h3 className="color-name">{color.name}</h3>
                <span className="color-hex">{color.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. NEUTRAL UI SECTION */}
      <div className="color-section-group">
        <span className="color-group-label">NEUTRAL UI</span>
        <div className="color-swatch-grid grid-4">
          {neutralColors.map((color) => (
            <div
              key={color.hex}
              className="color-card"
              onClick={() => copyHex(color.hex)}
              title="Click to copy HEX code"
            >
              <div
                className={`color-swatch-box small-swatch ${
                  color.hasBorder ? "border-swatch" : ""
                }`}
                style={{ backgroundColor: color.hex }}
              >
                <div className="swatch-copy-overlay">
                  {copiedHex === color.hex ? (
                    <span className="swatch-copied-tag">
                      <Check size={14} color="#22c55e" /> Copied!
                    </span>
                  ) : (
                    <span className="swatch-hover-hint">
                      <Copy size={13} /> Copy
                    </span>
                  )}
                </div>
              </div>
              <div className="color-meta-block">
                <h3 className="color-name">{color.name}</h3>
                <span className="color-hex">{color.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
