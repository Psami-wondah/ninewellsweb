import { ArrowRight } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Callout } from "../../data/siteContent";
import { Eyebrow } from "../ui/Eyebrow";

type CentralCalloutSectionProps = {
  callout: Callout;
  children?: ReactNode;
  id?: string;
};

export function CentralCalloutSection({
  callout,
  children,
  id,
}: CentralCalloutSectionProps) {
  const body = Array.isArray(callout.body) ? callout.body : [callout.body];

  return (
    <section
      className="grid gap-10 bg-navy px-[clamp(22px,8vw,130px)] py-[clamp(76px,9vw,112px)] text-ivory dark:bg-[#030d1d] lg:grid-cols-[.8fr_1.2fr] lg:gap-x-20"
      id={id}
      aria-label={`${callout.heading} callout`}
    >
      <div data-reveal="left">
        {callout.eyebrow ? (
          <Eyebrow className="text-teal">{callout.eyebrow}</Eyebrow>
        ) : null}
        <h2 className="mt-6 mb-0 max-w-[760px] font-serif text-[clamp(42px,4.5vw,66px)] leading-[.98] font-normal tracking-[-.04em] text-ivory">
          {callout.heading}
        </h2>
      </div>
      <div className="self-center" data-reveal="right" data-reveal-delay="1">
        <div className="grid gap-5">
          {body.map((paragraph) => (
            <p
              className="m-0 max-w-[880px] font-serif text-[clamp(25px,2.5vw,39px)] leading-tight text-white/95"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
        {callout.cta?.href ? (
          <Link
            className="mt-9 inline-flex items-center gap-3 border-b border-teal pb-2 text-[12px] font-semibold text-ivory no-underline"
            to={callout.cta.href}
          >
            {callout.cta.label} <ArrowRight size={18} />
          </Link>
        ) : callout.cta?.note ? (
          <p className="mt-9 mb-0 text-[10px] font-semibold uppercase tracking-[.12em] text-teal">
            {callout.cta.note}
          </p>
        ) : null}
      </div>
      {children ? (
        <div
          className="lg:col-span-2"
          data-reveal="up"
          data-reveal-delay="2"
        >
          {children}
        </div>
      ) : null}
    </section>
  );
}
