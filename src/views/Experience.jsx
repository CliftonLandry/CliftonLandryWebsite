import React from "react";
import { experience, profile } from "../constants";
import Section, { Chip } from "../components/Section";
import { ArrowIcon } from "../components/Icons";

const Experience = () => (
  <Section id="experience" label="Experience">
    <ol className="space-y-14">
      {experience.map((job) => (
        <li key={job.company}>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {job.company}
            <span className="ml-2 text-sm font-normal text-slate-500">
              {job.note} · {job.location}
            </span>
          </h3>

          <ol className="mt-4 space-y-8 border-l border-slate-300 pl-6 dark:border-slate-700">
            {job.roles.map((role) => (
              <li key={role.title} className="relative">
                <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-sky-600 ring-4 ring-slate-50 dark:bg-sky-400 dark:ring-slate-900" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-medium text-slate-900 dark:text-slate-200">{role.title}</h4>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{role.dates}</p>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm marker:text-slate-400">
                  {role.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                  {role.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
    <a
      href={profile.resume}
      target="_blank"
      rel="noreferrer"
      className="group mt-12 inline-flex items-center font-semibold text-slate-900 dark:text-slate-200"
    >
      <span className="border-b border-transparent group-hover:border-sky-500">View full resume</span>
      <ArrowIcon className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  </Section>
);

export default Experience;
