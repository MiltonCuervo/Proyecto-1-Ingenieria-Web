interface ProgressBarProps {
  label: string;
  value: number;
}

export function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="skill-meter">
      <div className="skill-meter__labels">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
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
    </div>
  );
}
