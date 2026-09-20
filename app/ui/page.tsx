import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { UIComponentsShowcase } from "@/components/ui-elements";

export const metadata: Metadata = {
  title: "UI Components & Design System | Trafenix",
  description:
    "Design system specification and UI components for Trafenix traffic video intelligence.",
};

export default function UIComponentsPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: "40px" }}>
        <UIComponentsShowcase />
      </main>
      <SiteFooter />
    </>
  );
}
