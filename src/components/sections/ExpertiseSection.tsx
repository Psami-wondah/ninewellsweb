import { ArrowRight, Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { expertise, expertiseSlugs } from "../../data/siteContent";
import { Eyebrow } from "../ui/Eyebrow";

export function ExpertiseSection() {
  const [openExpertise, setOpenExpertise] = useState<number | null>(0);
  return (
    <section
      className="grid gap-14 bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,112px)] dark:bg-[#071224] lg:grid-cols-[minmax(300px,.8fr)_minmax(500px,1.35fr)] lg:gap-[clamp(60px,8vw,150px)]"
      id="expertise"
      aria-labelledby="expertise-heading"
    >
      <div className="self-start lg:sticky lg:top-14" data-reveal="left">
        <Eyebrow>Our expertise</Eyebrow>
        <h2
          className="my-6 font-serif text-[clamp(43px,5vw,70px)] leading-[.98] font-normal tracking-[-.04em] text-navy dark:text-paper"
          id="expertise-heading"
        >
          Integrated expertise.
          <br />
          Pragmatic solutions.
        </h2>
        <p className="mb-8 max-w-[450px] text-[14px] leading-6 text-slate dark:text-paper/80">
          We bring depth, commercial judgement and joined-up thinking to matters
          where every decision carries weight.
        </p>
        {/* <InlineLink href="/#expertise">View all expertise</InlineLink> */}
      </div>
      <div
        className="border-t border-navy dark:border-paper"
        data-reveal="right"
        data-reveal-delay="1"
      >
        {expertise.map(([number, title, description], index) => {
          const isOpen = openExpertise === index;
          return (
            <article
              className={`border-b border-navy/15 transition-colors dark:border-white/15 ${isOpen ? "bg-teal/5 dark:bg-teal/10" : ""}`}
              key={title}
            >
              <button
                className="grid min-h-[72px] w-full grid-cols-[42px_1fr_26px] items-center border-0 bg-transparent text-left text-navy dark:text-paper lg:grid-cols-[58px_1fr_30px]"
                type="button"
                onClick={() => setOpenExpertise(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-[12px] font-semibold tracking-[.06em] text-teal-dark dark:text-teal">
                  {number}
                </span>
                <span className="font-serif text-[21px] lg:text-[25px]">
                  {title}
                </span>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              <div
                className={`grid overflow-hidden pl-[42px] transition-all duration-300 lg:grid-cols-[1fr_auto] lg:pl-[58px] ${isOpen ? "max-h-36 gap-3 pb-6 pr-7 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="m-0 text-[13px] text-slate dark:text-paper/75">
                  {description}
                </p>
                <Link
                  className="flex items-center gap-3 text-[12px] font-semibold text-teal-dark no-underline dark:text-teal"
                  to={`/expertise/${expertiseSlugs[title]}`}
                >
                  Explore this practice <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
