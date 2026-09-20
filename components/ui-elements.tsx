"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Calendar,
  Clock,
  MapPin,
  Activity,
} from "lucide-react";

export function UIComponentsShowcase() {
  const [activeChip, setActiveChip] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCorridor, setSelectedCorridor] = useState("NH-48 Corridor");

  const chips = [
    { id: "All", label: "All" },
    { id: "Cars", label: "Cars" },
    { id: "Trucks", label: "Trucks" },
    { id: "Two-wheelers", label: "Two-wheelers" },
    { id: "Buses", label: "Buses" },
  ];

  return (
    <div className="ui-showcase-container">
      {/* Header section */}
      <div className="ui-showcase-header">
        <span className="ui-eyebrow">INTERFACE ELEMENTS</span>
        <h1 className="ui-main-title">UI Components</h1>
      </div>

      {/* 3-Column Visual Grid matching PDF */}
      <div className="ui-elements-grid">
        {/* ================= COLUMN 1: BUTTONS & STATUS INDICATORS ================= */}
        <div className="ui-col">
          {/* Buttons Section */}
          <div className="ui-section-block">
            <span className="ui-block-label">BUTTONS</span>
            <div className="ui-buttons-stack">
              <button type="button" className="ui-btn ui-btn-primary">
                Primary Action
              </button>

              <button type="button" className="ui-btn ui-btn-secondary">
                Secondary Action
              </button>

              <button type="button" className="ui-btn ui-btn-ghost">
                Ghost Action
              </button>

              <button type="button" className="ui-btn ui-btn-danger">
                Critical Alert
              </button>

              <div className="ui-small-btns-row">
                <button type="button" className="ui-btn-sm ui-btn-dark">
                  Small
                </button>
                <button type="button" className="ui-btn-sm ui-btn-blue">
                  Small
                </button>
                <button type="button" className="ui-btn-sm ui-btn-cyan">
                  Small
                </button>
              </div>
            </div>
          </div>

          {/* Traffic Status Indicators Section */}
          <div className="ui-section-block">
            <span className="ui-block-label">TRAFFIC STATUS INDICATORS</span>
            <div className="ui-status-stack">
              <div className="ui-status-card status-free">
                <div className="status-indicator-left">
                  <span className="status-dot dot-green" />
                  <span className="status-name">Free Flow</span>
                </div>
                <span className="status-occupancy">0 – 30% occupancy</span>
              </div>

              <div className="ui-status-card status-moderate">
                <div className="status-indicator-left">
                  <span className="status-dot dot-yellow" />
                  <span className="status-name">Moderate</span>
                </div>
                <span className="status-occupancy">30 – 70% occupancy</span>
              </div>

              <div className="ui-status-card status-congested">
                <div className="status-indicator-left">
                  <span className="status-dot dot-red" />
                  <span className="status-name">Congested</span>
                </div>
                <span className="status-occupancy">70 – 100% occupancy</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COLUMN 2: DATA VISUALIZATION CARDS ================= */}
        <div className="ui-col">
          <div className="ui-section-block">
            <span className="ui-block-label">DATA VISUALIZATION CARDS</span>
            <div className="ui-cards-stack">
              {/* Card 1: Hourly Vehicle Count */}
              <div className="ui-viz-card">
                <div className="viz-card-head">
                  <span className="viz-card-title">Hourly Vehicle Count</span>
                  <span className="viz-live-badge">
                    <span className="live-pulse-dot" />
                    LIVE
                  </span>
                </div>

                <div className="viz-metric-value">2,847</div>

                {/* 8-bar chart matching visual */}
                <div className="viz-bar-chart">
                  <div className="bar-column" style={{ height: "35%" }} title="H-8: 980" />
                  <div className="bar-column" style={{ height: "48%" }} title="H-7: 1,350" />
                  <div className="bar-column" style={{ height: "42%" }} title="H-6: 1,180" />
                  <div className="bar-column" style={{ height: "60%" }} title="H-5: 1,690" />
                  <div className="bar-column" style={{ height: "72%" }} title="H-4: 2,040" />
                  <div className="bar-column" style={{ height: "85%" }} title="H-3: 2,410" />
                  <div className="bar-column" style={{ height: "94%" }} title="H-2: 2,680" />
                  <div className="bar-column active-bar" style={{ height: "100%" }} title="Current: 2,847" />
                </div>

                <div className="viz-card-foot">
                  Past 8 hours · NH-48 Corridor
                </div>
              </div>

              {/* Card 2: Average Travel Time (Dark Predictive Card) */}
              <div className="ui-viz-card dark-predictive-card">
                <div className="viz-card-head">
                  <span className="viz-card-title text-white">Average Travel Time</span>
                  <span className="viz-predictive-badge">PREDICTIVE</span>
                </div>

                <div className="viz-metric-value text-white">
                  18.4 <span className="viz-unit">min</span>
                </div>

                {/* Smooth Area Curve Chart */}
                <div className="viz-area-chart-wrap">
                  <svg
                    viewBox="0 0 300 60"
                    preserveAspectRatio="none"
                    className="viz-area-svg"
                  >
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00c2d7" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#00c2d7" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 45 Q 40 38, 75 42 T 150 25 T 225 32 T 300 18 L 300 60 L 0 60 Z"
                      fill="url(#areaGradient)"
                    />
                    <path
                      d="M 0 45 Q 40 38, 75 42 T 150 25 T 225 32 T 300 18"
                      fill="none"
                      stroke="#00c2d7"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                <div className="viz-card-foot text-muted">
                  Sector 17 to Cyber Hub · Next 1h forecast
                </div>
              </div>

              {/* Card 3: Corridor Congestion Index */}
              <div className="ui-viz-card">
                <span className="viz-card-title mb-3">Corridor Congestion Index</span>

                <div className="viz-gauge-row">
                  <div className="viz-gauge-circle">
                    <svg viewBox="0 0 72 72" className="gauge-svg">
                      <circle
                        cx="36"
                        cy="36"
                        r="28"
                        stroke="#e2e8f0"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="36"
                        cy="36"
                        r="28"
                        stroke="url(#gaugeGradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="175.9"
                        strokeDashoffset="58"
                        strokeLinecap="round"
                        transform="rotate(-90 36 36)"
                      />
                      <defs>
                        <linearGradient id="gaugeGradient" x1="0" y1="1" x2="1" y2="0">
                          <stop offset="0%" stopColor="#22c55e" />
                          <stop offset="60%" stopColor="#eab308" />
                          <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="gauge-number">67</span>
                  </div>

                  <div className="viz-gauge-meta">
                    <div className="gauge-status-title">Moderate Congestion</div>
                    <div className="gauge-status-sub">Ring Road · Updated 30s ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COLUMN 3: FORM & FILTER ELEMENTS + MAP CARD ================= */}
        <div className="ui-col">
          {/* Form & Filter Elements */}
          <div className="ui-section-block">
            <span className="ui-block-label">FORM & FILTER ELEMENTS</span>
            <div className="ui-forms-stack">
              {/* Search input */}
              <div className="ui-input-wrap">
                <Search size={16} className="ui-input-icon text-slate" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search corridors, junctions, sensors..."
                  className="ui-form-input"
                />
              </div>

              {/* Corridor Dropdown */}
              <div className="ui-dropdown-wrap">
                <select
                  value={selectedCorridor}
                  onChange={(e) => setSelectedCorridor(e.target.value)}
                  className="ui-form-select"
                >
                  <option value="NH-48 Corridor">NH-48 Corridor</option>
                  <option value="Outer Ring Road">Outer Ring Road</option>
                  <option value="MG Road Expressway">MG Road Expressway</option>
                  <option value="Electronic City Flyover">Electronic City Flyover</option>
                </select>
                <ChevronDown size={16} className="ui-select-chevron" />
              </div>

              {/* Date & Time Row */}
              <div className="ui-inputs-split-row">
                <div className="ui-input-wrap flex-1">
                  <Calendar size={15} className="ui-input-icon text-slate" />
                  <input
                    type="text"
                    defaultValue="Sep 17, 2026"
                    className="ui-form-input text-compact"
                  />
                </div>

                <div className="ui-input-wrap flex-1">
                  <Clock size={15} className="ui-input-icon text-slate" />
                  <input
                    type="text"
                    defaultValue="08:00 – 20:00"
                    className="ui-form-input text-compact"
                  />
                </div>
              </div>

              {/* Filter Chips Sub-block */}
              <div className="ui-chips-block">
                <span className="ui-sub-label">FILTER CHIPS</span>
                <div className="ui-chips-row">
                  {chips.map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => setActiveChip(chip.id)}
                      className={`ui-chip ${activeChip === chip.id ? "active" : ""}`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Traffic Map Card */}
          <div className="ui-section-block">
            <span className="ui-block-label">TRAFFIC MAP CARD</span>
            <div className="ui-map-card">
              {/* Top Location Bar */}
              <div className="map-card-top">
                <div className="map-location-tag">
                  <MapPin size={15} color="#00c2d7" />
                  <span>Junction 14-B</span>
                </div>
              </div>

              {/* Telemetry Stats Row */}
              <div className="map-telemetry-row">
                <div className="map-telemetry-item">
                  <span className="telemetry-label">SPEED</span>
                  <div className="telemetry-val">
                    38 <span className="telemetry-unit">km/h</span>
                  </div>
                </div>

                <div className="map-telemetry-item">
                  <span className="telemetry-label">VOLUME</span>
                  <div className="telemetry-val">1,204</div>
                </div>

                <div className="map-telemetry-item">
                  <span className="telemetry-label">STATUS</span>
                  <div className="telemetry-status-badge">
                    <span className="telemetry-dot dot-yellow" />
                    <span>Moderate</span>
                  </div>
                </div>
              </div>

              {/* Map Canvas / Simulated GIS Sensor View */}
              <div className="map-canvas-zone">
                <div className="map-grid-mesh" />
                <div className="map-radar-circle" />
                <div className="map-radar-pulse" />

                {/* Simulated Road Lines */}
                <svg className="map-road-network" viewBox="0 0 300 160">
                  {/* Highway */}
                  <line
                    x1="20"
                    y1="80"
                    x2="280"
                    y2="80"
                    stroke="#1e3a5f"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  <line
                    x1="20"
                    y1="80"
                    x2="280"
                    y2="80"
                    stroke="#00c2d7"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />

                  {/* Crossroad */}
                  <line
                    x1="150"
                    y1="15"
                    x2="150"
                    y2="145"
                    stroke="#1e3a5f"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <line
                    x1="150"
                    y1="15"
                    x2="150"
                    y2="145"
                    stroke="#1677ff"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                  />

                  {/* Junction Node */}
                  <circle cx="150" cy="80" r="14" fill="rgba(0,194,215,0.2)" />
                  <circle cx="150" cy="80" r="6" fill="#00c2d7" />

                  {/* Vehicle Dots */}
                  <circle cx="70" cy="77" r="3.5" fill="#22c55e" />
                  <circle cx="110" cy="83" r="3.5" fill="#eab308" />
                  <circle cx="210" cy="77" r="3.5" fill="#22c55e" />
                  <circle cx="240" cy="83" r="3.5" fill="#ef4444" />
                  <circle cx="150" cy="40" r="3" fill="#00c2d7" />
                  <circle cx="150" cy="120" r="3" fill="#1677ff" />
                </svg>

                <div className="map-live-stream-badge">
                  <Activity size={12} color="#00c2d7" />
                  <span>AI Camera Node #042 · Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
