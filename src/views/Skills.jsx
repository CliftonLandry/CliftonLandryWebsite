import React from "react";
import { education, skills } from "../constants";
import Section, { Chip } from "../components/Section";

const Skills = () => (
  <Section id="skills" label="Skills">
    <div className="space-y-8">
      {skills.map((s) => (
        <div key={s.group}>
          <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-200">{s.group}</h3>
          <ul className="flex flex-wrap gap-2">
            {s.items.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200">Education</h3>
        <p className="font-medium text-slate-800 dark:text-slate-300">{education.school}</p>
        <p className="text-sm">
          {education.degree} · {education.dates}
        </p>
      </div>
    </div>
  </Section>
);

export default Skills;
