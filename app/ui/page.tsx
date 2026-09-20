import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ColorPaletteShowcase } from "@/components/color-palette";
import { UIComponentsShowcase } from "@/components/ui-elements";
import { BrandApplicationsShowcase } from "@/components/brand-applications";
import { TypographyShowcase } from "@/components/typography-showcase";

export const metadata: Metadata = {
  title: "Brand Design System & UI Components | Trafenix",
  description:
    "Complete colour palette, interface elements, UI components, logo variations, and typography specifications for Trafenix.",
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
        </div>
      </main>
      <SiteFooter />
    </>
  );
}



