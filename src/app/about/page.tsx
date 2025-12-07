import type { Metadata } from "next";
import SectionTitle from "@/components/layouts/section-title";

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
    return (
      <div>
        <SectionTitle title="درباره ما" />
      </div>
    )
}