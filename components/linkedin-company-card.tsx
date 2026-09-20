"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Clock3,
  Database,
  Download,
  Info,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons";

interface LinkedInCompanyCardProps {
  showSpecs?: boolean;
  className?: string;
}

export function LinkedInCompanyCard({
  showSpecs = false,
  className = "",
}: LinkedInCompanyCardProps) {
  const [copied, setCopied] = useState(false);
  const [specsMode, setSpecsMode] = useState(showSpecs);
  const [isFollowing, setIsFollowing] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/company/143909193";

  const handleCopy = () => {
    navigator.clipboard.writeText(linkedinUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className={`li-card-container ${className}`}>
      {/* Optional Mode Switch Header */}
      <div className="li-card-toolbar">
        <div className="li-toolbar-left">
          <div className="li-pulse-indicator">
            <span className="li-pulse-dot" />
            <span className="li-status-text">Official LinkedIn Company Card</span>
          </div>
        </div>

        <div className="li-toolbar-right">
          <button
            type="button"
            onClick={() => setSpecsMode(!specsMode)}
            className={`li-toggle-btn ${specsMode ? "active" : ""}`}
            title="Toggle LinkedIn dimension specifications"
          >
            <Info size={14} />
            <span>{specsMode ? "Hide Specs" : "Show Specs (1128×191 & 300×300)"}</span>
          </button>
        </div>
      </div>

      {/* Main Profile Shell */}
      <div className="li-profile-shell">
        {/* Banner Area (1128 x 191 ratio) */}
        <div className="li-banner-wrapper">
          <Image
            src="/brand/trafenix-linkedin-banner-1128x191.png"
            alt="Trafenix LinkedIn Cover Banner (1128 x 191)"
            width={1128}
            height={191}
            priority
            className="li-banner-img"
          />

          {/* Specs Overlay if enabled */}
          {specsMode && (
            <div className="li-specs-badge banner-spec">
              <span className="spec-dot" />
              <span>Company Banner Image Size: <strong>1128 × 191 px</strong></span>
            </div>
          )}
        </div>

        {/* Profile Header (Overlapping Logo & Info) */}
        <div className="li-header-body">
          {/* Overlapping Logo */}
          <div className="li-logo-overlap-zone">
            <div className="li-logo-frame">
              <Image
                src="/brand/trafenix-linkedin-logo-300x300.png"
                alt="Trafenix Official Logo (300 x 300)"
                width={300}
                height={300}
                className="li-logo-img"
              />
            </div>

            {specsMode && (
              <div className="li-specs-badge logo-spec">
                <span className="spec-dot" />
                <span>Logo Image Size: <strong>300 × 300 px</strong></span>
              </div>
            )}
          </div>

          {/* Profile Meta & Actions */}
          <div className="li-profile-details">
            <div className="li-title-row">
              <div className="li-name-group">
                <h3 className="li-company-name">Trafenix Technologies</h3>
                <span className="li-verified-badge" title="Verified Company">
                  <CheckCircle2 size={16} fill="#1677ff" color="#ffffff" />
                </span>
              </div>

              {/* Action Buttons */}
              <div className="li-actions-cluster">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsFollowing(true)}
                  className={`li-primary-action-btn ${isFollowing ? "following" : ""}`}
                >
                  <LinkedinIcon size={16} color="#ffffff" />
                  <span>{isFollowing ? "Following" : "Follow on LinkedIn"}</span>
                </a>

                <a href="/contact" className="li-secondary-action-btn">
                  <span>Start a Project</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="li-icon-action-btn"
                  title="Copy LinkedIn URL"
                >
                  {copied ? <Check size={16} color="#22c55e" /> : <Copy size={16} />}
                </button>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="li-icon-action-btn"
                  title="Open on LinkedIn"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Taglines and Metadata */}
            <p className="li-headline">
              Your Footage. Our Analysis. Actionable Insights. • AI Speed & Human Accuracy
            </p>

            <p className="li-meta-subtext">
              Traffic Video Intelligence & Certified Transportation Surveys • Bengaluru, India • Founded 2025
            </p>

            {/* Key Value Badges */}
            <div className="li-pills-row">
              <span className="li-spec-pill">
                <ShieldCheck size={14} color="#00c2d7" />
                <span>12 Certified Services</span>
              </span>
              <span className="li-spec-pill">
                <Clock3 size={14} color="#1677ff" />
                <span>24h Turnaround</span>
              </span>
              <span className="li-spec-pill highlight">
                <Database size={14} color="#22c55e" />
                <span>90-Day Secure Storage</span>
              </span>
            </div>

            {/* Asset quick downloads in specs mode */}
            {specsMode && (
              <div className="li-download-bar">
                <span className="download-bar-title">Direct Asset Downloads:</span>
                <a
                  href="/brand/trafenix-linkedin-banner-1128x191.png"
                  download="trafenix-linkedin-banner-1128x191.png"
                  className="download-asset-link"
                >
                  <Download size={13} />
                  <span>Banner (1128×191)</span>
                </a>
                <a
                  href="/brand/trafenix-linkedin-banner-ultra-hd.png"
                  download="trafenix-linkedin-banner-ultra-hd.png"
                  className="download-asset-link"
                >
                  <Download size={13} />
                  <span>Banner 4K Ultra-HD (3384×573)</span>
                </a>
                <a
                  href="/brand/trafenix-linkedin-logo-300x300.png"
                  download="trafenix-linkedin-logo-300x300.png"
                  className="download-asset-link"
                >
                  <Download size={13} />
                  <span>Logo (300×300)</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
