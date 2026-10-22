import React from "react";
import { projects } from "../constants";
import Section from "../components/Section";
import { ArrowIcon } from "../components/Icons";

const Projects = () => (
  <Section id="projects" label="Projects">
    <ul className="space-y-3">
      {projects.map((p) => (
        <li key={p.name}>
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-lg p-4 -mx-4 hover:bg-slate-100 dark:hover:bg-slate-800/50"
          >
            <h3 className="inline-flex items-center font-medium text-slate-900 group-hover:text-sky-700 dark:text-slate-200 dark:group-hover:text-sky-300">
              {p.name}
              <ArrowIcon className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </h3>
            <p className="mt-1 text-sm">{p.desc}</p>
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Projects;
