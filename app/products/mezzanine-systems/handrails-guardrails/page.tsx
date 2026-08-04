import HandrailsGuardrailsHero from "@/components/handrails-guardrails-page/HandrailsGuardrailsHero";
import HandrailsGuardrailsOverview from "@/components/handrails-guardrails-page/HandrailsGuardrailsOverview";
import HandrailsGuardrailsAdvantages from "@/components/handrails-guardrails-page/HandrailsGuardrailsAdvantages";
import HandrailsGuardrailsComponents from "@/components/handrails-guardrails-page/HandrailsGuardrailsComponents";
import HandrailsGuardrailsApplications from "@/components/handrails-guardrails-page/HandrailsGuardrailsApplications";
import HandrailsGuardrailsProcess from "@/components/handrails-guardrails-page/HandrailsGuardrailsProcess";
import HandrailsGuardrailsCTA from "@/components/handrails-guardrails-page/HandrailsGuardrailsCTA";

export default function HandrailsGuardrailsPage() {
  return (
    <main>
      <HandrailsGuardrailsHero />
      <HandrailsGuardrailsOverview />
      <HandrailsGuardrailsAdvantages />
      <HandrailsGuardrailsComponents />
      <HandrailsGuardrailsApplications />
      <HandrailsGuardrailsProcess />
      <HandrailsGuardrailsCTA />
    </main>
  );
}