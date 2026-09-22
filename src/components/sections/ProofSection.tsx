import { company } from "../../data/company";
import { pageCallouts, practiceAreas } from "../../data/siteContent";
import { CentralCalloutSection } from "./CentralCalloutSection";

export function ProofSection() {
  return (
    <CentralCalloutSection callout={pageCallouts.home}>
      <div className="grid border-t border-white/25 lg:grid-cols-3">
        {[
          [
            String(practiceAreas.length).padStart(2, "0"),
            "integrated expertise",
          ],
          [
            company.professionalBodies,
            "local and international professional bodies",
          ],
          [
            String(company.offices.length).padStart(2, "0"),
            "Nigerian office locations",
          ],
        ].map(([value, label]) => (
          <span
            className="border-b border-white/20 py-5 text-[12px] text-white/85 last:border-b-0 lg:border-b-0 lg:pt-7"
            key={label}
          >
            <strong className="block font-serif text-[48px] font-normal text-teal">
              {value}
            </strong>
            {label}
          </span>
        ))}
      </div>
    </CentralCalloutSection>
  );
}
