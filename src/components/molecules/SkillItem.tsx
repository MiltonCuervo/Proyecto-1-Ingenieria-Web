import { ProgressBar } from "@/components/atoms/ProgressBar";
import type { Skill } from "@/types/portfolio";

export function SkillItem({ name, level, proficiency }: Skill) {
  return <ProgressBar label={name} value={level} proficiency={proficiency} />;
}
