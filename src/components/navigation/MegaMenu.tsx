import { ArrowRight, X } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
import {
  expertiseSlugs,
  featuredInsight,
  megaMenuContent,
} from "../../data/siteContent";
import { Eyebrow } from "../ui/Eyebrow";

type MegaMenuProps = {
  menu: "expertise";
  onClose: () => void;
};

export function MegaMenu({ menu, onClose }: MegaMenuProps) {
  const content = megaMenuContent[menu];
  const { pathname } = useLocation();
  return (
    <div
      className="fixed inset-y-0 right-0 left-[216px] z-[60] hidden bg-navy-deep/12 xl:block 2xl:left-[232px]"
      onPointerDown={onClose}
    >
      <div
        className="max-h-dvh overflow-y-auto border-b border-navy/15 bg-ivory px-[clamp(40px,6vw,95px)] pt-7 pb-11 shadow-[0_24px_60px_rgba(0,22,65,.12)] animate-[menu-in_260ms_cubic-bezier(.2,.7,.2,1)] dark:border-white/15 dark:bg-[#08172a] dark:shadow-black/30"
        role="region"
        aria-label="Expertise menu"
        onPointerDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-navy/15 pb-5 dark:border-white/15">
          <Eyebrow className="text-navy dark:text-paper">
            {content.eyebrow}
          </Eyebrow>
          <button
            className="flex size-11 items-center justify-center border border-navy/20 bg-transparent text-navy dark:border-white/25 dark:text-paper"
            type="button"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={23} />
          </button>
        </div>
        <div className="grid grid-cols-[1.2fr_.75fr_.75fr] gap-14 py-10">
          <div>
            <h2 className="my-3 whitespace-pre-line font-serif text-[42px] leading-[.98] font-normal tracking-[-.035em] text-navy dark:text-paper">
              {content.heading}
            </h2>
            <Link
              className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-teal-dark no-underline dark:text-teal"
              to="/expertise"
              onClick={onClose}
            >
              All expertise <ArrowRight size={16} />
            </Link>
          </div>
          {content.columns.map((column, index) => (
            <div className="flex flex-col gap-3.5" key={index}>
              {column.links.map((link) => {
                const expertiseHref =
                  expertiseSlugs[link as keyof typeof expertiseSlugs];
                const href =
                  menu === "expertise" && expertiseHref
                    ? `/expertise/${expertiseHref}`
                    : "/#expertise";
                const isCurrent = pathname === href;
                return (
                  <Link
                    className={`w-fit text-[13px] no-underline transition-colors hover:text-teal-dark dark:hover:text-teal ${isCurrent ? "font-semibold text-teal-dark dark:text-teal" : "text-navy dark:text-paper"}`}
                    to={href}
                    key={link}
                    onClick={onClose}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {link}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
        <Link
          className="grid grid-cols-[160px_1fr_30px] items-center border-t border-navy/15 pt-6 text-navy no-underline dark:border-white/15 dark:text-paper"
          to={`/intelligence/${featuredInsight.slug}`}
          onClick={onClose}
        >
          <Eyebrow>Featured insight</Eyebrow>
          <strong className="font-serif text-[22px] font-normal">
            {featuredInsight.title}
          </strong>
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
