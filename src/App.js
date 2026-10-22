import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./views/About";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import { ThemeProvider } from "./themeProvider";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Highlights the last section whose top has scrolled past 40% of the viewport,
// or the final section once the page is scrolled to the bottom.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) return setActive(ids[ids.length - 1]);
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

const sectionIds = sections.map((s) => s.id);

function App() {
  const active = useActiveSection(sectionIds);

  return (
    <ThemeProvider>
      <div
        id="top"
        className="min-h-screen bg-slate-50 leading-relaxed text-slate-600 antialiased selection:bg-sky-200 selection:text-sky-900 dark:bg-slate-900 dark:text-slate-400"
      >
        <a
          href="#about"
          className="sr-only rounded bg-sky-700 px-4 py-3 text-sm font-bold text-white focus:not-sr-only focus:absolute focus:left-2 focus:top-2"
        >
          Skip to content
        </a>
        <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Sidebar sections={sections} active={active} />
            <main className="pt-24 lg:w-1/2 lg:py-24">
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
              <footer className="pb-16 text-sm text-slate-500 sm:pb-0">Built by Clifton Landry with React and Tailwind CSS.</footer>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
