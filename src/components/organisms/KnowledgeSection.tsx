"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/atoms/Icon";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { knowledge } from "@/data/portfolio";

export function KnowledgeSection() {
  return (
    <section className="content-section" id="conocimientos" aria-labelledby="knowledge-title">
      <SectionHeading title="Conocimientos" id="knowledge-title" description="Herramientas y áreas en las que he trabajado." />
      <div className="knowledge-grid">
        {knowledge.map(({ title, description, icon: KnowledgeIcon }, index) => (
          <motion.article
            className="knowledge-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
          >
            <span className="knowledge-card__icon"><Icon icon={KnowledgeIcon} size={28} strokeWidth={1.7} /></span>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
