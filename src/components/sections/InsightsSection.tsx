import { ArrowRight } from '@phosphor-icons/react'
import { insightItems } from '../../data/siteContent'
import { Eyebrow } from '../ui/Eyebrow'
import { InlineLink } from '../ui/InlineLink'

export function InsightsSection() {
  return (
    <section className="grid gap-14 border-t border-navy/15 bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,112px)] dark:border-white/15 dark:bg-[#0a192c] lg:grid-cols-[.8fr_1.1fr] lg:gap-16" id="insights" aria-labelledby="insights-heading">
      <div>
        <Eyebrow>Perspective</Eyebrow>
        <h2 className="my-6 font-serif text-[clamp(43px,5vw,70px)] leading-[.98] font-normal tracking-[-.04em] text-navy dark:text-paper" id="insights-heading">Ideas for what comes next.</h2>
        <p className="mb-8 max-w-[450px] text-[14px] leading-6 text-slate dark:text-paper/85">Public updates and analysis from the firm and its lawyers on the shifts shaping Nigerian business.</p>
        <InlineLink href="https://www.linkedin.com/company/ninewells/">Follow Ninewells on LinkedIn</InlineLink>
      </div>
      <article className="relative min-h-[420px] bg-navy p-[clamp(28px,5vw,54px)] text-ivory dark:bg-[#001641]">
        <Eyebrow className="text-teal-light">Featured perspective · Energy outlook</Eyebrow>
        <h3 className="mt-24 mb-5 max-w-[560px] font-serif text-[clamp(38px,3.5vw,55px)] leading-none font-normal tracking-[-.035em]">Nigeria’s energy recovery—and what reform must unlock next</h3>
        <p className="max-w-[510px] text-[13px] leading-6 text-white/85">Managing Associate Abdulmajeed Abolaji considers production recovery, investor interest, upstream divestments and host-community participation.</p>
        <a className="absolute right-7 bottom-7 flex size-[52px] items-center justify-center bg-teal text-navy-deep" href="https://www.linkedin.com/company/ninewells/" target="_blank" rel="noreferrer" aria-label="View the featured perspective on LinkedIn"><ArrowRight size={25} /></a>
      </article>
      <div className="border-t border-navy dark:border-paper lg:col-span-2">
        {insightItems.map((item, index) => (
          <a className="group grid min-h-[110px] grid-cols-[36px_1fr_24px] items-center gap-2 border-b border-navy/15 py-5 text-navy no-underline dark:border-white/15 dark:text-paper lg:grid-cols-[60px_1fr_30px]" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
            <span className="text-[12px] font-semibold text-teal-dark dark:text-teal-light">0{index + 1}</span>
            <span className="flex flex-col items-start gap-2 lg:flex-row lg:items-baseline lg:justify-between lg:gap-7"><small className="text-[10px] font-semibold uppercase tracking-[.07em] text-slate dark:text-paper/75">{item.category} · {item.date}</small><span className="max-w-[640px]"><strong className="block font-serif text-[20px] font-normal lg:text-[24px]">{item.title}</strong><span className="mt-2 block text-[11px] leading-5 text-slate dark:text-paper/75">{item.summary}</span></span></span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
          </a>
        ))}
      </div>
    </section>
  )
}
