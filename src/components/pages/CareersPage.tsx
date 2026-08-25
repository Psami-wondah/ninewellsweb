import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  FileArrowUp,
} from "@phosphor-icons/react";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { company } from "../../data/company";
import { Eyebrow } from "../ui/Eyebrow";

const acceptedCvExtensions = [".pdf", ".doc", ".docx"];
const maximumCvSize = 5 * 1024 * 1024;

export function CareersPage() {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleCvChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0] ?? null;
    setSubmissionMessage("");

    if (!file) {
      setCvFile(null);
      setFileError("");
      return;
    }

    const lowerCaseName = file.name.toLowerCase();
    const hasAcceptedExtension = acceptedCvExtensions.some((extension) =>
      lowerCaseName.endsWith(extension),
    );

    if (!hasAcceptedExtension) {
      event.currentTarget.value = "";
      setCvFile(null);
      setFileError("Please choose a PDF, DOC or DOCX file.");
      return;
    }

    if (file.size > maximumCvSize) {
      event.currentTarget.value = "";
      setCvFile(null);
      setFileError("Your CV must be 5 MB or smaller.");
      return;
    }

    setCvFile(file);
    setFileError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionMessage("");

    if (!cvFile) {
      setFileError("Please attach your CV before continuing.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("fullName") ?? "");
    const role = String(formData.get("roleType") ?? "Career opportunity");
    const subject = `Career application: ${role} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${String(formData.get("email") ?? "")}`,
      `Phone: ${String(formData.get("phone") ?? "")}`,
      `Role: ${role}`,
      `Preferred office: ${String(formData.get("office") ?? "")}`,
      `Experience: ${String(formData.get("experience") ?? "")}`,
      `LinkedIn: ${String(formData.get("linkedin") ?? "Not provided")}`,
      "",
      "Application note:",
      String(formData.get("applicationNote") ?? ""),
      "",
      `CV to attach: ${cvFile.name}`,
    ].join("\n");

    setSubmissionMessage(
      `Your application email is ready. Attach “${cvFile.name}” in your email app, then send it to Ninewells.`,
    );
    window.location.href = `mailto:${company.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section
        className="bg-navy px-[clamp(22px,7vw,118px)] pt-[clamp(60px,8vw,105px)] pb-[clamp(76px,10vw,130px)] text-white dark:bg-[#030d1d]"
        aria-labelledby="careers-heading"
      >
        <Eyebrow className="text-teal">Careers at Ninewells</Eyebrow>
        <div className="mt-[clamp(70px,10vw,130px)] grid gap-12 lg:grid-cols-[1.2fr_.6fr] lg:items-end">
          <h1
            className="m-0 max-w-[930px] font-serif text-[clamp(65px,9vw,126px)] leading-[.84] font-normal tracking-[-.055em]"
            id="careers-heading"
          >
            Build a practice that sees the whole picture.
          </h1>
          <p className="m-0 max-w-[470px] border-t border-white/30 pt-6 text-[15px] leading-7 text-white/82">
            Join an integrated Nigerian firm where rigorous thinking,
            commercial awareness and collaboration shape the work we do for
            clients.
          </p>
        </div>
      </section>

      <section
        className="bg-ivory px-[clamp(22px,7vw,118px)] py-[clamp(72px,8vw,108px)] dark:bg-[#08172a]"
        aria-labelledby="careers-culture-heading"
      >
        <div className="grid gap-12 lg:grid-cols-[.55fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow>Working here</Eyebrow>
            <h2
              className="mt-5 mb-0 font-serif text-[clamp(40px,5vw,66px)] leading-none font-normal tracking-[-.04em] text-navy dark:text-paper"
              id="careers-culture-heading"
            >
              Develop through meaningful work.
            </h2>
          </div>
          <div className="grid border-t border-l border-navy/20 dark:border-white/20 md:grid-cols-3">
            {[
              ["01", "Integrated teams", "Work across disciplines on complex Nigerian and cross-border matters."],
              ["02", "Senior access", "Learn through close collaboration with experienced practitioners."],
              ["03", "Professional growth", "Build sound judgement through responsibility, feedback and continuous development."],
            ].map(([number, title, description]) => (
              <article
                className="min-h-[260px] border-r border-b border-navy/20 p-7 dark:border-white/20"
                key={title}
              >
                <span className="text-[10px] font-semibold text-teal-dark dark:text-teal">
                  {number}
                </span>
                <h3 className="mt-14 mb-0 font-serif text-[25px] font-normal text-navy dark:text-paper">
                  {title}
                </h3>
                <p className="mt-4 mb-0 text-[12px] leading-6 text-slate dark:text-paper/75">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="grid gap-14 bg-paper px-[clamp(22px,7vw,118px)] py-[clamp(76px,9vw,118px)] dark:bg-[#071224] lg:grid-cols-[.42fr_1.08fr] lg:gap-[clamp(70px,9vw,150px)]"
        aria-labelledby="application-heading"
      >
        <div className="self-start lg:sticky lg:top-14">
          <Eyebrow>Apply to Ninewells</Eyebrow>
          <h2
            className="mt-5 mb-0 font-serif text-[clamp(40px,5vw,64px)] leading-none font-normal tracking-[-.04em] text-navy dark:text-paper"
            id="application-heading"
          >
            Tell us where you could contribute.
          </h2>
          <p className="mt-7 max-w-[390px] text-[13px] leading-6 text-slate dark:text-paper/78">
            We welcome applications from experienced lawyers, early-career
            candidates, interns and business-services professionals.
          </p>
          <a
            className="mt-6 inline-flex items-center gap-3 border-b border-teal pb-1.5 text-[12px] font-semibold text-navy no-underline dark:text-paper"
            href={`mailto:${company.contact.email}`}
          >
            Recruitment enquiries <ArrowRight size={17} />
          </a>
        </div>

        <form
          className="grid gap-x-6 gap-y-7 border-t border-navy pt-8 dark:border-paper md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <FormField label="Full name" htmlFor="career-full-name">
            <input
              className={inputClassName}
              id="career-full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
            />
          </FormField>
          <FormField label="Email address" htmlFor="career-email">
            <input
              className={inputClassName}
              id="career-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </FormField>
          <FormField label="Phone number" htmlFor="career-phone">
            <input
              className={inputClassName}
              id="career-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </FormField>
          <FormField label="Area of interest" htmlFor="career-role">
            <select
              className={inputClassName}
              id="career-role"
              name="roleType"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an area
              </option>
              <option>Experienced lawyer</option>
              <option>Graduate or NYSC placement</option>
              <option>Internship</option>
              <option>Business services</option>
              <option>Other opportunity</option>
            </select>
          </FormField>
          <FormField label="Preferred office" htmlFor="career-office">
            <select
              className={inputClassName}
              id="career-office"
              name="office"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an office
              </option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Open to either office</option>
            </select>
          </FormField>
          <FormField label="Years of experience" htmlFor="career-experience">
            <select
              className={inputClassName}
              id="career-experience"
              name="experience"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select experience
              </option>
              <option>Student</option>
              <option>0–2 years</option>
              <option>3–5 years</option>
              <option>6–10 years</option>
              <option>11+ years</option>
            </select>
          </FormField>
          <div className="md:col-span-2">
            <FormField label="LinkedIn profile (optional)" htmlFor="career-linkedin">
              <input
                className={inputClassName}
                id="career-linkedin"
                name="linkedin"
                type="url"
                inputMode="url"
                placeholder="https://linkedin.com/in/your-profile"
              />
            </FormField>
          </div>
          <div className="md:col-span-2">
            <label
              className="block text-[10px] font-semibold uppercase tracking-[.1em] text-navy dark:text-paper"
              htmlFor="career-cv"
            >
              Curriculum vitae
            </label>
            <label
              className="mt-3 flex min-h-[118px] cursor-pointer items-center gap-5 border border-dashed border-navy/35 px-5 py-4 text-navy transition-colors hover:border-teal dark:border-white/35 dark:text-paper"
              htmlFor="career-cv"
            >
              <span className="flex size-12 shrink-0 items-center justify-center bg-teal/15 text-teal-dark dark:text-teal">
                <FileArrowUp size={24} aria-hidden="true" />
              </span>
              <span>
                <strong className="block text-[13px] font-semibold">
                  {cvFile ? cvFile.name : "Choose your CV"}
                </strong>
                <small className="mt-1 block text-[10px] leading-5 text-slate dark:text-paper/70">
                  PDF, DOC or DOCX · maximum 5 MB
                </small>
              </span>
            </label>
            <input
              className="sr-only"
              id="career-cv"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleCvChange}
              required
            />
            <p
              className="mt-2 mb-0 min-h-5 text-[11px] text-[#9b2c2c] dark:text-[#ffb4ab]"
              role={fileError ? "alert" : undefined}
            >
              {fileError}
            </p>
          </div>
          <div className="md:col-span-2">
            <FormField label="Application note" htmlFor="career-note">
              <textarea
                className={`${inputClassName} min-h-[150px] resize-y py-4`}
                id="career-note"
                name="applicationNote"
                placeholder="Tell us briefly about your experience and the work you are interested in."
                required
              />
            </FormField>
          </div>
          <label className="flex items-start gap-3 text-[11px] leading-5 text-slate dark:text-paper/75 md:col-span-2">
            <input
              className="mt-1 size-4 shrink-0 accent-teal-dark"
              name="consent"
              type="checkbox"
              required
            />
            I consent to Ninewells using the information supplied to consider
            my application and contact me about relevant opportunities.
          </label>
          <div className="border-t border-navy/15 pt-6 dark:border-white/15 md:col-span-2">
            <p className="mt-0 mb-5 max-w-[690px] text-[10px] leading-5 text-slate dark:text-paper/65">
              Online file delivery is not yet connected. Submitting this form
              opens a prepared email; attach the CV selected above before
              sending.
            </p>
            <button
              className="inline-flex min-h-[54px] items-center justify-center gap-6 border-0 bg-navy px-7 text-[12px] font-semibold text-white hover:bg-navy-deep dark:bg-teal dark:text-navy-deep"
              type="submit"
            >
              Prepare application email <Briefcase size={19} />
            </button>
            <p
              className="mt-5 mb-0 flex min-h-6 items-start gap-2 text-[11px] leading-5 text-teal-dark dark:text-teal"
              aria-live="polite"
            >
              {submissionMessage ? (
                <>
                  <CheckCircle className="mt-0.5 shrink-0" size={16} />
                  {submissionMessage}
                </>
              ) : null}
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

const inputClassName =
  "mt-3 min-h-[52px] w-full border border-navy/25 bg-transparent px-4 text-[13px] text-navy outline-0 placeholder:text-slate/60 focus:border-teal dark:border-white/25 dark:text-paper dark:placeholder:text-paper/45";

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-[10px] font-semibold uppercase tracking-[.1em] text-navy dark:text-paper"
        htmlFor={htmlFor}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
