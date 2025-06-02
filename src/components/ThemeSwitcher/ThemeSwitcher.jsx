"use client";
import { getItem, setItem } from "@/lib/localStorage";
import { useEffect, useState } from "react";

function Index() {
    const [theme, setTheme] = useState("dark");
    // const [theme, setTheme] = useState(() => {
    //     if (typeof window !== "undefined") {
    //       return localStorage.getItem("theme") || "light";
    //     }
    //     return "light";
    //   });

    useEffect(() => {
        setTheme(getItem("theme") || "dark");
    }, []);

    useEffect(() => {
        // Apply theme to the <html> tag
        if (theme === "dark") {
            document.documentElement.classList.add("my-app-dark");
        } else {
            document.documentElement.classList.remove("my-app-dark");
        }
        setItem("theme", theme);
        console.log("Theme changed to:", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`p-2 transition-colors cursor-pointer rounded-md ${
                theme === "dark" ? "bg-gray-200" : "bg-gray-800"
            }`}
        >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}

export default Index;
