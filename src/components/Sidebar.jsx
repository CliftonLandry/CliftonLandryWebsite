import React, { useContext } from "react";
import { contactLinks, profile } from "../constants";
import { ThemeContext } from "../themeProvider";
import { iconFor, MoonIcon, SunIcon } from "./Icons";

const Sidebar = ({ sections, active }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
          <a href="#top">{profile.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 dark:text-slate-200 sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{profile.tagline}</p>

        <nav className="hidden lg:block" aria-label="In-page">
          <ul className="mt-16 w-max">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="group flex items-center py-3">
                    <span
                      className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-900 dark:group-hover:bg-slate-200 ${
                        isActive ? "w-16 bg-slate-900 dark:bg-slate-200" : "w-8 bg-slate-400 dark:bg-slate-600"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-900 dark:group-hover:text-slate-200 ${
                        isActive ? "text-slate-900 dark:text-slate-200" : "text-slate-500"
                      }`}
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-5">
        {contactLinks.map((el) => {
          const Icon = iconFor[el.name];
          return (
            <a
              key={el.name}
              href={el.link}
              target={el.link.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
              aria-label={el.name}
            >
              <Icon />
            </a>
          );
        })}
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="ml-2 rounded-md border border-sky-600 px-4 py-1.5 text-sm font-medium text-sky-700 hover:bg-sky-50 dark:border-sky-400 dark:text-sky-300 dark:hover:bg-sky-400/10"
        >
          Resume
        </a>
        <button
          type="button"
          onClick={() => theme.dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" })}
          className="rounded-md p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Sidebar;
