import type { Metadata } from "next";
import { DealershipEcosystem } from "@/components/dealership-ecosystem";
import { VerticalLanding } from "@/components/vertical-landing";
import { VERTICAL_LANDINGS } from "@/lib/verticals";

const data = VERTICAL_LANDINGS.concesionarias;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return (
    <VerticalLanding data={data}>
      <DealershipEcosystem />
    </VerticalLanding>
  );
}
