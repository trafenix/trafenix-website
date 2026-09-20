import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { UIComponentsShowcase } from "@/components/ui-elements";
import { BrandApplicationsShowcase } from "@/components/brand-applications";

export const metadata: Metadata = {
  title: "UI Components & Brand System | Trafenix",
  description:
    "Complete interface elements, UI components, and brand application guidelines for Trafenix.",
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
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

