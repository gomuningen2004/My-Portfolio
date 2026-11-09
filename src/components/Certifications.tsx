import { ArrowOutward, VerifiedOutlined } from "@mui/icons-material";
import { certifications } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section
      className="bg-[radial-gradient(ellipse_at_50%_20%,rgba(119,160,103,0.05),transparent_55%)] py-[76px] md:py-[95px]"
      id="certifications"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="05 / CONTINUOUS LEARNING"
          title="A few meaningful milestones."
          description="Three credentials that reflect my focus on analytics and modern web development."
        />
        <div className="grid gap-[14px] lg:grid-cols-2">
          {certifications.map((certification, index) => {
            const isGoogleCertificate = certification.courses !== undefined;

            return (
              <article
                className={`relative overflow-hidden rounded-[14px] border border-[rgba(164,196,187,0.16)] bg-[linear-gradient(145deg,rgba(21,29,36,0.96),rgba(15,21,27,0.96))] p-5 transition-colors hover:border-accent/35 sm:p-6 ${
                  isGoogleCertificate
                    ? "grid gap-7 lg:col-span-2 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10 lg:p-8"
                    : ""
                }`}
                key={certification.title}
              >
                <div className="flex flex-col items-start">
                  <div className="flex w-full items-center justify-between">
                    <span className="font-mono text-[0.62rem] tracking-[0.08em] text-[#899791]">
                      CREDENTIAL / 0{index + 1}
                    </span>
                    <span className="flex items-center gap-2">
                      <span
                        className={`rounded border px-2 py-1 font-mono text-[0.58rem] tracking-[0.06em] uppercase ${
                          certification.field === "Development"
                            ? "border-[#7dc0f2]/20 text-[#a7d4f4]"
                            : "border-accent/20 text-[#bfda9c]"
                        }`}
                      >
                        {certification.field}
                      </span>
                      <VerifiedOutlined className="text-[19px] text-accent" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-4 max-w-[620px] font-display text-xl leading-snug font-bold tracking-[-0.04em] sm:text-2xl">
                    {certification.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{certification.subtitle}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#9da9a6]">
                    <span>{certification.issuer}</span>
                    <span className="text-[#59665f]" aria-hidden="true">
                      /
                    </span>
                    {certification.issued && <span>Issued {certification.issued}</span>}
                  </div>
                  {certification.credentialUrl && (
                    <a
                      className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-md border border-accent/30 px-3 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View certificate <ArrowOutward fontSize="inherit" />
                    </a>
                  )}
                </div>
                {certification.courses && (
                  <div className="border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="font-mono text-[0.65rem] tracking-[0.08em] text-[#a7b3ac] uppercase">
                        Included courses
                      </h4>
                      <span className="font-mono text-xs text-accent">08</span>
                    </div>
                    <ol className="grid gap-2 sm:grid-cols-2">
                      {certification.courses.map((course, courseIndex) => (
                        <li
                          className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-black/10 px-3 py-2.5"
                          key={course}
                        >
                          <span className="mt-0.5 font-mono text-[0.62rem] text-accent">
                            {String(courseIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="text-xs leading-5 text-[#c2ccc6]">{course}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <a
          className="mt-[26px] inline-flex items-center gap-[5px] text-[0.85rem] text-accent transition-colors hover:text-[#e1f7bb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="https://www.linkedin.com/in/govardhan-annabathula-69330a257/"
          target="_blank"
          rel="noreferrer"
        >
          View credentials on LinkedIn <ArrowOutward fontSize="small" />
        </a>
      </div>
    </section>
  );
}
