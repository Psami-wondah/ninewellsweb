import { ArrowRight, MagnifyingGlass, X } from '@phosphor-icons/react'
import { useMemo, useState } from 'react'
import { people } from '../../data/people'
import { Eyebrow } from '../ui/Eyebrow'

const expertiseOptions = [...new Set(people.flatMap((person) => person.expertise))]
const industryOptions = [...new Set(people.flatMap((person) => person.industries))]
const locationOptions = [...new Set(people.map((person) => person.location))]
const positionOptions = [...new Set(people.map((person) => person.position))]

export function PeopleDirectoryPage() {
  const [query, setQuery] = useState('')
  const [expertise, setExpertise] = useState('')
  const [industry, setIndustry] = useState('')
  const [location, setLocation] = useState('')
  const [position, setPosition] = useState('')

  const filteredPeople = useMemo(() => people.filter((person) => {
    const searchable = `${person.name} ${person.role} ${person.expertise.join(' ')} ${person.industries.join(' ')}`.toLowerCase()
    return (!query || searchable.includes(query.toLowerCase()))
      && (!expertise || person.expertise.includes(expertise))
      && (!industry || person.industries.includes(industry))
      && (!location || person.location === location)
      && (!position || person.position === position)
  }), [query, expertise, industry, location, position])

  const hasFilters = Boolean(query || expertise || industry || location || position)
  const clearFilters = () => {
    setQuery('')
    setExpertise('')
    setIndustry('')
    setLocation('')
    setPosition('')
  }

  return (
    <>
      <section className="border-b border-navy/15 bg-ivory px-[clamp(22px,7vw,118px)] pt-[clamp(58px,8vw,108px)] pb-[clamp(64px,8vw,98px)] dark:border-white/15 dark:bg-[#08172a]" aria-labelledby="people-directory-heading">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
            <Eyebrow>People / Directory</Eyebrow>
            <h1 className="mt-6 mb-0 max-w-[760px] font-serif text-[clamp(60px,8vw,112px)] leading-[.86] font-normal tracking-[-.055em] text-navy dark:text-paper" id="people-directory-heading">Find the right perspective.</h1>
          </div>
          <p className="m-0 max-w-[490px] text-[15px] leading-7 text-slate dark:text-paper/80">Find a Ninewells lawyer by expertise, sector or market. Every relationship is led by senior people who stay close to the work.</p>
        </div>
      </section>

      <section className="bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(54px,7vw,86px)] dark:bg-[#071224]" aria-label="People search and results">
        <div className="border-y border-navy/20 bg-ivory dark:border-white/20 dark:bg-[#0a192c]">
          <label className="grid min-h-[84px] grid-cols-[32px_1fr] items-center gap-3 border-b border-navy/15 px-5 dark:border-white/15 sm:px-7" htmlFor="people-search">
            <MagnifyingGlass className="text-teal-dark dark:text-teal-light" size={23} aria-hidden="true" />
            <span className="sr-only">Search by name or keyword</span>
            <input className="h-full w-full border-0 bg-transparent font-serif text-[clamp(23px,3vw,34px)] text-navy outline-0 placeholder:text-slate/75 dark:text-paper dark:placeholder:text-paper/55" id="people-search" type="search" placeholder="Search by name or keyword" value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4">
            <FilterSelect label="Expertise" value={expertise} options={expertiseOptions} onChange={setExpertise} />
            <FilterSelect label="Industry" value={industry} options={industryOptions} onChange={setIndustry} />
            <FilterSelect label="Location" value={location} options={locationOptions} onChange={setLocation} />
            <FilterSelect label="Position" value={position} options={positionOptions} onChange={setPosition} />
          </div>
        </div>

        <div className="flex min-h-[92px] items-center justify-between border-b border-navy px-1 dark:border-paper" aria-live="polite">
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[.14em] text-navy dark:text-paper">{filteredPeople.length} {filteredPeople.length === 1 ? 'lawyer' : 'lawyers'}</p>
          {hasFilters ? <button className="inline-flex min-h-11 items-center gap-2 border-0 bg-transparent text-[12px] font-semibold text-teal-dark dark:text-teal-light" type="button" onClick={clearFilters}>Clear filters <X size={16} /></button> : null}
        </div>

        {filteredPeople.length > 0 ? (
          <div>
            {filteredPeople.map((person, index) => (
              <a className="group grid gap-5 border-b border-navy/15 py-8 text-navy no-underline dark:border-white/15 dark:text-paper md:grid-cols-[64px_1.1fr_.8fr_52px] md:items-center lg:py-10" href={`/people/${person.slug}`} key={person.slug}>
                <span className="font-serif text-[34px] text-teal-dark dark:text-teal-light">{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <small className="text-[9px] font-semibold uppercase tracking-[.13em] text-teal-dark dark:text-teal-light">{person.location} · {person.position}</small>
                  <strong className="mt-3 block font-serif text-[clamp(31px,3vw,45px)] leading-none font-normal">{person.name}</strong>
                  <span className="mt-3 block text-[13px] font-medium text-slate dark:text-paper/80">{person.role}</span>
                </span>
                <span className="text-[12px] leading-5 text-slate dark:text-paper/80">{person.expertise.join(' · ')}</span>
                <span className="flex size-12 items-center justify-center border border-navy/30 text-navy transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-navy-deep dark:border-white/35 dark:text-paper" aria-hidden="true"><ArrowRight size={20} /></span>
              </a>
            ))}
          </div>
        ) : (
          <div className="border-b border-navy/15 py-24 text-center dark:border-white/15">
            <p className="font-serif text-[34px] text-navy dark:text-paper">No lawyers match those filters.</p>
            <button className="mt-2 border-0 border-b border-teal bg-transparent pb-1 text-[13px] font-semibold text-navy dark:text-paper" type="button" onClick={clearFilters}>Reset the directory</button>
          </div>
        )}
      </section>
    </>
  )
}

function FilterSelect({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="border-b border-navy/15 px-5 py-4 dark:border-white/15 sm:px-7 xl:border-r xl:border-b-0 xl:last:border-r-0">
      <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[.16em] text-slate dark:text-paper/65">{label}</span>
      <select className="min-h-9 w-full cursor-pointer border-0 bg-transparent p-0 text-[13px] font-semibold text-navy outline-0 dark:text-paper dark:[color-scheme:dark]" value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">All {label.toLowerCase()}</option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
    </label>
  )
}
