import React, { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();

function getInitialState() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return { darkMode: saved === "dark" };
  } catch (e) {}
  const prefersLight =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  return { darkMode: !prefersLight };
}

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, undefined, getInitialState);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.darkMode);
    try {
      localStorage.setItem("theme", state.darkMode ? "dark" : "light");
    } catch (e) {}
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
