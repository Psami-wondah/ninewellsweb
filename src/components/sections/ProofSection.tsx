import { Eyebrow } from "../ui/Eyebrow";
import { company } from "../../data/company";
import { practiceAreas } from "../../data/siteContent";

export function ProofSection() {
  return (
    <section
      className="grid gap-8 bg-navy px-[clamp(22px,8vw,130px)] py-[clamp(76px,9vw,112px)] text-ivory dark:bg-[#030d1d] lg:grid-cols-[.8fr_1.2fr] lg:gap-20"
      aria-labelledby="proof-heading"
    >
      <div data-reveal="left">
        <Eyebrow className="text-teal">
          A multidisciplinary Nigerian practice
        </Eyebrow>
        <h2
          className="my-6 font-serif text-[clamp(42px,4vw,64px)] leading-[.98] font-normal tracking-[-.04em] text-ivory"
          id="proof-heading"
        >
          Built for matters that cross boundaries.
        </h2>
      </div>
      <p
        className="m-0 self-center font-serif text-[clamp(27px,2.7vw,42px)] leading-tight"
        data-reveal="right"
        data-reveal-delay="1"
      >
        Ninewells brings interconnected practices together for complex
        mandates—combining precision, commercial judgement and a clear
        understanding of regulatory obligations.
      </p>
      <div
        className="grid border-t border-white/25 lg:col-span-2 lg:grid-cols-3"
        data-reveal="up"
        data-reveal-delay="2"
      >
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
    </section>
  );
}
