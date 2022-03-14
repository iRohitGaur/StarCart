import React from "react";
import { useState, useEffect } from "react";
import { NotoV1Owl, NotoChicken } from "../../../assets/Icons";

const preferDarkQuery = "(prefers-color-scheme: dark)";

function DarkModeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // RG: Check if user has a preference
    const mediaQuery = window.matchMedia(preferDarkQuery);
    // RG: Check if user has a prefered mode set in localStorage.
    // If not then check for system preference match and provide the mode
    const savedTheme =
      localStorage.getItem("sui-mode") ??
      (mediaQuery.matches ? "dark" : "light");

    // RG: set theme based on the mode
    setTheme(() => {
      document.documentElement.setAttribute("sui-mode", savedTheme);
      return savedTheme;
    });
  }, []);

  // RG: Every time the "theme" changes, update the document and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("sui-mode", theme);
    localStorage.setItem("sui-mode", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <button className="btn_icon_fa" onClick={toggleTheme}>
      {theme === "light" && <NotoV1Owl />}
      {theme === "dark" && <NotoChicken />}
    </button>
  );
}

export default DarkModeButton;
