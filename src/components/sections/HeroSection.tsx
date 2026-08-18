import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import lagosBridge from "../../assets/lagos-lekki-ikoyi.webp";
import { Eyebrow } from "../ui/Eyebrow";
import { InlineLink } from "../ui/InlineLink";

export function HeroSection() {
  return (
    <section
      className="relative grid min-h-[850px] border-b border-white/15 bg-navy dark:border-navy/15  lg:grid-cols-[minmax(450px,1.38fr)_minmax(340px,.92fr)]"
      id="about"
      aria-labelledby="hero-heading"
    >
      <div
        className="flex min-w-0 flex-col px-[clamp(22px,6vw,106px)] pt-[clamp(38px,5vw,50px)] pb-11"
        data-reveal="left"
      >
        <p className="mb-10 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[.16em] text-paper lg:mb-12">
          Nigerian legal counsel <span className="h-px w-5 bg-teal" /> Victoria
          Island · Lagos
        </p>
        <h1
          className="m-0 max-w-[780px] font-serif text-[clamp(60px,9vw,126px)] leading-[1] font-normal tracking-[-.055em] text-paper"
          id="hero-heading"
        >
          Clarity for
          <br />
          complex
          <br />
          decisions.
        </h1>
        <p className="mt-9 max-w-[540px] text-[15px] leading-7 text-paper/85 lg:mt-10 lg:text-[16px]">
          Ninewells is a fully integrated Nigerian law firm advising businesses,
          institutions and investors on complex commercial, regulatory and
          high-stakes matters.
        </p>
        <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <a
            className="group inline-flex min-h-[52px] items-center gap-6  px-6 text-[13px] font-semibold  no-underline transition-colors  bg-teal text-navy-deep hover:bg-[#54bbbb]"
            href="#expertise"
          >
            Explore our expertise{" "}
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={19}
            />
          </a>
          <InlineLink href="/people" className="dark:text-paper text-paper">
            Meet the team
          </InlineLink>
        </div>
        <div className="mt-14 max-w-[560px] border-t border-white/15 pt-6 lg:mt-auto">
          <Eyebrow>Featured insight</Eyebrow>
          <a
            className="mt-2 flex max-w-[450px] items-end justify-between gap-5 font-serif text-[18px] leading-tight no-underline text-paper lg:text-[20px]"
            href="#insights"
          >
            Experience. Innovation. Trust.{" "}
            <ArrowRight className="shrink-0" size={18} />
          </a>
        </div>
      </div>
      <figure
        className="group relative m-0 min-h-[500px] min-w-0 overflow-hidden bg-stone dark:bg-[#101f33] lg:min-h-0"
        data-reveal="fade"
        data-reveal-delay="1"
      >
        <img
          className="h-full w-full object-cover object-[62%_center] transition-transform duration-1000 group-hover:scale-[1.025]"
          src={lagosBridge}
          alt="Lekki–Ikoyi Link Bridge across the Lagos Lagoon"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 bg-navy-deep/95 px-6 py-4 text-[9px] uppercase tracking-[.13em] text-ivory">
          <span>Lagos, Nigeria / Built for connected markets</span>
          <a
            className="text-white/85 underline-offset-4 hover:text-white hover:underline"
            href="https://unsplash.com/photos/a-large-bridge-over-a-large-body-of-water-xayCN6mrMZ8"
            target="_blank"
            rel="noreferrer"
          >
            Photo: Tunde Buremo / Unsplash
          </a>
        </figcaption>
      </figure>
      <a
        className="absolute bottom-0 left-0 hidden size-[52px] items-center justify-center bg-teal text-navy-deep lg:flex"
        href="#expertise"
        aria-label="Scroll to our expertise"
      >
        <ArrowDown size={21} />
      </a>
    </section>
  );
}
