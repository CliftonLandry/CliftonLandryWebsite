import React from "react";
import { about, highlights } from "../constants";
import Section from "../components/Section";

const About = () => (
  <Section id="about" label="About">
    <div className="space-y-4">
      {about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
    <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {highlights.map((h) => (
        <div key={h.label} className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800/50">
          <dt className="sr-only">{h.label}</dt>
          <dd className="text-2xl font-bold text-sky-700 dark:text-sky-300">{h.value}</dd>
          <dd className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">{h.label}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default About;
