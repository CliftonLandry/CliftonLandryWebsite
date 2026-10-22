import React from "react";

// The section label sticks to the top on mobile; on desktop it sits inline above the content.
const Section = ({ id, label, children }) => (
  <section id={id} aria-label={label} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
    <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-50/75 px-6 py-5 backdrop-blur dark:bg-slate-900/75 md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-6 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none lg:dark:bg-transparent">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-200">{label}</h2>
    </div>
    {children}
  </section>
);

export const Chip = ({ children }) => (
  <li className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium leading-5 text-sky-800 dark:bg-sky-400/10 dark:text-sky-300">
    {children}
  </li>
);

export default Section;
