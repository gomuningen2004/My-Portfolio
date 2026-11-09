import { BusinessCenterOutlined } from "@mui/icons-material";
import { journey } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function EducationTimeline() {
  return (
    <section className="bg-[#0e1319] py-[82px] pb-[135px] md:py-28">
      <div className="mx-auto max-w-6xl px-5" id="experience">
        <SectionHeading
          eyebrow="03 / THE JOURNEY"
          title="Experience & education."
          description="From the classroom to my current role in Data Engineering."
        />
        <ol className="education-timeline relative mt-[38px] flex list-none flex-col gap-[22px] pl-7 md:mt-[30px] md:grid md:min-h-[520px] md:grid-cols-4 md:gap-0 md:p-0">
          {journey.map((item, index) => (
            <li
              className="relative flex min-h-0 flex-col items-stretch text-left md:min-h-[520px] md:items-center md:justify-between md:text-center"
              key={item.kind === "education" ? item.institution : item.organization}
            >
              <span
                className="absolute left-[-27px] top-6 z-1 h-[14px] w-[14px] rounded-full border-[3px] border-[#0e1319] bg-accent shadow-[0_0_0_1px_#c5f467,0_0_18px_rgba(197,244,103,0.38)] md:left-1/2 md:top-[calc(50%-7px)] md:-translate-x-1/2"
                aria-hidden="true"
              />
              <article
                className={`relative z-1 w-full rounded-xl border border-line bg-[#141b22] p-5 text-left md:w-[calc(100%-18px)] md:max-w-[300px] md:p-5 ${
                  index % 2 === 0 ? "md:mb-auto" : "md:order-2 md:mt-auto"
                }`}
              >
                <div className="mb-[15px] grid h-10 w-10 place-items-center rounded-[10px] bg-accent/10 text-accent">
                  {item.kind === "education" ? (
                    <img className="h-6 w-6" src={item.icon} alt="" aria-hidden="true" />
                  ) : (
                    <BusinessCenterOutlined fontSize="small" aria-hidden="true" />
                  )}
                </div>
                <p className="mb-[7px] font-mono text-[0.64rem] tracking-[0.08em] text-accent uppercase">
                  {item.kind === "education" ? item.level : item.organization}
                </p>
                <h3 className="m-0 font-display text-[1.1rem] font-bold tracking-[-0.04em]">
                  {item.kind === "education" ? item.institution : item.role}
                </h3>
                <p className="my-[7px] mb-3 min-h-0 text-[0.82rem] leading-[1.55] text-muted md:min-h-[42px] md:text-[0.8rem]">
                  {item.kind === "education"
                    ? item.qualification
                    : item.department}
                </p>
              </article>
              <span
                className={`relative order-1 ml-1 mt-[9px] font-mono text-[0.7rem] text-[#899391] md:absolute md:top-[calc(50%+24px)] md:ml-0 md:mt-0 ${
                  index % 2 === 1 ? "md:bottom-[calc(50%+24px)] md:top-auto" : ""
                }`}
              >
                {item.kind === "education" ? item.years.split(" ")[0] : item.years}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
