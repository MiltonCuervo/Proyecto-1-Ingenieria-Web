interface ProgressBarProps {
  label: string;
  value?: number;
  proficiency?: string;
}

export function ProgressBar({ label, value, proficiency }: ProgressBarProps) {
  return (
    <div className="skill-meter">
      <div className="skill-meter__labels">
        <span>{label}</span>
        {typeof value === "number" && <span>{value}%</span>}
        {proficiency && <span>{proficiency}</span>}
      </div>
      {typeof value === "number" && (
        <div
          className="skill-meter__track"
          role="progressbar"
          aria-label={`${label}: ${value}%`}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span className="skill-meter__fill" style={{ width: `${value}%` }} />
        </div>
      )}
    </div>
  );
}
