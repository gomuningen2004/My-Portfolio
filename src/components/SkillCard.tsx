import { useState } from "react";
import {
  Analytics,
  Code,
  Groups2,
  KeyboardArrowDown,
  Lan,
} from "@mui/icons-material";
import type { SkillGroup } from "../data/portfolio";

const categoryIcons = {
  code: Code,
  data: Analytics,
  platform: Lan,
  people: Groups2,
};

interface SkillCardProps {
  group: SkillGroup;
}

export default function SkillCard({ group }: SkillCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = categoryIcons[group.icon];
  const visibleSkills = expanded ? group.skills : group.skills.slice(0, 8);

  return (
    <article className="relative min-h-0 overflow-hidden rounded-[13px] border border-[rgba(164,196,187,0.16)] bg-[linear-gradient(rgba(18,24,32,0.96),rgba(13,19,25,0.98)),repeating-linear-gradient(0deg,transparent_0_23px,rgba(197,244,103,0.08)_24px)] p-5 transition duration-200 before:absolute before:left-6 before:right-6 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(197,244,103,0.55),transparent)] before:content-[''] hover:-translate-y-[3px] hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2),0_0_25px_rgba(197,244,103,0.06)] md:min-h-[280px] md:p-6">
      <div className="relative z-1 flex items-center justify-between">
        <span className="font-mono text-[0.63rem] tracking-[0.055em] text-accent">
          {group.category}
        </span>
        <span className="font-mono text-[0.63rem] tracking-[0.055em] text-[#8d9996]">
          {String(group.skills.length).padStart(2, "0")} SKILLS
        </span>
      </div>
      <div className="relative z-1 mt-6 flex items-center gap-[13px]">
        <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[10px] border border-accent/30 bg-accent/[0.08] text-accent">
          <Icon className="text-[21px]" />
        </span>
        <h3 className="m-0 font-display text-[clamp(1.15rem,2vw,1.4rem)] font-bold tracking-[-0.035em]">
          {group.title}
        </h3>
      </div>
      <p className="relative z-1 my-[15px] mb-[18px] min-h-0 text-[0.83rem] leading-[1.65] text-[#9da9a6] md:min-h-[42px]">
        {group.description}
      </p>
      <div className="relative z-1 flex flex-wrap gap-2">
        {visibleSkills.map((skill, skillIndex) => (
          <span
            className={`inline-flex items-center gap-[7px] rounded-md border px-[10px] py-[7px] text-[0.72rem] leading-[1.2] transition-colors ${
              skillIndex === 0
                ? "border-accent/35 bg-accent/[0.07] text-[#e6f4ce]"
                : "border-white/10 bg-white/[0.025] text-[#c1cbc7] hover:border-accent/30 hover:bg-accent/[0.07] hover:text-[#e6f4ce]"
            }`}
            key={skill}
          >
            <span
              className={`h-[5px] w-[5px] shrink-0 rounded-full ${
                skillIndex === 0
                  ? "bg-accent shadow-[0_0_8px_rgba(197,244,103,0.65)]"
                  : "bg-[#72817a]"
              }`}
              aria-hidden="true"
            />
            {skill}
          </span>
        ))}
      </div>
      {group.skills.length > 8 && (
        <button
          className="relative z-1 -ml-[7px] mt-[15px] flex items-center gap-1 rounded px-[7px] py-[5px] text-[0.76rem] text-accent transition-colors hover:bg-accent/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((isExpanded) => !isExpanded)}
        >
          {expanded ? "Show less" : `View all ${group.skills.length} skills`}
          <KeyboardArrowDown
            className={`text-[18px] transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
      <span
        className="pointer-events-none absolute -bottom-[55px] -right-10 h-[140px] w-[140px] rounded-full border border-accent/[0.08] shadow-[0_0_0_12px_rgba(197,244,103,0.018),0_0_0_27px_rgba(197,244,103,0.014)]"
        aria-hidden="true"
      />
    </article>
  );
}
