import type { Metadata } from "next";
import { VerticalLanding } from "@/components/vertical-landing";
import { WhiteLabelPitch } from "@/components/white-label-pitch";
import { VERTICAL_LANDINGS } from "@/lib/verticals";

const data = VERTICAL_LANDINGS.inmobiliarias;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return (
    <VerticalLanding data={data}>
      <WhiteLabelPitch />
    </VerticalLanding>
  );
}
