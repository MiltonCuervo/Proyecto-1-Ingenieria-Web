import type { Skill } from "@/types/portfolio";
import { SkillItem } from "@/components/molecules/SkillItem";

export function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <section className="sidebar-group" aria-label={title}>
      <h3>{title}</h3>
      <div className="skill-list">
        {skills.map((skill) => <SkillItem key={skill.name} {...skill} />)}
      </div>
    </section>
  );
}
