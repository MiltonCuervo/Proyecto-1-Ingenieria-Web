import { Badge } from "@/components/atoms/Badge";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section className="content-section education-section" id="educacion" aria-labelledby="education-title">
      <SectionHeading title="Educación" id="education-title" description="Formación profesional y técnica." />
      <div className="education-card">
        {education.map((item) => (
          <article className="education-item" key={`${item.institution}-${item.program}`}>
            <div className="education-item__meta">
              <h3>{item.institution}</h3>
              <p>{item.program}</p>
              <Badge>{item.date}</Badge>
            </div>
            <div className="education-item__description">
              <h4>{item.program}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
