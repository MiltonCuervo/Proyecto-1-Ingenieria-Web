interface SectionHeadingProps {
  title: string;
  description: string;
  id?: string;
}

export function SectionHeading({ title, description, id }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow">Portafolio · Ingeniería de Sistemas</p>
      <h2 id={id}>{title}</h2>
      <p className="section-heading__description">{description}</p>
    </header>
  );
}
