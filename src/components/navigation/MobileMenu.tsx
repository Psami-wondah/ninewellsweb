import {
  ArrowDownRight,
  ArrowRight,
  MagnifyingGlass,
  Minus,
  Plus,
  X,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { company } from "../../data/company";
import {
  expertise,
  expertiseSlugs,
  navItems,
} from "../../data/siteContent";
import { useDialogFocus } from "../../hooks/useDialogFocus";
import { useActiveNavigation } from "../../hooks/useActiveNavigation";
import { BrandLogo } from "../ui/BrandLogo";
import { getNavHref } from "./navHelpers";

export function MobileMenu({
  onClose,
  onSearch,
}: {
  onClose: () => void;
  onSearch: () => void;
}) {
  const activeItem = useActiveNavigation();
  const { pathname } = useLocation();
  const [openGroup, setOpenGroup] = useState<string | null>(() =>
    activeItem === "Expertise" ? activeItem : null,
  );
  const dialogRef = useDialogFocus();
  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[90] flex flex-col overflow-y-auto bg-navy-deep text-ivory animate-[mobile-in_300ms_cubic-bezier(.2,.7,.2,1)] xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <div className="flex min-h-[76px] items-center justify-between border-b border-white/20 px-5">
        <BrandLogo className="w-[120px]" variant="dark" />
        <button
          className="flex size-11 items-center justify-center border-0 bg-transparent text-ivory"
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
        >
          <X size={26} />
        </button>
      </div>
      <nav className="px-5 py-6">
        {navItems.map((item, index) => {
          const expandable = item === "Expertise";
          const isOpen = openGroup === item;
          const isCurrent = activeItem === item;
          const label = (
            <span>
              <small className="inline-block w-9 font-sans text-[9px] text-teal">
                {String(index + 1).padStart(2, "0")}
              </small>
              {item}
            </span>
          );
          return (
            <div className="border-b border-white/15" key={item}>
              {expandable ? (
                <>
                  <button
                    className={`flex min-h-[60px] w-full items-center justify-between border-0 bg-transparent font-serif text-[25px] ${isCurrent ? "text-teal" : "text-ivory"}`}
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? null : item)}
                    aria-expanded={isOpen}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {label}
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                  <div
                    className={`flex flex-col overflow-hidden pl-9 transition-all duration-300 ${isOpen ? "max-h-[340px] pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                    aria-hidden={!isOpen}
                  >
                    {expertise.map((entry) => entry[1]).map((link) => {
                      const expertiseHref =
                        expertiseSlugs[link as keyof typeof expertiseSlugs];
                      const href =
                        item === "Expertise" && expertiseHref
                          ? `/expertise/${expertiseHref}`
                          : "/#expertise";
                      const isSubpageCurrent = pathname === href;
                      return (
                        <Link
                          className={`py-2 text-[13px] no-underline ${isSubpageCurrent ? "font-semibold text-teal" : "text-white/80"}`}
                          to={href}
                          key={link}
                          onClick={onClose}
                          tabIndex={isOpen ? 0 : -1}
                          aria-current={isSubpageCurrent ? "page" : undefined}
                        >
                          {link}
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                <Link
                  className={`flex min-h-[60px] items-center justify-between font-serif text-[25px] no-underline ${isCurrent ? "text-teal" : "text-ivory"}`}
                  to={getNavHref(item)}
                  onClick={onClose}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {label}
                  {getNavHref(item).startsWith("/#") ? (
                    <ArrowDownRight size={20} />
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
      <div className="mt-auto flex flex-col gap-4 px-5 pt-6 pb-9">
        <button
          className="flex min-h-11 items-center gap-3 border-0 bg-transparent text-left text-[12px] text-ivory"
          type="button"
          onClick={onSearch}
        >
          <MagnifyingGlass className="text-teal" size={18} /> Search Ninewells
        </button>
        <Link
          className="flex items-center justify-between text-[12px] text-teal no-underline"
          to="/contact"
          onClick={onClose}
        >
          Speak with our team <ArrowRight size={18} />
        </Link>
        <a
          className="text-[12px] text-white/85 no-underline"
          href={company.social.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          Ninewells on LinkedIn
        </a>
        <a
          className="text-[12px] text-white/85 no-underline"
          href={company.social.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Instagram {company.social.instagramHandle}
        </a>
      </div>
    </div>
  );
}
