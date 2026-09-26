"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { knowledge } from "@/data/portfolio";

export function KnowledgeSection() {
  return (
    <section className="content-section" id="conocimientos" aria-labelledby="knowledge-title">
      <SectionHeading title="Conocimientos" id="knowledge-title" description="Una base técnica en constante crecimiento, con atención al detalle y a las personas que usan cada producto." />
      <div className="knowledge-grid">
        {knowledge.map(({ title, description, icon: Icon }, index) => (
          <motion.article
            className="knowledge-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <span className="knowledge-card__icon"><Icon size={28} strokeWidth={1.7} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
