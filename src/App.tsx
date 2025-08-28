import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

import Navbar from "./Navbar/Navbar";
import Home from "./Homepage/Home";
import Engineering from "./Engineering/Engineering";
import Architecture from "./Architecture/Architecture";
import PageNotFound from "./PageNotFound/PageNotFound";

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

var theme: string, setTheme: React.Dispatch<React.SetStateAction<string>>;

function initColorScheme(darkModeMediaQuery: MediaQueryList) {
  const storedTheme = localStorage.getItem("theme");
  if (!storedTheme) {
    if (darkModeMediaQuery.matches) return "dark";
    else return "light";
  } else return storedTheme;
}

function enableDarkMode(computedStyles: CSSStyleDeclaration) {
  document.body.classList.add("darkmode");

  const bg_dark = computedStyles.getPropertyValue("--background-image-dark");
  document.body.style.backgroundImage = `${bg_dark}`;

  // Remember choice
  localStorage.setItem("theme", "dark");
}

function disableDarkMode(computedStyles: CSSStyleDeclaration) {
  document.body.classList.remove("darkmode");

  const bg_light = computedStyles.getPropertyValue("--background-image");
  document.body.style.backgroundImage = `${bg_light}`;

  // Remember choice
  localStorage.setItem("theme", "light");
}

function toggleDarkMode() {
  if (theme === "dark") setTheme("light");
  else if (theme === "light") setTheme("dark");
}

function App() {
  [theme, setTheme] = useState(() => initColorScheme(mediaQuery));

  useEffect(() => {
    const computedStyles = window.getComputedStyle(document.documentElement);
    if (theme === "dark") enableDarkMode(computedStyles);
    else if (theme === "light") disableDarkMode(computedStyles);
  }, [theme]);

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} theme={theme}></Navbar>
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
