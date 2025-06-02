"use client";
import { getItem, setItem } from "@/lib/localStorage";
import { useEffect, useState } from "react";

function Index() {
  const [theme, setTheme] = useState("light");
  // const [theme, setTheme] = useState(() => {
  //     if (typeof window !== "undefined") {
  //       return localStorage.getItem("theme") || "light";
  //     }
  //     return "light";
  //   });

  useEffect(() => {
    setTheme(getItem("theme") || "light");
  }, []);
  
  useEffect(() => {
    // Apply theme to the <html> tag
    document.documentElement.setAttribute("data-theme", theme);
    setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`p-2 transition-colors rounded-md ${theme==="dark" ? "bg-gray-200":"bg-gray-800"}`}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default Index;
