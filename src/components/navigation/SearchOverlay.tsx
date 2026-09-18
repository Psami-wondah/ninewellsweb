import { ArrowRight, X } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { searchEntries } from "../../data/search";
import { useDialogFocus } from "../../hooks/useDialogFocus";
import { Eyebrow } from "../ui/Eyebrow";

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const dialogRef = useDialogFocus();
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return searchEntries
      .filter((entry) =>
        `${entry.title} ${entry.description} ${entry.type}`
          .toLowerCase()
          .includes(normalizedQuery),
      )
      .slice(0, 8);
  }, [query]);
  return (
    <div
      ref={dialogRef}
      className="fixed inset-x-0 top-0 z-[80] h-dvh min-h-0 overflow-y-auto border-b border-navy/15 bg-ivory px-[clamp(24px,6vw,95px)] pt-7 pb-11 shadow-[0_24px_60px_rgba(0,22,65,.12)] dark:border-white/15 dark:bg-[#08172a] xl:left-[216px] xl:h-auto xl:max-h-dvh xl:min-h-[460px] 2xl:left-[232px]"
      role="dialog"
      aria-modal="true"
      aria-label="Search Ninewells"
    >
      <div className="flex items-center justify-between border-b border-navy/15 pb-5 dark:border-white/15">
        <Eyebrow className="text-navy dark:text-paper">
          Search Ninewells
        </Eyebrow>
        <button
          className="flex size-11 items-center justify-center border border-navy/20 bg-transparent text-navy dark:border-white/25 dark:text-paper"
          type="button"
          onClick={onClose}
          aria-label="Close search"
        >
          <X size={23} />
        </button>
      </div>
      <form className="my-14" onSubmit={(event) => event.preventDefault()}>
        <label
          className="mb-4 block text-[11px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal"
          htmlFor="site-search"
        >
          What can we help you find?
        </label>
        <div className="flex border-b border-navy dark:border-paper">
          <input
            data-autofocus
            className="w-full border-0 bg-transparent py-4 font-serif text-[clamp(30px,4vw,55px)] text-navy outline-0 placeholder:text-slate/85 dark:text-paper dark:placeholder:text-paper/70"
            id="site-search"
            type="search"
            placeholder="Search people, expertise and intelligence"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            className="w-16 border-0 bg-transparent text-navy dark:text-paper"
            type="submit"
            aria-label="Submit search"
          >
            <ArrowRight size={27} />
          </button>
        </div>
      </form>
      {query.trim() ? (
        <div className="border-t border-navy/20 dark:border-white/20">
          {results.length ? (
            results.map((result) => (
              <Link
                className="grid grid-cols-[100px_1fr_20px] items-center gap-4 border-b border-navy/15 py-4 text-navy no-underline dark:border-white/15 dark:text-paper"
                to={result.href}
                key={result.href}
                onClick={onClose}
              >
                <small className="text-[9px] font-semibold uppercase tracking-[.12em] text-teal-dark dark:text-teal">
                  {result.type}
                </small>
                <span>
                  <strong className="block font-serif text-[21px] font-normal">
                    {result.title}
                  </strong>
                  <span className="mt-1 block text-[11px] leading-5 text-slate dark:text-paper/70">
                    {result.description}
                  </span>
                </span>
                <ArrowRight size={17} />
              </Link>
            ))
          ) : (
            <p className="py-6 text-[13px] text-slate dark:text-paper/75">
              No Ninewells pages match that search.
            </p>
          )}
        </div>
      ) : null}
      <div className="flex flex-wrap gap-7 text-[12px] text-navy dark:text-paper">
        <span className="font-semibold text-teal-dark dark:text-teal">
          Suggested
        </span>
        <Link className="no-underline" to="/expertise/energy" onClick={onClose}>
          Energy
        </Link>
        <Link className="no-underline" to="/people" onClick={onClose}>
          Meet the team
        </Link>
        <Link className="no-underline" to="/careers" onClick={onClose}>
          Careers
        </Link>
        <Link className="no-underline" to="/intelligence" onClick={onClose}>
          Latest intelligence
        </Link>
      </div>
    </div>
  );
}
