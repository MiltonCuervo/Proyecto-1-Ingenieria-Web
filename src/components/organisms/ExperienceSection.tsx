import { Badge } from "@/components/atoms/Badge";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="content-section experience-section" id="experiencia" aria-labelledby="experience-title">
      <SectionHeading title="Experiencia" id="experience-title" description="Experiencia en la Alcaldía de El Retiro, la Universidad de Antioquia y el sector financiero." />
      <div className="experience-card">
        {experience.map((item) => (
          <article className="experience-item" key={`${item.organization}-${item.role}`}>
            <div className="experience-item__header">
              <div>
                <h3>{item.organization}</h3>
                <p>{item.role}</p>
              </div>
              <Badge>{item.date}</Badge>
            </div>
            <ul>
              {item.description.map((description) => <li key={description}>{description}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
