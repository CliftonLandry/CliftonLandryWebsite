import React from "react";
import { profile } from "../constants";
import Section from "../components/Section";

const Contact = () => (
  <Section id="contact" label="Contact">
    <p>
      If you want to know more about me or my work, or if you would just like to say hello, send me a
      message. I'd love to hear from you.
    </p>
    <a
      href={`mailto:${profile.email}`}
      className="mt-6 inline-block rounded-md bg-sky-700 px-5 py-2.5 font-medium text-white hover:bg-sky-600 dark:bg-sky-400 dark:text-slate-900 dark:hover:bg-sky-300"
    >
      {profile.email}
    </a>
    <p className="mt-4 text-sm text-slate-500">Based in {profile.location}</p>
  </Section>
);

export default Contact;
