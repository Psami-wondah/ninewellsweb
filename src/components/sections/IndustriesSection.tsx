import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import lagosIllustration from '../../assets/lagos-bridge-pen-illustration.webp'
import { sectors } from '../../data/siteContent'
import { Eyebrow } from '../ui/Eyebrow'

export function IndustriesSection() {
  return (
    <section className="grid min-h-[820px] bg-ivory dark:bg-[#0a192c] lg:grid-cols-[1.1fr_.9fr]" id="industries" aria-labelledby="industries-heading">
      <figure className="relative order-2 m-0 min-h-[390px] overflow-hidden bg-[#eef0f5] lg:order-1 lg:min-h-[740px]" data-reveal="left">
        <img className="h-full w-full object-cover object-center mix-blend-multiply" src={lagosIllustration} alt="Original blue pen-and-ink illustration of the Lekki–Ikoyi Link Bridge and Lagos skyline" />
        <figcaption className="absolute bottom-0 left-0 bg-navy-deep/95 px-6 py-4 text-[10px] uppercase tracking-[.13em] text-ivory">Lagos in line / Original Ninewells study</figcaption>
      </figure>
      <div className="order-1 px-[clamp(22px,6vw,90px)] py-[clamp(76px,9vw,104px)] lg:order-2" data-reveal="right" data-reveal-delay="1">
        <Eyebrow>Industries</Eyebrow>
        <h2 className="my-6 font-serif text-[clamp(43px,5vw,70px)] leading-[.98] font-normal tracking-[-.04em] text-navy dark:text-paper" id="industries-heading">Knowledge of the forces shaping your world.</h2>
        <p className="mb-8 max-w-[450px] text-[14px] leading-6 text-slate dark:text-paper/85">Sector fluency changes the quality of legal advice. We connect Nigerian law with the commercial, regulatory and operational realities around it.</p>
        <div className="mt-12 border-t border-navy dark:border-paper">
          {sectors.map(([title, detail], index) => (
            <Link className="group grid min-h-[88px] grid-cols-[34px_1fr_24px] items-center border-b border-navy/15 text-navy no-underline dark:border-white/15 dark:text-paper sm:grid-cols-[38px_minmax(140px,1fr)_minmax(140px,.9fr)_24px]" to="/contact" key={title}>
              <span className="text-[12px] font-semibold text-teal-dark dark:text-teal-light">0{index + 1}</span>
              <strong className="font-serif text-[21px] font-normal">{title}</strong>
              <small className="hidden text-[11px] leading-4 text-slate dark:text-paper/80 sm:block">{detail}</small>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
