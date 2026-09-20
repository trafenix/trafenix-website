import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { UIComponentsShowcase } from "@/components/ui-elements";
import { BrandApplicationsShowcase } from "@/components/brand-applications";
import { TypographyShowcase } from "@/components/typography-showcase";

export const metadata: Metadata = {
  title: "UI Components, Brand & Typography System | Trafenix",
  description:
    "Complete interface elements, UI components, brand application guidelines, and typography specifications for Trafenix.",
};

export default function UIComponentsPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ background: "#f8fafc", minHeight: "100vh", padding: "40px 0 80px 0" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px" }}>
          {/* 1. Interface Elements / UI Components */}
          <UIComponentsShowcase />

          {/* 2. Brand Applications / Logo Variations & Usage */}
          <BrandApplicationsShowcase />

          {/* 3. Typography System / Typography @1x */}
          <TypographyShowcase />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}


