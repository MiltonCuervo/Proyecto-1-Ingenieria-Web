import { ProgressBar } from "@/components/atoms/ProgressBar";

export function SkillItem({ name, level }: { name: string; level: number }) {
  return <ProgressBar label={name} value={level} />;
}
