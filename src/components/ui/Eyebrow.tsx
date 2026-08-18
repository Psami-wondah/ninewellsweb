import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`m-0 text-[11px] font-semibold uppercase tracking-[0.15em] text-teal ${className}`}
    >
      {children}
    </p>
  );
}
