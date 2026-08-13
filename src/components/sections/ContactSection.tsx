import { ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Eyebrow } from '../ui/Eyebrow'

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep px-[clamp(22px,8vw,135px)] py-[clamp(82px,9vw,120px)] text-ivory dark:bg-[#020914]" id="contact" aria-labelledby="contact-heading">
      <div className="absolute top-0 right-[8%] h-2/3 w-px bg-teal/70" aria-hidden="true" />
      <div data-reveal="up">
        <Eyebrow className="text-teal-light">Start a conversation</Eyebrow>
        <h2 className="my-7 max-w-[980px] font-serif text-[clamp(52px,7vw,96px)] leading-[.94] font-normal tracking-[-.045em] text-ivory" id="contact-heading">When the decision matters,<br />talk to Ninewells.</h2>
        <Link className="group inline-flex items-center gap-6 border-b border-teal-light pb-2 text-[15px] font-semibold text-ivory no-underline" to="/contact">Contact Ninewells <ArrowRight className="text-teal-light transition-transform group-hover:translate-x-1" size={22} /></Link>
      </div>
    </section>
  )
}
