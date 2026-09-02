import type { Metadata } from "next";
import { VerticalLanding } from "@/components/vertical-landing";
import { VERTICAL_LANDINGS } from "@/lib/verticals";

const data = VERTICAL_LANDINGS.gastronomia;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return <VerticalLanding data={data} />;
}
