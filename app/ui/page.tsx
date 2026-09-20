import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ColorPaletteShowcase } from "@/components/color-palette";
import { UIComponentsShowcase } from "@/components/ui-elements";
import { BrandApplicationsShowcase } from "@/components/brand-applications";
import { TypographyShowcase } from "@/components/typography-showcase";
import { LinkedInCompanyCard } from "@/components/linkedin-company-card";

export const metadata: Metadata = {
  title: "Brand Design System & UI Components | Trafenix",
  description:
    "Complete colour palette, interface elements, UI components, logo variations, typography specifications, and official LinkedIn company card for Trafenix.",
};

export default function UIComponentsPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ background: "#f8fafc", minHeight: "100vh", padding: "40px 0 80px 0" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
          {/* 1. Colour System / Brand Colours */}
          <ColorPaletteShowcase />

          {/* 2. Interface Elements / UI Components */}
          <UIComponentsShowcase />

          {/* 3. Brand Applications / Logo Variations & Usage */}
          <BrandApplicationsShowcase />

          {/* 4. Typography System / Typography @1x */}
          <TypographyShowcase />

          {/* 5. Social Presence / Official LinkedIn Company Card Specification */}
          <section
            style={{
              marginTop: "56px",
              paddingTop: "48px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <span className="color-eyebrow">SOCIAL PRESENCE</span>
              <h2 className="color-main-title">Official Company Profile &amp; LinkedIn Card</h2>
            </div>
            <LinkedInCompanyCard showSpecs={true} />
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}




