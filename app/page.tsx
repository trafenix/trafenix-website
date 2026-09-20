import { ArrowRight, Check, Clock3, FileChartColumn, ScanSearch, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceCard } from "@/components/service-card";
import { packages, services } from "@/lib/services";

const proofPoints = [
  { value: "12", label: "traffic analysis services" },
  { value: "3", label: "AI, manual & hybrid modes" },
  { value: "24h", label: "standard project turnaround" },
  { value: "30d", label: "secure footage retention" },
];

export default function Home() {
  return <><SiteHeader/><main>
    <section className="hero"><div className="hero-grid"/><div className="shell hero-inner">
      <div className="hero-copy reveal"><span className="eyebrow">Traffic video intelligence</span><h1>Your Footage.<br/>Our Analysis.<br/><em>Actionable Insights.</em></h1><p>Send us recorded footage. Trafenix transforms it into structured, quality-checked traffic data using AI-assisted processing and expert manual verification.</p><div className="hero-actions"><a className="button" href="/contact">Get a project quote <ArrowRight size={18}/></a><a className="button secondary" href="/services">Explore 12 services</a></div><div className="hero-trust"><span><ShieldCheck size={17}/> Project-specific QA</span><span><Clock3 size={17}/> 24-hour standard delivery</span></div></div>
      <div className="analysis-stage" aria-label="Illustration of video becoming traffic analytics"><div className="stage-label">LIVE ANALYSIS</div><div className="road"><div className="road-v"/><div className="road-h"/><span className="vehicle v1"/><span className="vehicle v2"/><span className="vehicle v3"/><span className="track t1"/><span className="track t2"/></div><div className="metric m1"><strong>1,248</strong><span>movements</span></div><div className="metric m2"><strong>12</strong><span>classes</span></div><div className="stage-footer"><span>VIDEO</span><i/><span>DETECTION</span><i/><span>REPORT</span></div></div>
    </div></section>

    <section className="proof" aria-label="Trafenix service highlights"><div className="shell proof-grid">{proofPoints.map(point=><div key={point.label}><strong>{point.value}</strong><span>{point.label}</span></div>)}</div></section>

    <section className="section" id="services"><div className="shell"><div className="section-head"><div><span className="eyebrow dark">What we measure</span><h2>Twelve services.<br/>One clear data partner.</h2></div><p>Choose one specialist service or combine several into a project-focused analysis.</p></div><div className="service-grid">{services.slice(0,6).map(service=><ServiceCard key={service.slug} service={service}/>)}</div><div className="center"><a className="button secondary dark-button" href="/services">View all 12 services <ArrowRight size={18}/></a></div></div></section>

    <section className="section process-section" id="process"><div className="shell"><div className="section-head light"><div><span className="eyebrow">A controlled workflow</span><h2>Video in.<br/>Decision-ready data out.</h2></div><p>Every project follows a seven-stage process with human review at the points that matter.</p></div><div className="process-line">{["Video","Detection","Classification","Tracking","Measurement","Analytics","Report"].map((step,index)=><div className="process-step" key={step}><span>{String(index+1).padStart(2,"0")}</span><strong>{step}</strong></div>)}</div><div className="mode-grid"><div><ScanSearch/><h3>AI-assisted</h3><p>Fast processing for clear footage and repeatable measurements.</p></div><div><FileChartColumn/><h3>Manual</h3><p>Expert analysis for specialist classifications and complex scenes.</p></div><div><ShieldCheck/><h3>Hybrid</h3><p>Automated scale with analyst review for confidence and control.</p></div></div></div></section>

    <section className="section" id="packages"><div className="shell"><div className="section-head"><div><span className="eyebrow dark">Flexible scope</span><h2>Packages built around<br/>your project.</h2></div><p>Every quote reflects footage duration, camera count, complexity and required outputs.</p></div><div className="pricing-grid">{packages.map(item=><article className={`price-card ${item.featured?"featured":""} ${item.dark?"dark-card":""}`} key={item.name}><span className="price-badge">{item.badge}</span><h3>{item.name}</h3><p>{item.summary}</p><div className="quote-label">Custom quote</div><ul>{item.includes.map(included=><li key={included}><Check size={15}/>{included}</li>)}</ul><small>Best for: {item.best}</small><a className={item.dark?"button cyan":"button secondary dark-button"} href={`/contact?package=${encodeURIComponent(item.name)}`}>Request quote</a></article>)}</div></div></section>

    <section className="cta-band"><div className="shell cta-inner"><div><span className="eyebrow">Have footage ready?</span><h2>Tell us what you need to measure.</h2><p>We’ll review your project and respond within 24 hours on working days.</p></div><a className="button light-button" href="/contact">Start your project <ArrowRight size={18}/></a></div></section>
  </main><SiteFooter/></>;
}
