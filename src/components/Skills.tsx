import SkillCard from "./SkillCard";
import { skillGroups } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section className="py-[82px] pb-[125px] md:py-28" id="skills">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="02 / TOOLKIT"
          title="Tools I work with."
          description="A growing set of tools and technologies I use to bring ideas to life."
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[18px]">
          {skillGroups.map((group) => (
            <SkillCard group={group} key={group.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
